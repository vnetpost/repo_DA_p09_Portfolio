# Portfolio

## English

Angular-based portfolio website with multilingual content, project gallery, and a
contact form. The actual app lives in the `PORTFOLIO` folder.

### Features

- Single-page layout with sections like Hero, About, Skills, Portfolio, References, Contact
- Localization via `@ngx-translate` (DE/EN)
- Data-driven content (profile, skills, projects, references)
- Contact form with validation and optional PHP mail endpoint
- SCSS styling and responsive layout

### Tech Stack

- Angular 20, TypeScript, SCSS
- @ngx-translate
- RxJS

### Local Setup

```bash
cd PORTFOLIO
npm install
npm start
```

App runs at `http://localhost:4200/`.

### Build

```bash
cd PORTFOLIO
npm run build
```

Output goes to `PORTFOLIO/dist/`.

### Customize Content

- Profile, skills, projects: `PORTFOLIO/src/app/shared/services/userDatabankService/user-databank-service.ts`
- Texts/languages: `PORTFOLIO/public/assets/data/i18n/*.json`
- Assets (images, icons, fonts): `PORTFOLIO/public/assets`

### Contact Form

1) Set the `endPoint` in `PORTFOLIO/src/app/main-page/contact-me/contact-me.ts` and
   enable `mailTest = false`.
2) Configure your recipient address in `PORTFOLIO/public/assets/data/sendMail.php`.

Note: The mail endpoint requires PHP-capable hosting (not the Angular dev server).

### Scripts

- `npm start` - dev server
- `npm run build` - production build
- `npm run watch` - build in watch mode
- `npm run test` - unit tests

### Build Note (Budgets)

If the production build fails due to SCSS budgets, adjust the budgets in
`PORTFOLIO/angular.json` or build with
`ng build --configuration development`.

## Deutsch

Angular-basierte Portfolio-Website mit mehrsprachigen Inhalten, Projektgalerie und
Kontaktformular. Die eigentliche App liegt im Ordner `PORTFOLIO`.

### Features

- Single-Page-Layout mit Sections wie Hero, About, Skills, Portfolio, References, Contact
- Mehrsprachigkeit via `@ngx-translate` (DE/EN)
- Datengetriebene Inhalte (Profil, Skills, Projekte, Referenzen)
- Kontaktformular mit Validierung und optionalem PHP-Mail-Endpoint
- SCSS-Styling und responsives Layout

### Tech-Stack

- Angular 20, TypeScript, SCSS
- @ngx-translate
- RxJS

### Lokales Setup

```bash
cd PORTFOLIO
npm install
npm start
```

App laeuft dann auf `http://localhost:4200/`.

### Build

```bash
cd PORTFOLIO
npm run build
```

Ausgabe in `PORTFOLIO/dist/`.

### Inhalte anpassen

- Profil, Skills, Projekte: `PORTFOLIO/src/app/shared/services/userDatabankService/user-databank-service.ts`
- Texte/Sprachen: `PORTFOLIO/public/assets/data/i18n/*.json`
- Assets (Bilder, Icons, Fonts): `PORTFOLIO/public/assets`

### Kontaktformular

1) In `PORTFOLIO/src/app/main-page/contact-me/contact-me.ts` den `endPoint` setzen und
   `mailTest = false` aktivieren.
2) `PORTFOLIO/public/assets/data/sendMail.php` mit eigener Empfaenger-Adresse
   konfigurieren.

Hinweis: Der Mail-Endpoint braucht ein PHP-faehiges Hosting (nicht den Angular Dev-Server).

### Skripte

- `npm start` - Dev-Server
- `npm run build` - Production Build
- `npm run watch` - Build im Watch-Modus
- `npm run test` - Unit-Tests

### Build-Hinweis (Budgets)

Falls der Production Build wegen SCSS-Budgets fehlschlaegt, passe die Budgets in
`PORTFOLIO/angular.json` an oder baue mit
`ng build --configuration development`.
