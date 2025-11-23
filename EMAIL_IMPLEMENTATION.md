# Email Functionaliteit - Implementatie Overzicht

✅ **Email functionaliteit succesvol geïmplementeerd!**

## 📧 Wat is er gebouwd?

### 1. Email naar Klant
Wanneer een klant het formulier invult, ontvangt hij/zij een professionele email met:
- ✅ Klantgegevens (naam, email, telefoon)
- ✅ Woningtype en aantal kozijnen
- ✅ Glasoppervlakte en glastype
- ✅ Kozijn specificaties (materiaal, kleur, type)
- ✅ Prijsindicatie (min-max range)
- ✅ Inclusief montage en afvoer info
- ✅ AI preview melding (als foto's zijn geüpload)
- ✅ Call-to-action voor Calendly afspraak
- ✅ Mooie HTML template met oranje branding

### 2. Email naar Bedrijf (jullie)
Bij elke aanvraag krijg je een notificatie email met:
- ✅ Alert header met klant naam en prijsrange
- ✅ Volledige klantgegevens (klikbare email/telefoon links)
- ✅ Alle aanvraag details
- ✅ Foto's (als geüpload) in een grid
- ✅ Status: wacht op Calendly boeking
- ✅ Alle informatie om direct actie te ondernemen

## 📂 Bestanden Toegevoegd/Gewijzigd

### Nieuwe bestanden:
1. **`/app/api/send-quote/route.ts`** - Email API endpoint
2. **`ENV_SETUP.md`** - Setup instructies voor environment variables
3. **`EMAIL_IMPLEMENTATION.md`** - Dit bestand

### Gewijzigde bestanden:
1. **`package.json`** - Resend package toegevoegd
2. **`components/ai-quote-form.tsx`** - Email verzending geïntegreerd

## 🚀 Setup Instructies

### Stap 1: Installeer Dependencies
```bash
cd /Users/tom/Downloads/Budgetkozijnenshop
pnpm install
```

### Stap 2: Resend Account Setup
1. Ga naar [resend.com](https://resend.com) en maak een account
2. **Gratis tier**: 100 emails/dag, 3.000/maand
3. Ga naar **API Keys** en maak een nieuwe key
4. Kopieer de API key (begint met `re_`)

### Stap 3: Environment Variables
Maak een `.env.local` bestand in de root met:

```bash
# Bestaande keys
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token

# Nieuwe key voor emails
RESEND_API_KEY=re_your_resend_api_key_here
```

### Stap 4: (Optioneel) Domein Verificatie
Voor productie emails vanaf je eigen domein:
1. Ga naar Resend → **Domains**
2. Voeg `budgetkozijnenshop.nl` toe
3. Voeg DNS records toe (SPF, DKIM, DMARC)
4. Wacht op verificatie

**Voor testing**: Gebruik `onboarding@resend.dev` (werkt alleen voor je eigen email)

### Stap 5: Email Adressen Aanpassen (optioneel)
In `/app/api/send-quote/route.ts`:
- Regel 399: `from: 'Budget Kozijnenshop <offerte@budgetkozijnenshop.nl>'`
- Regel 401: `replyTo: 'info@budgetkozijnenshop.nl'`
- Regel 414: `to: ['info@budgetkozijnenshop.nl']`

Pas deze aan naar jouw gewenste adressen.

## 🧪 Testen

### 1. Start Dev Server
```bash
pnpm dev
```

### 2. Test Flow
1. Ga naar `http://localhost:3000`
2. Vul het formulier in:
   - Kies woningtype
   - Vul aantal kozijnen en glasoppervlakte in
   - (Optioneel) Upload foto's voor AI preview
   - Vul contactgegevens in
3. Klik **Verstuur Offerte Aanvraag**
4. Check:
   - ✅ Email in inbox klant
   - ✅ Email in inbox bedrijf
   - ✅ Resend dashboard voor logs

### 3. Check Resend Logs
- Ga naar [resend.com/emails](https://resend.com/emails)
- Zie alle verzonden emails
- Click op een email voor details
- Check delivery status

## 📊 Email Templates Preview

### Klant Email
```
Budget Kozijnenshop
-------------------
Bedankt voor uw offerte aanvraag

Uw Gegevens:
- Naam: [Naam]
- Email: [Email]
- Telefoon: [Telefoon]

Uw Opgave:
- Type woning: [Type]
- Aantal kozijnen: [X]
- Glasoppervlakte: [X m²]
- Glastype: HR++ / HR+++

Prijs Indicatie:
€ X.XXX - € X.XXX
✅ Inclusief montage
✅ Inclusief afvoer oude kozijnen

[Plan Adviesgesprek Button] → Calendly
```

### Bedrijf Email
```
🔔 NIEUWE KOZIJNEN AANVRAAG
[Naam] • € X.XXX - € X.XXX

⏳ Wacht op Calendly boeking

Klantgegevens:
- [Klikbare email en telefoon]

Aanvraag Details:
- Alle specs

Foto's:
- [Grid met geüploade foto's]

Prijsindicatie: € X.XXX - € X.XXX
```

## 🎨 Features

### Email Features:
- ✅ HTML emails met inline CSS (spam-proof)
- ✅ Plain text fallback
- ✅ Responsive design (mobiel vriendelijk)
- ✅ Oranje branding (#f97316)
- ✅ Klikbare telefoon en email links
- ✅ Calendly integratie
- ✅ Foto's embedded in email

### Form Features:
- ✅ Loading state tijdens verzenden
- ✅ Success state na verzending
- ✅ Error handling met duidelijke messages
- ✅ Validatie (naam en email verplicht)
- ✅ Disable button na verzending

## 🐛 Troubleshooting

### Emails komen niet aan
**Oplossing**:
1. Check `.env.local` → `RESEND_API_KEY` correct?
2. Check Resend dashboard → Emails logs
3. Check spam folder
4. Voor productie: Domein verificatie vereist

### "Domain not verified" error
**Oplossing**:
- Tijdelijk: Wijzig in `/app/api/send-quote/route.ts`:
  ```ts
  from: 'onboarding@resend.dev'
  ```
- Permanent: Verifieer je domein in Resend

### API Rate Limit
**Oplossing**:
- Free tier: 100/dag, 3.000/maand
- Upgrade naar Pro: $20/maand voor 50.000 emails

## 📈 Productie Checklist

Voordat je live gaat:

- [ ] Resend domein geverifieerd (`budgetkozijnenshop.nl`)
- [ ] DNS records toegevoegd (SPF, DKIM, DMARC)
- [ ] Email adressen geconfigureerd in API route
- [ ] RESEND_API_KEY toegevoegd aan Vercel environment variables
- [ ] Test email verzonden en ontvangen
- [ ] Check spam score (via Resend logs)
- [ ] Calendly link geconfigureerd

## 💰 Kosten

**Resend Pricing:**
- **Free**: 100 emails/dag, 3.000/maand
- **Pro**: $20/maand → 50.000 emails
- **Scale**: $60/maand → 200.000 emails

Voor jouw use case is Free tier waarschijnlijk voldoende (tenzij je >100 leads/dag krijgt).

## ❓ Vragen?

Check de documentatie:
- Resend Docs: https://resend.com/docs
- Resend React Examples: https://resend.com/docs/send-with-nextjs

---

✅ **Implementatie compleet!**

Na `pnpm install` en het toevoegen van `RESEND_API_KEY` is alles klaar voor gebruik.

