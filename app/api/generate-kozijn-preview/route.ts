import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export const maxDuration = 60;

// Initialize Gemini client
function getGeminiClient() {
  const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GOOGLE_AI_API_KEY or GEMINI_API_KEY is not configured');
  }
  
  return new GoogleGenAI({ apiKey });
}

interface KozijnSpecs {
  materiaal: string;
  kleur: string;
  kozijnType: string;
  glasType: string;
}

export async function POST(request: Request) {
  try {
    const { imageUrl, imageData, specs } = await request.json();
    
    console.log('🎨 Gemini Image Generation gestart voor kozijnen preview');
    console.log('📋 Specs:', specs);

    if (!imageUrl && !imageData) {
      return NextResponse.json(
        { error: 'Geen foto URL of data opgegeven' },
        { status: 400 }
      );
    }

    if (!specs) {
      return NextResponse.json(
        { error: 'Geen kozijn specificaties opgegeven' },
        { status: 400 }
      );
    }

    const kozijnSpecs: KozijnSpecs = specs;
    
    console.log('🔑 Gemini API Key aanwezig:', !!process.env.GOOGLE_AI_API_KEY);
    console.log('🔑 Alternative Key aanwezig:', !!process.env.GEMINI_API_KEY);
    
    const ai = getGeminiClient();
    console.log('📡 Gemini client geïnitialiseerd');
    console.log('📡 Gemini request verzenden met specs:', JSON.stringify(kozijnSpecs));

    // Build a detailed prompt for window frame transformation
    const prompt = buildKozijnPrompt(kozijnSpecs);

    // Prepare the content parts
    const contentParts: any[] = [
      { text: prompt }
    ];

    // Add the image
    if (imageData) {
      // If base64 image data is provided directly
      contentParts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: imageData,
        },
      });
    } else if (imageUrl) {
      // Fetch the image and convert to base64
      const imageResponse = await fetch(imageUrl);
      const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
      const imageBuffer = await imageResponse.arrayBuffer();
      const base64Image = Buffer.from(imageBuffer).toString('base64');
      
      console.log('📷 Image fetched, type:', contentType, 'size:', imageBuffer.byteLength);
      
      contentParts.push({
        inlineData: {
          mimeType: contentType,
          data: base64Image,
        },
      });
    }

    // Generate the image with Gemini
    console.log('🤖 Calling Gemini API with model: gemini-2.5-flash-image');
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: contentParts,
      config: {
        responseModalities: ['Image']
      }
    });

    console.log('📦 Gemini response received');
    console.log('📦 Response has candidates:', !!response.candidates);
    console.log('📦 Candidates length:', response.candidates?.length);

    // Extract the generated image
    let generatedImageData: string | null = null;
    
    if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          generatedImageData = part.inlineData.data;
          console.log('✅ Image data found, size:', generatedImageData.length, 'bytes');
          break;
        }
      }
    } else {
      console.log('❌ Response structure unexpected:', JSON.stringify(response, null, 2));
    }

    if (!generatedImageData) {
      throw new Error('Geen afbeelding gegenereerd door Gemini - check console logs');
    }

    console.log('✅ Kozijn preview succesvol gegenereerd!');

    return NextResponse.json({
      success: true,
      previewImage: `data:image/png;base64,${generatedImageData}`,
      specs: kozijnSpecs,
    });

  } catch (error: any) {
    console.error('❌ Gemini Generation error:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      code: error.code,
    });
    
    return NextResponse.json(
      { 
        error: 'Preview generatie mislukt',
        details: error.message || 'Onbekende fout',
        code: error.code || 'UNKNOWN'
      },
      { status: 500 }
    );
  }
}

function buildKozijnPrompt(specs: KozijnSpecs): string {
  const materiaalDescriptions: Record<string, string> = {
    'kunststof': 'kunststof (PVC) raamkozijnen met een glad, modern oppervlak',
    'hout': 'houten raamkozijnen met natuurlijke houtnerven en textuur',
    'aluminium': 'strakke aluminium raamkozijnen met een gepolijste, moderne uitstraling',
    'hout-aluminium': 'hoogwaardige hout-aluminium combinatie kozijnen met hout aan de binnenkant en aluminium aan de buitenkant'
  };

  const kleurDescriptions: Record<string, string> = {
    'wit': 'helder wit',
    'creme': 'zachte crème',
    'grijs': 'modern grijs (RAL 7016)',
    'antraciet': 'elegant antraciet grijs (RAL 7021)',
    'zwart': 'diep zwart',
    'donkergroen': 'klassiek donkergroen (RAL 6009)',
    'houtkleur': 'natuurlijke houtkleur met zichtbare nerven'
  };

  const glasDescriptions: Record<string, string> = {
    'dubbel': 'dubbel glas met heldere transparantie',
    'hr++': 'HR++ glas met subtiele reflectie voor energiebesparing',
    'triple': 'triple glas met optimale isolatie',
    'geluidswerend': 'geluidswerend glas met extra dikte'
  };

  const materiaalDesc = materiaalDescriptions[specs.materiaal] || specs.materiaal;
  const kleurDesc = kleurDescriptions[specs.kleur] || specs.kleur;
  const glasDesc = glasDescriptions[specs.glasType] || specs.glasType;

  return `Transformeer de ramen/kozijnen in de bijgevoegde foto naar nieuwe ${materiaalDesc} in de kleur ${kleurDesc}. 
Het glas moet ${glasDesc} zijn. Het type kozijn is ${specs.kozijnType}.

CRUCIALE INSTRUCTIES - VOLG DEZE EXACT:

1. KOZIJN & GLAS:
   - Vervang ALLEEN de kozijnen naar ${materiaalDesc} in ${kleurDesc}
   - Behoud EXACT dezelfde positie, grootte en vorm van de ramen
   - Het glas moet VOLLEDIG SCHOON, helder en professioneel zijn met subtiele reflecties

2. VERWIJDER ALLES WAT NIET HET KOZIJN/GLAS IS:
   - VERWIJDER alle gordijnen, vitrages, jaloezieën en raamdecoratie VOLLEDIG
   - VERWIJDER alle objecten achter/voor de ramen (plantjes, posters, decoraties)
   - VERWIJDER alles wat door het glas te zien is (binnen/buiten uitzicht)
   - VERVANG dit met een neutrale, licht-doorlatende weergave
   - Het glas mag alleen subtiele reflecties van de omgeving tonen
   - Geen zichtbare kamers, meubels, straten of landschappen door het glas

3. FOCUS OP HET KOZIJN:
   - De focus moet 100% op het nieuwe kozijn en het schone glas zijn
   - Het resultaat moet tonen hoe het KOZIJN ZELF eruit ziet, niet wat erachter is
   - Toon het kozijn als een professionele productfoto
   - Behoud de belichting en schaduwen op het kozijn zelf

4. BEHOUD VAN OMGEVING:
   - Behoud de architectuur van het gebouw volledig intact
   - Behoud alle details van muren, bakstenen, en omliggende elementen
   - Houd de natuurlijke belichting van de gevel/muur

Het eindresultaat moet een fotorealistische, professionele showcase zijn van het NIEUWE KOZIJN, waarbij de focus volledig ligt op het materiaal, de kleur en het ontwerp van het kozijn zelf - niet op wat erachter zit.`;
}

