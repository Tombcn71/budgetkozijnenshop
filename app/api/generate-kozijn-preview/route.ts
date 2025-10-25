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

  return `Edit this photo: replace ONLY the window frame with new ${materiaalDesc} in ${kleurDesc} color.

STEP 1 - REMOVE THESE COMPLETELY:
- Remove ALL curtains, drapes, blinds, shades (delete them entirely)
- Remove the outdoor view through the glass (trees, buildings, street, sky, cars)
- Replace outdoor view with neutral/blurred background
- Keep indoor view visible (if photo is from inside)

STEP 2 - CHANGE ONLY THE WINDOW FRAME:
- Replace window frame with ${materiaalDesc} in ${kleurDesc}
- Frame type: ${specs.kozijnType}
- Glass: ${glasDesc}, clear/transparent

STEP 3 - KEEP EVERYTHING ELSE IDENTICAL:
- Wall stays EXACTLY the same (do NOT create new textures)
- Brick stays EXACTLY as it is
- Wall color/paint EXACTLY the same
- Damage, cracks, stains stay as they are
- Window position and shape EXACTLY the same
- Lighting on wall EXACTLY the same

RESULT: Same photo with new ${kleurDesc} ${materiaalDesc} window frame, no curtains, outdoor view removed. Everything else unchanged.`;
}

