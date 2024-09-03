## Titel

Daventria Drupal 10.x Theme help - Blokken

## Beschrijving

Hier worden de instellingen van de bloktypen en blokken voor het daventria thema beschreven.

Dit document beschrijft de volgende bloktypen:

- Standaard blok

Dit document beschrijft de volgende blokken:

- Adres, contact- en bankgegevens
- Agenda
- Branding van de website
- Gebouwd met Drupal
- Hoofdnavigatie
- Hub
- Paginatitel
- Primaire beheersacties
- Primaire inhoud van de pagina
- Primaire tabs
- Secundaire tabs
- Statusberichten
- Webcam
- Weer en waterstanden
- Zoekformulier (breed)

Blokken in de categoriën Inhoudsblok en Lijsten (Overzichten) moeten worden aangemaakt, de overige categoriën zijn onderdeel van het systeem. Voordat de inhoudsblokken kunnen worden aangemaakt moet een bloktype worden ingesteld.

Instellen van bloktypen gaat via Beheer > Structuur > Bloktypes (admin/structure/block-content).

Het aanmaken van nieuwe blokken in de categorie Inhoudsblok gaat via Beheer > Inhoud > Blokken (admin/content/block).

Het aanmaken van nieuwe blokken in de categorie Lijsten (Overzichten) gaat via Beheer > Structuur > Overzichten (admin/structure/views) 

Instellen van de blokken gaat via Beheer > Structuur > Blokindeling (admin/structure/block).

## Standaard blok

#### Bloktype

- Label: Standaard blok
- Systeemnaam: standaard_blok
- Beschrijving: Een blok waar tekst of HTML kan worden ingevoerd.
- Nieuwe revisie aanmaken: Nee
- Taalinstellingen: Standaardtaal van de site (Dutch)
- Toon de taalselector op de aanmaken- en bewerk-pagina's: nee

#### Velden beheren

- Body
  - Label: Body
  - Toegestaan aantal waarden: Beperkt, 1
  - Helptekst: De tekst of afbeeldingen die in het blok wordt weergegeven. Het gebruik van HTML is mogelijk.
  - Verplicht veld: Nee
  - Toegestane tekstopmaken: HTML
  - Samenvatting invoeren: Nee
  - Samenvatting vereisen: Nee
  - Standaardwaarde instellen: Nee
 
#### Formulierweergave

- Titel: -10
- Body: -9
- Blokbeschrijving: -5
- Taal: uitgeschakeld

#### Weergave

- Titel 0, verborgen
- Body 1, verborgen

#### Toegangsrechten beheren

- Anonieme gebruiker: -geen-
- Geverifieerde gebruiker: -geen-
  
## Adres, contact- en bankgegevens.

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Zijbalk
- Gewicht: 3

#### Blok bewerken

- Body: -zie onder-
- Blokbeschrijving: Adres, contact- en bankgegevens

#### Blok instellen

- Titel: Adres, contact- en bankgegevens
- Systeemnaam: rzvdaventria_adrescontactenbankgegevens
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 3

#### Body

````
<p>
    <strong>Roei- en Zeilvereniging Daventria</strong>
</p>
<p>
    Rembrandtkade 197<br>
    7412 HL Deventer<br>
    0570-618441<br>
    <a href="mailto:info@daventria.com">info@daventria.com</a>
</p>
<p>
    NL86 INGB 0000 8044 45<br>
    t.n.v. R&amp;ZV Daventria
</p>
````

## Agenda

#### Blokindeling

- Categorie: Lijsten (Overzichten)
- Gebied: Zijbalk
- Gewicht: 3

#### Blok instellen

- Titel weergeven: Ja
- Items per blok: 5 (standaardinstelling)
- Titel overschrijven: Nee
- Zichtbaarheid: -geen-
- Systeemnaam: rzvdaventria_views_block__activiteiten_block_1
- Gebied: Zijbalk, 3

## Branding van de website

#### Blokindeling

- Categorie: System
- Gebied: Kop
- Gewicht: 0

#### Blok instellen

- Titel: Branding van de website
- Titel weergeven: nee
- Branding elementen wisselen: Site logo, Naam van de website
- Response-status: -geen-
- Pagina's: -geen-
- Rollen: -geen-
- Inhoudstype: -geen-
- Woordenlijst: -geen-
- Systeemnaam: rzvdaventria_site_branding
- Gebied: Kop

Zie ook instellingen.md

## Gebouwd met Drupal

#### Blokindeling

- Categorie: System
- Gebied: Voet
- Gewicht: 0

## Hoofdnavigatie

#### Blokindeling

- Categorie: Menu's
- Gebied: Kop
- Categorie: Superfish
- Gewicht: 2

#### Blok instellen

- Titel: Hoofdnavigatie
- Systeemnaam: rzvdavenria_hoofdnavigatie
- Titel weergeven: Nee
- Menuniveaus
  - Initieel zichtbaarheidsniveau: 1
  - Aantal te tonen niveaus: Onbeperkt
  - Alle menulinks tonen: Nee
- Blokinstellingen
  - Menutype: Horizontal (single row)
  - Stijl: Geen
  - Add arrows to parent menus: nee
  - Drop shadows: ja
  - Slide-in effect: Verticaal
- Superfish plugins
  - jQuiry Suppostition: Ja
  - jQuiry hoverIntent: Ja
- sf-Touchscreen:
  - sf-Touchscreen: Enable jQuery sf-Touchscreen plugin for this menu depending on the user's Web browser user agent
  - Select behaviour: Hiding the sub-menu on the second tap, adding cloned parent links to the top of sub-menus as well. (Standaard)
  - User agent settings: Use the pre-defined lists of the user agents.
- sfSmallscreen:
  - sfSmallscreen: Enable jQuiry sf-Smallscreen plugin for this menu depending on the user's Web browser window width. (Standaard)
  - Window width settings: 600 pixels
  - Selecteer een type: Convert the menu to an accordion menu.
  - Accordion menu title: &#x2261;
  - Accordion button type: Use parent menu items as buttons

## Hub

#### Blokindeling

- Categorie: Lijsten (Overzichten)
- Gebied: Inhoud
- Gewicht: -8

#### Blok instellen

- Titel weergeven: Nee
- Items per blok: 2 (standaardinstelling)
- Titel overschrijven: Nee
- Zichtbaarheid: -geen-
- Systeemnaam: rzvdaventria_views_block__hub_block_1
- Gebied: Boven inhoud, 0

## Primaire beheersacties

#### Blokindeling

- Categorie: core
- Gebied: Inhoud
- Gewicht: -7

## Primaire inhoud van de pagina

#### Blokindeling

- Categorie: System
- Gebied: Inhoud
- Gewicht: -4

## Primaire tabs

#### Blokindeling

- Categorie: core
- Gebied: Inhoud
- Gewicht: -5

## Secundaire tabs

#### Blokindeling

- Categorie: core
- Gebied: Inhoud
- Gewicht: -4

## Statusberichten

#### Blokindeling

- Categorie: System
- Gebied: Inhoud
- Gewicht: -6

## Webcam

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Zijbalk
- Gewicht: 1

#### Blok bewerken

- Body: - zie onder -
- Blokbeschrijving: Webcam met link naar weerpagina

**Body:**

```
<p>
    <img src="/~internetcie/webcam/webcam_jachthaven.jpg" width="640" height="368">
</p>
```

#### Blok instellen

- Titel: Webcam met link naar weerpagina
- Systeemnaam: rzvdaventria_webcammetlinknaarweerpagina
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 1

## Weer en waterstanden

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Weer
- Gewicht: 0

#### Blok bewerken

- Body: - zie onder -
- Blokbeschrijving: Weer en waterstanden

**Body:**

```
<img src="/~internetcie/webcam/weerdata.php?meting=temperatuur" width="80" height="80">
<img src="/~internetcie/webcam/weerdata.php?meting=ijsselpeil" width="80" height="80">
<img src="/~internetcie/webcam/weerdata.php?meting=windkracht" width="80" height="80">
```

#### Blok instellen

- Titel: Webcam met link naar weerpagina
- Systeemnaam: rzvdaventria_weerenwaterstanden
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 1

## Zoekformulier (breed)

#### Blokindeling

- Formulieren
- Gebied: Kop
- Gewicht: 1

Het gewicht van het zoekformulier is lager dan dat van hoofdnavigatie. Voor de brede lay-out maakt dit niet uit, maar bij de lange layout wordt het zoekformulier hierdoor
rechts van het menu geplaatst.
