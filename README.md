# Image Carousel App

Dit project is een eenvoudige afbeeldingencarrousel gebouwd met Next.js en React. Het maakt gebruik van Tailwind CSS voor styling en biedt een responsieve gebruikersinterface.

## Bestandsstructuur

- **app/components/caroussel/page.jsx**: Bevat de `ImageCarousel` component die de carrousel functionaliteit implementeert.
- **app/globals.css**: Bevat globale CSS-stijlen, inclusief kleurenschema's voor lichte en donkere modi.
- **app/layout.js**: Definieert de hoofdlayout van de applicatie, inclusief lettertypeconfiguraties.
- **app/page.js**: De hoofdpagina van de applicatie die de `ImageCarousel` component weergeeft.

## Functies

- **Navigatieknoppen**: Gebruikers kunnen door de afbeeldingen bladeren met behulp van de vorige en volgende knoppen.
- **Indicatoren**: Er zijn indicatoren onder de carrousel die de huidige positie in de reeks afbeeldingen aangeven.
- **Responsief ontwerp**: De carrousel past zich aan verschillende schermformaten aan.

## Installatie

1. **Kloon de repository**:
   ```bash
   git clone https://github.com/Yusuf013/OurTeamCaroussel_POC
   ```

2. **Navigeer naar de projectmap**:
   ```bash
   cd <project-directory>
   ```

3. **Installeer de afhankelijkheden**:
   ```bash
   npm install
   ```

4. **Start de ontwikkelserver**:
   ```bash
   npm run dev
   ```

5. **Open de applicatie in je browser**:
   Ga naar `http://localhost:3000` om de applicatie te bekijken.

## Aanpassingen

- **Afbeeldingen**: De afbeeldingen voor de carrousel zijn gedefinieerd in `app/components/caroussel/page.jsx`. Je kunt deze eenvoudig aanpassen door de paden in de `images` array te wijzigen.
- **Stijlen**: Globale stijlen kunnen worden aangepast in `app/globals.css`.

