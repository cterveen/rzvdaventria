## Titel

Daventria Drupal 10.x Theme help - Blokken

## Beschrijving

Hier worden de instellingen van de bloktypen en blokken voor het daventria thema beschreven.

Dit document beschrijft de volgende bloktypen:

- Standaard blok

Dit document beschrijft de volgende blokken:

- Adres, contact- en bankgegevens
- Agenda
- Archief
- Branding van de website
- Contact
- Documenten
- Gebouwd met Drupal
- Hoofdnavigatie
- Hub
- Lid worden
- Paginatitel
- Primaire beheersacties
- Primaire inhoud van de pagina
- Primaire tabs
- Quicknav
- Secundaire tabs
- Statusberichten
- Webcam
- Weer en waterstanden

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

## Archief

#### Blokindeling

- Categorie: Menu
- Gebied: Voet
- Gewicht: 1

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

## Contact

#### Blokindeling

- Categorie: Menu
- Gebied: Voet
- Gewicht: 3

## Documenten

#### Blokindeling

- Categorie: Menu
- Gebied: Voet
- Gewicht: 2

## Gebouwd met Drupal

#### Blokindeling

- Categorie: System
- Gebied: Voet
- Gewicht: 0

## Hoofdnavigatie

#### Blokindeling

- Categorie: Superfish
- Gebied: Kop
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
  - Add arrows to parent menus: Ja
  - Drop shadows: Ja
  - Slide-in effect: Verticaal
- Superfish plugins
  - jQuiry Suppostition: Ja
  - jQuiry hoverIntent: Ja
- sf-Touchscreen:
  - sf-Touchscreen: Enable jQuery sf-Touchscreen plugin for this menu.
  - Select behaviour: Hiding the sub-menu on the second tap.
  - User agent settings: Use the pre-defined lists of the user agents.
- sfSmallscreen:
  - sfSmallscreen: Enable jQuiry sf-Smallscreen plugin for this menu depending on the user's Web browser window width. (Standaard)
  - Window width settings: 768 pixels
  - Selecteer een type: Convert the menu to an accordion menu.
  - Accordion menu title: &#x2261;
  - Accordion button type: Use parent menu items as buttons.
- Supersubs
  - Enable Supersubs for this menu: Nee

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

## Lid worden

#### Blokindeling

- Categorie: Menu
- Gebied: Voet
- Gewicht: 4

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

## Quicknav

#### Blokindeling

- Formulieren
- Gebied: Kop
- Gewicht: 1

Het gewicht van quicknav is lager dan dat van hoofdnavigatie. Voor de brede lay-out maakt dit niet uit, maar bij de lange layout wordt het zoekformulier hierdoor
rechts van het menu geplaatst.

#### Blok bewerken

- Body: -zie onder-
- Blokbeschrijving: Adres, contact- en bankgegevens

#### Blok instellen

- Titel: Quicknav
- Systeemnaam: rzvdaventria_quicknav
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Kop, 1

#### Body

````
<a href="https://rzvdaventria-site.e-captain.nl/afschrijfsysteem"><img src="/~internetcie/themes/rzvdaventria/images/icons/afschrijfsysteem.svg" alt="Afschrijfsysteem" width="32" height="32" title="Afschrijfsysteem"></a><a href="/~internetcie/search"><img src="/~internetcie/themes/rzvdaventria/images/icons/search.svg" alt="Zoeken" width="32" height="32" title="Zoeken"></a>
````

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

````
<img src="/~internetcie/webcam/weerdata.php?meting=temperatuur" width="80" height="80" id="temperatuur" title="Temperatuur botenhuis">
<img src="/~internetcie/webcam/waterdata.php" width="80" height="80" id="ijsselpeil" title="IJsselpeil Deventer">
<img src="/~internetcie/webcam/weerdata.php?meting=windkracht" width="80" height="80" id="windkracht" title="Windkracht botenhuis">
````

De alternatieve tekst van deze afbeeldingen wordt door middel van Javascript toegevoegd en laat de actuele waarden zien.

#### Blok instellen

- Titel: Webcam met link naar weerpagina
- Systeemnaam: rzvdaventria_weerenwaterstanden
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 1
