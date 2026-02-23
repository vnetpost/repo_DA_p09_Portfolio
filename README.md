# Portfolio Website

Persoenliche Portfolio-Website von Babak Anvari Bavandpouri, umgesetzt mit Angular (Standalone Components), TypeScript und SCSS.

## Projektueberblick
Das Projekt praesentiert Profil, Skills, Projekte, Referenzen und Kontaktmoeglichkeit in einer modernen Single-Page-Experience mit eigenen Unterseiten fuer Impressum und Datenschutz.

## Features
- Mehrsprachigkeit (EN/DE) mit `@ngx-translate`
- Section-basierte Startseite: Hero, About, Skills, Portfolio, References, Contact
- Eigene Routen fuer `legal-notice` und `privacy-policy`
- Kontaktformular mit Validierung, Toast-Feedback und Datenschutz-Checkbox
- Serverseitiger Mailversand ueber `public/sendMail.php`
- Responsive Navigation mit Mobile-Menue
- Zentrale Datenpflege ueber `UserDatabankService`

## Tech Stack
- Angular 20 (Standalone API)
- TypeScript
- SCSS
- Angular Router
- Angular Forms + HttpClient
- `@ngx-translate/core` + `@ngx-translate/http-loader`
- PHP (Mail-Endpoint fuer Kontaktformular)

## Lokale Entwicklung
Voraussetzung: Node.js und npm installiert.

1. Projektordner oeffnen:
```bash
cd PORTFOLIO
```
2. Abhaengigkeiten installieren:
```bash
npm install
```
3. Dev-Server starten:
```bash
npm start
```
4. Im Browser aufrufen:
`http://localhost:4200`

## Build
Produktionsbuild erzeugen:

```bash
npm run build
```

Der Output liegt anschliessend in `dist/`.

## Tests
Unit-Tests starten:

```bash
npm test
```

## Wichtige Pfade
- `src/app/app.routes.ts`: Routing (Main, Legal Notice, Privacy Policy)
- `src/app/shared/services/userDatabankService/user-databank-service.ts`: persoenliche Daten, Skills, Projekte
- `src/app/main-page/contact-me/contact-me.ts`: Kontaktformular-Logik
- `public/sendMail.php`: Mailversand-Endpoint
- `public/assets/data/i18n/en.json`: englische Texte
- `public/assets/data/i18n/de.json`: deutsche Texte

## Hinweis zum Kontaktformular
Im lokalen Angular-Dev-Server kann PHP nicht direkt ausgefuehrt werden.  
Fuer echten Mailversand muss `sendMail.php` auf einem Server mit PHP-Unterstuetzung bereitgestellt sein.
