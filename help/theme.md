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

Gegevens van de gebruikte resoluties voor de eigen website zijn niet beschikbaar. Maar op basis van de gegevens van statcounter kan de breedte van het scherm worden ingedeeld op drie resoluties:

- Mobiel: 360 - 430 pixels
- Tablet (staand): 768 - 810 pixels
- Desktop: 1280 - 2560 pixels

Voor de responsiveness wordt gebruik gemaakt van de eenheid rem. Standaard is 1rem ongeveer 16px, maar een rem groeit mee met de standaard lettergrootte van de browser. Als een bezoeker behoefteheeft aan een groter lettertype kan die de standaard lettergrootte aanpassen naar bijvoorbeld 24px. Door de breedte van de zijbalk in rem te definiëren groeit deze mee met de instellingen van de bezoeker en blijft de tekst leesbaar. Dit betekend echter ook dat de zijbalk eerder naar onder moet worden geplaatst zodat deze niet teveel ruimte van de inhoud in gaat nemen. Door de eenheid rem te gebruiken voor de responsiveness past de site zich goed aan bij grotere of kleinere lettergrootte's.

Op basis hiervan worden de regio's en blokken als volgt geplaatst:

- Mobiel (<37.5rem) :
  - Menu ingeklapt
  - Weer boven Inhoud
  - Zijbalk onder Inhoud
    - Elementen Zijbalk onder elkaar
- Tablet (staand, 37.5-60rem)
  - Menu ingeklapt
  - Weer boven inhoud
  - Zijbalk onder Inhoud
    - Webcam, sociale media en adres naast de agenda
- Desktop (>60rem)
  - Menu uitgeklapt
  - Weer rechts van inhoud
  - Zijbalk rechts van inhoud
    - Elementen onder elkaar
   
De grootte van de achtergrondafbeelding is op het moment nog vastgelegd in pixels om niet teveel van de schermruimte in te nemen. Daardoor is een deel van de afkapwaarden voor de mobiele versie nog in pixels gedefineerd. Mogelijk wordt dit nog aangepast.

## Lettertype en kleuren

#### Lettertypen

Nog te bepalen.

#### Kleuren

- Geel: rgb (255, 215, 0)
- Grijs (licht): rgb(205,205,205)
- Grijs (donker: rgb(41,41,41)
- Wit: white
- Zwart: black

## Beheerthema

The rzvdaventria thema is niet geoptimaliseerd voor het beheergedeelte en de basis is niet echt bruikbaar. Daarom is het beter het core-thema Claro te kiezen. 

## Gedeïnstalleerde thema's

De core-thema's Olivero en Stark kunnen worden gedeïnstalleerd.
