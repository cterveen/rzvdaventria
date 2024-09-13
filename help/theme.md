## Titel

Daventria Drupal 10.x Theme help - Theme

## Beschrijving

Een overzicht van de instellingen van het thema.

Thema's kunnen worden ingesteld, gedeïnstalleerd of als beheerthema worden ingesteld onder Beheer > Uiterlijk (admin/appearance).

## Basis

Het thema is gemaakt met behulp van starterkit en daarna aangepast. Drupal kent meerdere methoden om nieuwe thema's aan te maken waarbij Starterkit voor rzvdaventria de meest toegankelijke is. Uitgaan van het basisthema (Olivero) heeft welliswaar voordelen omdat veel functionaliteit hierin beschikbaar is, maar de nadelen van het gebruik van dit thema wegen hier niet tegen op. Kopiëren en plakken leidt tot het moeten maken van een groot aantal aanpassingen, en bij het maken van een subthema moet elke keer dat Olivero wordt aangepast gecontroleerd worden of het thema nog steeds goed werkt. Beginnen met een starterkit thema betekend welliswaar meer werk om alles goed in te stellen, maar is daarna stabieler.

## CSS structuur

Drupal gebruikt een SMACCS structuur voor de CSS files. In de standaard thema's worden de verschillende stijlelementen over veel verschillende bestanden verdeeld, welke vervolgens bij het laden van de pagina worden samengevoegd. In rzvdaventria.libraries.yml kan het gewicht (weight) van het bestand worden aangegeven. Voor het gewicht kunnen getallen van -50 tot 50 worden gebruikt, een bestand met een lager gewicht wordt eerder geladen.

- css/base/*.css bevat de stijlelementen voor basis HTML elementen en fonts
  - gewicht: -20
- css/layout/*.css bevat de stijlelementen voor de regios en gedeelde stijlelementen voor blokken binnen regio's.
  - gewicht: -19
- css/components/*.css bevat de stijlelementen van alle overige elementen, inclusief de plaatsing van elementen in blokken
  - gewicht blok niveau: -15
  - gewicht menu niveau: -13
  - gewicht content: -12
  - gewicht onderdelen: -10

## Regio's

De volgende regio's zijn beschikbaar:

- Kop (header): logo, naam, menu, zoekbalk
- Weer (weather): weer-iconen
- Inhoud (content): Inhoud
- Zijbalk (sidebar): Webcam, agenda, sociale media en adres
- Voet (footer): Slottekst

Naast deze regio's zijn ook page_top en page_bottom gedefinieerd, deze zijn noodzakelijk voor diverse modules.

## Responsiveness

Met responsiveness wordt de layout van de site op verschillende schermgrootte en bij verschillende lettergrootte bedoeld. Voor de responsiveness wordt voornamelijk gebruik gemaakt van de eenheid rem. Standaard is 1rem ongeveer 16px, maar een rem groeit mee met de standaard lettergrootte van de browser. Als een bezoeker behoefte heeft aan een groter lettertype kan die de standaard lettergrootte aanpassen naar bijvoorbeld 24px. Door de breedte van de zijbalk in rem te definiëren groeit deze mee met de instellingen van de bezoeker en blijft de tekst leesbaar. Dit betekend echter ook dat de zijbalk eerder naar onder moet worden geplaatst zodat deze niet teveel ruimte van de inhoud in gaat nemen. Door de eenheid rem te gebruiken voor de responsiveness past de site zich goed aan bij grotere of kleinere lettergrootte's.

Uitzonderingen zijn het menu en de achtergrondafbeelding. De afkapwaarde van het menu kan alleen in pixels worden ingesteld, waardoor de menubalk zich ook bij een pebaald aantal pixels aanpast. De afbeelding schaalt niet mee met de lettergrootte en dus is een afkapwaarde in pixels logischer.

Gegevens van de gebruikte resoluties voor de eigen website zijn niet beschikbaar. Maar op basis van de gegevens van statcounter kan de breedte van het scherm worden ingedeeld op drie resoluties:

- Mobiel: 360 - 430 pixels
- Tablet (staand): 768 - 810 pixels
- Desktop: 1280 - 2560 pixels

Op basis hiervan worden de regio's en blokken als volgt geplaatst:

- Mobiel (<37.5 rem of 600 pixels) :
  - Menu ingeklapt
  - Kleine achtergrondafbeelding
  - Weer boven Inhoud
  - Zijbalk onder Inhoud
    - Elementen Zijbalk onder elkaar
- Tablet (staand, 37.5 rem of 600 pixels - 60 rem)
  - Menu uitgeklapt (indien nodig dubbele rij)
  - Grote achtergrondafbeelding
  - Weer boven inhoud
  - Zijbalk onder Inhoud
    - Webcam, sociale media en adres naast de agenda
- Desktop (>60 rem)
  - Menu uitgeklapt
  - Weer rechts van inhoud
  - Zijbalk rechts van inhoud
    - Elementen onder elkaar
   
#### Responsiveness menu

De responsiveness van het menu wordt niet via CSS geregeld. Het menu kent drie standen:

- Horizontaal enkele rij
- Horizontaal dubbele rij
- Accordeonmenu

De overgang van een enkele rij naar een dubbele rij gebeurd in JavaScript (js/menu-main.js) en gebeurd als de hoofditems niet meer naast elkaar in de menubalk passen. Dat kan als het scherm te smal wordt of als het lettertype groter wordt. Bij een groter lettertype en smal scherm vormen zich soms drie rijen waardoor de lay-out vervormt. Hier moet nog een oplossing voor komen. In de mobiel-omgeving wordt het menu ingeklapt tot een accordeonmenu, dit gebeurd bij een schermbreedte van 600 pixels en kan worden ingesteld bij de instellingen van het superfish blok.

## Lettertype en kleuren

#### Lettertypen

- Lettertype: Lato
- Lettergrootten:
  - 0.9 rem: adresblok zijbalk, gebouwd door
  - 1 rem: hoofdnavigatie en voetmenu
  - 1.1 rem: standaard
  - 1.3 rem: header 2
  - 1.7 rem: header 1
- Varianten: Bold, Italic, Bold-Italic
- Regelhoogte:
  - 1: standaard
  - 1.4: adresblok zijbalk
  - 1.6: hoofdtekst
- Kleuren:
  - Zwart: standaard
  - Grijs (middel): hoofdtekst, adresblok zijbalk
  - Grijs (licht): voet
  - Wit: voet hoover
  - Lichtblauw: links in hoofdtekst

#### Kleuren

- Geel: rgb (255, 215, 0)
- Geel (hoover): rgb(245, 205, 0)
- Grijs (licht): rgb(205,205,205)
- Grijs (licht-hoover): rgb(195,195,195)
- Grijs (middel): rgb(68, 68, 68)
- Grijs (donker): rgb(41,41,41)
- Grijs (donker-hoover): rgb(54, 54, 54)
- Lichtblauw: rgb(3, 162, 255)
- Wit: white
- Zwart: black

## Beheerthema

Het rzvdaventria thema is niet geoptimaliseerd voor het beheergedeelte en de basis is niet echt bruikbaar. Daarom is het beter het core-thema Claro te kiezen. 

## Gedeïnstalleerde thema's

De core-thema's Olivero en Stark kunnen worden gedeïnstalleerd.

## Gebruikte standaarden

- Accessibility: https://www.drupal.org/docs/7/creating-accessible-themes/accessibility-principles
- CSS: https://www.drupal.org/docs/develop/standards/css/css-coding-standards
- Javascript: https://www.drupal.org/node/172169
- Twig Template namen: https://www.drupal.org/docs/develop/theming-drupal/twig-in-drupal/twig-template-naming-conventions

## Testen

Voor het testen van het thema kunnen de volgende instellingen worden gebruikt:

- Schermbreedte:
  - 360px
  - 430px
  - 768px
  - 800px
  - 810px
  - 1280px
  - 1920px
- Lettergrootte:
  - 16px
  - 24px
  - 32px
