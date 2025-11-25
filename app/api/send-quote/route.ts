import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      formData,
      analysisResults,
      priceRange,
    } = body

    console.log('📧 Email verzenden gestart...')

    // Validatie
    if (!formData.naam || !formData.email) {
      return NextResponse.json(
        { error: 'Naam en email zijn verplicht' },
        { status: 400 }
      )
    }

    // Build photo URLs
    const photoUrls = analysisResults?.map((r: any) => r.url) || []
    const previewUrls = analysisResults?.map((r: any) => r.previewUrl || r.url) || []

    // Format glasType
    const glasTypeLabel = formData.glasType === 'hr++' ? 'HR++ glas' : 'HR+++ glas (triple)'

    // Format woningtype
    const woningtypeLabels: Record<string, string> = {
      appartement: 'Appartement',
      tussenwoning: 'Tussenwoning',
      hoekwoning: 'Hoekwoning',
      twee_onder_een_kap: 'Twee-onder-een-kap',
      vrijstaand: 'Vrijstaande woning'
    }
    const woningtypeLabel = woningtypeLabels[formData.woningtype] || formData.woningtype

    // Calculate extras
    const montageIncluded = formData.montage !== false
    const afvoerIncluded = formData.afvoerOudeKozijnen !== false

    // Create plain text version
    const textEmail = `
BUDGET KOZIJNENSHOP - UW PERSOONLIJKE OFFERTE

Bedankt voor uw aanvraag! Hieronder vindt u uw offerte op basis van uw opgave.

KLANTGEGEVENS
-------------
Naam: ${formData.naam}
Email: ${formData.email}
${formData.telefoon ? `Telefoon: ${formData.telefoon}` : ''}

WONINGGEGEVENS
--------------
Type woning: ${woningtypeLabel}
Aantal kozijnen: ${formData.aantalRamen}
Glasoppervlakte: ${formData.glasoppervlakte} m²
Glastype: ${glasTypeLabel}

${formData.materiaal ? `Materiaal: ${formData.materiaal}` : ''}
${formData.kleur ? `Kleur: ${formData.kleur}` : ''}
${formData.kozijnType ? `Type kozijn: ${formData.kozijnType}` : ''}

PRIJSOVERZICHT
--------------
${priceRange ? `Prijsindicatie: EUR ${priceRange.min.toLocaleString('nl-NL')} - EUR ${priceRange.max.toLocaleString('nl-NL')}` : 'Prijsindicatie: Op aanvraag'}
${montageIncluded ? 'Inclusief: Montage' : ''}
${afvoerIncluded ? 'Inclusief: Afvoer oude kozijnen' : ''}

VOLGENDE STAPPEN
----------------
Plan uw gratis adviesgesprek: https://calendly.com/budgetgroep/30min

Vragen? Bel ons of reply op deze email.

---
Budget Kozijnenshop
Goedkope kunststof kozijnen Zuid-Holland
    `.trim()

    // ========================================
    // KLANT EMAIL (SIMPLE - SPAM PROOF)
    // ========================================
    const simpleCustomerEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Uw Offerte - Budget Kozijnenshop</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
    
    <!-- Header -->
    <div style="border-bottom: 3px solid #f97316; padding-bottom: 20px; margin-bottom: 25px;">
      <h1 style="color: #f97316; font-size: 26px; margin: 0 0 8px 0;">Budget Kozijnenshop</h1>
      <p style="color: #6b7280; font-size: 15px; margin: 0;">Bedankt voor uw offerte aanvraag</p>
    </div>
    
    <!-- Uw Gegevens -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Uw Gegevens</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 40%;">Naam</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Email</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.email}</td>
        </tr>
        ${formData.telefoon ? `
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Telefoon</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.telefoon}</td>
        </tr>
        ` : ''}
      </table>
    </div>
    
    <!-- Woning Details -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Uw Opgave</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 40%;">Type woning</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${woningtypeLabel}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Aantal kozijnen</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.aantalRamen}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Glasoppervlakte</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.glasoppervlakte} m²</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Glastype</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${glasTypeLabel}</td>
        </tr>
      </table>
    </div>
    
    ${formData.materiaal ? `
    <!-- Kozijn Specificaties -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Specificaties</h2>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px;">
        <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0;">
          <strong>Materiaal:</strong> ${formData.materiaal}<br>
          ${formData.kleur ? `<strong>Kleur:</strong> ${formData.kleur}<br>` : ''}
          ${formData.kozijnType ? `<strong>Type:</strong> ${formData.kozijnType}` : ''}
        </p>
      </div>
    </div>
    ` : ''}
    
    <!-- Prijs Indicatie -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Prijs Indicatie</h2>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border: 1px solid #fde68a;">
        ${priceRange ? `
        <p style="margin: 0 0 8px 0; color: #92400e; font-size: 14px;">Uw kozijnen kosten ongeveer:</p>
        <p style="color: #78350f; font-size: 24px; font-weight: bold; margin: 0;">
          €${priceRange.min.toLocaleString('nl-NL')} - €${priceRange.max.toLocaleString('nl-NL')}
        </p>
        <p style="margin: 8px 0 0 0; color: #92400e; font-size: 13px;">
          ${montageIncluded ? '✅ Inclusief montage<br>' : ''}
          ${afvoerIncluded ? '✅ Inclusief afvoer oude kozijnen' : ''}
        </p>
        ` : `
        <p style="margin: 0; color: #92400e; font-size: 16px; font-weight: 600;">Prijsindicatie op aanvraag</p>
        <p style="margin: 8px 0 0 0; color: #92400e; font-size: 13px;">We nemen contact op voor een definitieve offerte</p>
        `}
      </div>
    </div>

    ${analysisResults && analysisResults.length > 0 ? `
    <!-- Voor & Na Preview -->
    <div style="background-color: #f0fdf4; padding: 16px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 25px;">
      <p style="color: #166534; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
        ✨ AI Preview Gegenereerd
      </p>
      <p style="color: #166534; font-size: 13px; line-height: 1.6; margin: 0;">
        We hebben een AI preview gemaakt van hoe uw nieuwe kozijnen eruit zullen zien. 
        Bekijk de voor en na foto's in uw dashboard of vraag om deze per email.
      </p>
    </div>
    ` : ''}
    
    <!-- Call to Action -->
    <div style="background-color: #fef3c7; padding: 24px; border-radius: 8px; text-align: center; margin-bottom: 20px; border: 2px solid #fde68a;">
      <p style="color: #92400e; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">Volgende stap: Plan uw gratis adviesgesprek</p>
      <div style="margin-bottom: 16px;">
        <a href="https://calendly.com/budgetgroep/30min" style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
          Plan Adviesgesprek
        </a>
      </div>
      <p style="color: #78350f; font-size: 13px; margin: 0;">
        Kies een tijdstip dat u uitkomt voor een persoonlijk gesprek
      </p>
    </div>
    
    <!-- Contact info -->
    <div style="text-align: center; margin-bottom: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Liever contact via email of telefoon? Reply op deze email of bel 085 060 8180
      </p>
    </div>
    
    <!-- Footer -->
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
      <p style="color: #6b7280; font-size: 13px; margin: 0 0 4px 0; font-weight: 600;">Budget Kozijnenshop</p>
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">Goedkope kunststof kozijnen Zuid-Holland</p>
    </div>
    
  </div>
</body>
</html>
    `.trim()

    // ========================================
    // BUSINESS EMAIL (INTERNAL NOTIFICATION)
    // ========================================
    const businessEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nieuwe Aanvraag - Budget Kozijnenshop</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb;">
  <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
    
    <!-- Alert Header -->
    <div style="background-color: #f97316; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 8px 0;">🔔 NIEUWE KOZIJNEN AANVRAAG</h1>
      <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${formData.naam}${priceRange ? ` • €${priceRange.min.toLocaleString('nl-NL')} - €${priceRange.max.toLocaleString('nl-NL')}` : ''}</p>
    </div>
    
    <div style="padding: 30px;">
      
      <!-- Status -->
      <div style="background-color: #fef3c7; padding: 16px; border-radius: 6px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
        <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
          ⏳ Wacht op Calendly boeking van ${formData.naam}
        </p>
      </div>
      
      <!-- Klantgegevens -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Klantgegevens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Naam</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #f97316; text-decoration: none; font-weight: 600;">${formData.email}</a></td>
        </tr>
        ${formData.telefoon ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefoon</td>
          <td style="padding: 8px 0;"><a href="tel:${formData.telefoon}" style="color: #f97316; text-decoration: none; font-weight: 600;">${formData.telefoon}</a></td>
        </tr>
        ` : ''}
      </table>
      
      <!-- Aanvraag Details -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Aanvraag Details</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Type woning</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${woningtypeLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Aantal kozijnen</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.aantalRamen}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Glasoppervlakte</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.glasoppervlakte} m²</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Glastype</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${glasTypeLabel}</td>
        </tr>
        ${formData.materiaal ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Materiaal</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.materiaal}</td>
        </tr>
        ` : ''}
        ${formData.kleur ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Kleur</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.kleur}</td>
        </tr>
        ` : ''}
        ${formData.kozijnType ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Type kozijn</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.kozijnType}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Montage</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${montageIncluded ? '✅ Ja' : '❌ Nee'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Afvoer oude kozijnen</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${afvoerIncluded ? '✅ Ja' : '❌ Nee'}</td>
        </tr>
      </table>
      
      <!-- Foto's -->
      ${analysisResults && analysisResults.length > 0 ? `
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Foto's (${analysisResults.length})</h2>
      <div style="margin-bottom: 25px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            ${analysisResults.map((result: any, index: number) => `
              ${index % 2 === 0 && index > 0 ? '</tr><tr>' : ''}
              <td style="padding: 4px; width: 50%; vertical-align: top;">
                <a href="${result.url}" target="_blank" style="display: block; text-decoration: none;">
                  <img 
                    src="${result.url}" 
                    alt="Foto ${index + 1}"
                    style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; border: 2px solid #e5e7eb; display: block;"
                  />
                  <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px; text-align: center;">Foto ${index + 1}</p>
                </a>
              </td>
            `).join('')}
          </tr>
        </table>
      </div>
      ` : ''}
      
      <!-- Prijs -->
      ${priceRange ? `
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Prijsindicatie (naar klant gestuurd)</h2>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border: 1px solid #fde68a;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #78350f; font-size: 18px; font-weight: bold;">Prijsrange</td>
            <td style="padding: 6px 0; color: #78350f; font-size: 18px; text-align: right; font-weight: bold;">EUR ${priceRange.min.toLocaleString('nl-NL')} - EUR ${priceRange.max.toLocaleString('nl-NL')}</td>
          </tr>
        </table>
      </div>
      ` : ''}
      
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 13px; margin: 0;">
        Budget Kozijnenshop - Interne notificatie
      </p>
    </div>
    
  </div>
</body>
</html>
    `.trim()

    // ========================================
    // SEND TO CUSTOMER
    // ========================================
    console.log('📧 Verzenden naar klant:', formData.email)
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Budget Kozijnenshop <offerte@budgetkozijnenshop.nl>',
      to: [formData.email],
      replyTo: 'info@budgetkozijnenshop.nl',
      subject: `Uw kozijnen offerte - Budget Kozijnenshop`,
      html: simpleCustomerEmail,
      text: textEmail,
    })

    if (customerError) {
      console.error('❌ Klant email error:', customerError)
    } else {
      console.log('✅ Klant email verzonden!', customerData)
    }

    // ========================================
    // SEND TO BUSINESS
    // ========================================
    console.log('📧 Verzenden naar bedrijf')
    const { data: businessData, error: businessError } = await resend.emails.send({
      from: 'Budget Kozijnenshop <offerte@budgetkozijnenshop.nl>',
      to: ['budgetgroep.nl@gmail.com'],
      replyTo: formData.email,
      subject: `Nieuwe Aanvraag - ${formData.naam} - ${formData.aantalRamen} kozijnen${priceRange ? ` - €${priceRange.min.toLocaleString('nl-NL')}-€${priceRange.max.toLocaleString('nl-NL')}` : ''}`,
      html: businessEmail,
      text: textEmail,
    })

    if (businessError) {
      console.error('❌ Bedrijf email error:', businessError)
    } else {
      console.log('✅ Bedrijf email verzonden!', businessData)
    }

    // Fail if customer email didn't send
    if (customerError) {
      return NextResponse.json(
        { error: 'Klant email kon niet worden verzonden', details: customerError },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      customerMessageId: customerData?.id,
      businessMessageId: businessData?.id,
    })

  } catch (error: any) {
    console.error('❌ Send quote error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden', details: error.message },
      { status: 500 }
    )
  }
}

