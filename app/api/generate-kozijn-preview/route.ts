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
    const promptText = buildKozijnPrompt(kozijnSpecs);

    // Prepare the prompt array as per Nano Banana docs
    const prompt: any[] = [
      { text: promptText }
    ];

    // Add the image
    if (imageData) {
      // If base64 image data is provided directly
      prompt.push({
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
      
      prompt.push({
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
      contents: prompt,
      config: {
        responseModalities: ['Image']
      }
    });

    console.log('📦 Gemini response received');
    console.log('📦 Full response:', JSON.stringify(response, null, 2));
    console.log('📦 Response has candidates:', !!response.candidates);
    console.log('📦 Candidates length:', response.candidates?.length);

    // Extract the generated image
    let generatedImageData: string | null = null;
    
    if (response.candidates && response.candidates[0]) {
      console.log('📦 Candidate 0 structure:', JSON.stringify(response.candidates[0], null, 2));
      
      if (response.candidates[0].content && response.candidates[0].content.parts) {
        console.log('📦 Parts count:', response.candidates[0].content.parts.length);
        
        for (let i = 0; i < response.candidates[0].content.parts.length; i++) {
          const part = response.candidates[0].content.parts[i];
          console.log(`📦 Part ${i}:`, {
            hasText: !!part.text,
            hasInlineData: !!part.inlineData,
            keys: Object.keys(part)
          });
          
          if (part.text) {
            console.log(`📝 Text in part ${i}:`, part.text);
          }
          
          if (part.inlineData) {
            generatedImageData = part.inlineData.data;
            console.log('✅ Image data found in part', i, ', size:', generatedImageData.length, 'bytes');
            break;
          }
        }
      } else {
        console.log('❌ No content.parts in candidate[0]');
      }
    } else {
      console.log('❌ No candidates in response');
    }

    if (!generatedImageData) {
      console.error('❌ GEEN AFBEELDING DATA GEVONDEN');
      console.error('Dit kan betekenen:');
      console.error('1. De GOOGLE_AI_API_KEY is niet correct ingesteld in Vercel');
      console.error('2. Het model gemini-2.5-flash-image is niet beschikbaar');
      console.error('3. De API key heeft geen toegang tot image generation');
      throw new Error('Geen afbeelding gegenereerd door Gemini - check de Vercel logs voor meer details');
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

  return `Gebruik de bijgevoegde foto van ramen/kozijnen en transformeer deze naar nieuwe, moderne ${materiaalDesc} in de kleur ${kleurDesc}. 
Het glas moet ${glasDesc} zijn. Het type kozijn is ${specs.kozijnType}.

Belangrijke instructies:
- Behoud de EXACTE positie, grootte en vorm van de ramen zoals in de originele foto
- Behoud de architectuur van het gebouw volledig intact
- Vervang alleen de kozijnen en het glas, niets anders
- VERWIJDER alle gordijnen, vitrages, jaloezieën en andere raamdecoratie - laat het glas helemaal leeg en transparant
- VERWIJDER alle objecten achter de ramen (plantjes, decoratie, etc) - toon alleen het doorzicht door het glas
- De nieuwe kozijnen moeten realistisch en professioneel geplaatst lijken
- Het glas moet helder en schoon zijn met subtiele reflecties
- Zorg dat de belichting en schaduwen natuurlijk blijven en passen bij de omgeving
- Behoud alle details van de muren, bakstenen, en omliggende elementen
- Het eindresultaat moet fotorealistisch zijn en lijken alsof het echt is
- Focus volledig op de kozijnen en het glas, niet op wat erachter zit

Maak een hoogwaardige, professionele weergave van hoe deze woning eruit zou zien met de nieuwe kozijnen.`;
}

