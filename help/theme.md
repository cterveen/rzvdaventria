## Titel

Daventria Drupal 10.x Theme help - Theme

## Beschrijving

Een overzicht van de instellingen van het thema.

Thema's kunnen worden ingesteld, gedeïnstalleerd of als beheerthema worden ingesteld onder Beheer > Uiterlijk (admin/appearance).

## Basis

Het thema is gemaakt met behulp van starterkit en daarna aangepast. Drupal kent meerdere methoden om nieuwe thema's aan te maken waarbij Starterkit voor rzvdaventria de meest toegankelijke is. Uitgaan van het basisthema (Olivero) heeft welliswaar voordelen omdat veel functionaliteit hierin beschikbaar is, maar de nadelen van het gebruik van dit thema wegen hier niet tegen op. Kopiëren en plakken leidt tot het moeten maken van een groot aantal aanpassingen, en bij het maken van een subthema moet elke keer dat Olivero wordt aangepast gecontroleerd worden of het thema nog steeds goed werkt. Beginnen met een starterkit thema betekend welliswaar meer werk om alles goed in te stellen, maar is daarna stabieler.

## Regio's

De volgende regio's zijn beschikbaar:

- Kop (header): logo, naam, menu, zoekbalk
- Weer (weather): weer-iconen
- Inhoud (content): Inhoud
- Zijbalk (sidebar): Webcam, agenda, sociale media en adres
- Voet (footer): Slottekst

Naast deze regio's zijn ook page_top en page_bottom gedefinieerd, deze zijn noodzakelijk voor diverse modules.

## CSS structuur

Drupal gebruikt een SMACCS structuur voor de CSS files. In de standaard thema's worden de verschillende stijlelementen over veel verschillende bestanden verdeeld, welke vervolgens bij het laden van de pagina worden samengevoegd. Omdat samenvoegen niet goed lijkt te werken maakt het rzvdaventria thema gebruik van een minimale SMACCS structuur:

- css/base.css bevat de stijlelementen voor basis HTML elementen
- css/layout.css bevat de stijlelementen voor het plaatsen van de regios en van blokken
- css/components.css bevat de stijlelementen van alle overige elementen, inclusief de plaatsing van elementen in blokken

Vanuit het basisthema zijn nog de nodige bestanden aanwezig in css/components, deze zullen ter zijner tijd worden samengevoegd met css/components.css.

## Responsiveness

Gegevens van de gebruikte resoluties voor de website zijn niet beschikbaar. Maar op basis van de gegevens van statcounter kan de breedte van het scherm worden ingedeeld op drie resoluties:

- Mobiel: 360 - 430 pixels
- Tablet (staand): 768 - 810 pixels
- Desktop: 1280 - 2560 pixels

Op basis hiervan worden de regio's en blokken als volgt geplaatst:

- Mobiel (<600px) :
  - Menu ingeklapt
  - Weer boven Inhoud
  - Zijbalk onder Inhoud
    - Elementen Zijbalk onder elkaar
- Tablet (staand, 600-960px)
  - Menu ingeklapt
  - Weer boven inhoud
  - Zijbalk onder Inhoud
    - Webcam, sociale media en adres naast de agenda
- Desktop (>960px)
  - Menu uitgeklapt
  - Weer rechts van inhoud
  - Zijbalk rechts van inhoud
    - Elementen onder elkaar

## Beheerthema

The rzvdaventria thema is niet geoptimaliseerd voor het beheergedeelte en de basis is niet echt bruikbaar. Daarom is het beter het core-thema Claro te kiezen. 

## Gedeïnstalleerde thema's

De core-thema's Olivero en Stark kunnen worden gedeïnstalleerd.
