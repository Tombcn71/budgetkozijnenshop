# Environment Variables Setup

## Vereiste Environment Variables

Maak een `.env.local` bestand in de root van het project met de volgende variabelen:

```bash
# Gemini AI voor kozijnen preview generatie
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Vercel Blob voor foto uploads
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here

# Resend voor email verzending
RESEND_API_KEY=re_your_resend_api_key_here
```

## Setup Instructies

### 1. Gemini API Key (voor AI preview)
1. Ga naar [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Maak een nieuwe API key
3. Kopieer de key naar `GOOGLE_GEMINI_API_KEY`

### 2. Vercel Blob Token (voor foto upload)
1. Ga naar je Vercel project dashboard
2. Ga naar **Storage** → **Blob**
3. Maak een nieuwe store aan (of gebruik bestaande)
4. Kopieer de `BLOB_READ_WRITE_TOKEN`

### 3. Resend API Key (voor emails) 🆕
1. Ga naar [Resend](https://resend.com)
2. Maak een account (gratis: 100 emails/dag, 3.000/maand)
3. Ga naar **API Keys**
4. Maak een nieuwe API key met write permissions
5. Kopieer de key naar `RESEND_API_KEY` (begint met `re_`)

### 4. Domein Setup voor Emails (belangrijk!)

Om emails te kunnen verzenden vanaf je eigen domein:

1. Log in bij Resend
2. Ga naar **Domains** → **Add Domain**
3. Voeg je domein toe: `budgetkozijnenshop.nl`
4. Voeg de DNS records toe die Resend je geeft (SPF, DKIM, DMARC)
5. Wacht op verificatie (kan 24-48 uur duren)

**Totdat je domein geverifieerd is**, gebruik je Resend's onboarding domein:
- Emails worden verstuurd vanaf `onboarding@resend.dev`
- Dit werkt alleen voor je eigen email adres (voor testing)

### 5. Email Adressen Aanpassen

In `/app/api/send-quote/route.ts` zijn de email adressen:
- **FROM**: `offerte@budgetkozijnenshop.nl`
- **REPLY-TO**: `info@budgetkozijnenshop.nl`
- **TO** (bedrijf): `info@budgetkozijnenshop.nl`

Pas deze aan naar jouw adressen als je andere wilt gebruiken.

## Testing

1. Start de dev server: `pnpm dev`
2. Ga naar de homepage en vul het formulier in
3. Check je email (klant) en bedrijf email
4. Check Resend dashboard voor email logs

## Troubleshooting

### Emails komen niet aan
- Check of `RESEND_API_KEY` correct is
- Check of je domein geverifieerd is in Resend
- Check Resend logs: [resend.com/emails](https://resend.com/emails)
- Check spam folder

### "Domain not verified" error
- Je domein is nog niet geverifieerd in Resend
- Tijdelijk: gebruik `onboarding@resend.dev` als FROM adres
- Of test met je eigen email

### API Rate Limits
- Free tier: 100 emails/dag, 3.000/maand
- Voor meer: upgrade naar Pro ($20/maand voor 50.000 emails)

