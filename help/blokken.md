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
- Hub
- Sociale media
- Webcam
- Weer en waterstanden

Voordat blokken kunnen worden aangemaakt moet een bloktype worden ingesteld. Dit gaat via Beheer > Structuur > Bloktypes (/admin/structure/block-content)

Het aanmaken van nieuwe blokken gaat via Beheer > Inhoud > Blokken (/admin/content/block)

Instellen van de blokken gaat via Beheer > Structuur > Blokindeling (/admin/structure/block)

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
  - Helptekst: De tekst die in het blok moet worden weergegeven. Opmaak en afbeeldingen zijn momenteel niet mogelijk.
  - Verplicht veld: Nee
  - Toegestane tekstopmaken: Platte tekst
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

#### Blok bewerken

- Body: -zie onder-
- Blokbeschrijving: Adres, contact- en bankgegevens

#### Blok instellen

- Titel: Adres, contact- en bankgegevens
- Systeemnaam: olivero_adrescontactenbankgegevens
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 5

#### Body

    Roei- en Zeilvereniging Daventria
    
    Rembrandtkade 197
    7412 HL Deventer
    0570-618441
    info@daventria.com
    
    NL86 INGB 0000 8044 45
    t.n.v. R&ZV Daventria

## Agenda

- Titel weergeven: Ja
- Items per blok: 5 (standaardinstelling)
- Titel overschrijven: Nee
- Zichtbaarheid: -geen-
- Systeemnaam: olivero_views_block__activiteiten_block_1
- Gebied: Zijbalk, 3

## Branding van de website

#### Blok instellen

- Titel: Branding van de website
- Titel weergeven: nee
- Branding elementen wisselen: Site logo, Naam van de website
- Response-status: -geen-
- Pagina's: -geen-
- Rollen: -geen-
- Inhoudstype: -geen-
- Woordenlijst: -geen-
- Systeemnaam: olivero_site_branding
- Gebied: Kop

Zie ook instellingen.md

## Hub

- Titel weergeven: Nee
- Items per blok: 2 (standaardinstelling)
- Titel overschrijven: Nee
- Zichtbaarheid: -geen-
- Systeemnaam: olivero_views_block__hub_block_1
- Gebied: Boven inhoud, -10

## Sociale media

#### Blok bewerken

- Body: [FB] [X] [LI] [RSS]
- Blokbeschrijving: Iconen Sociale media & RSS

#### Blok instellen

- Titel: Iconen Sociale media & RSS
- Systeemnaam: olivero_iconensocialemediarss
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 4

## Webcam

#### Blok bewerken

- Body: [webcam]
- Blokbeschrijving: Webcam met link naar weerpagina

#### Blok instellen

- Titel: Webcam met link naar weerpagina
- Systeemnaam: olivero_webcammetlinknaarweerpagina
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 2

## Weer en waterstanden

#### Blok bewerken

- Body: [temp][waterhoogte][weer]
- Blokbeschrijving: Weer en waterstanden

#### Blok instellen

- Titel: Webcam met link naar weerpagina
- Systeemnaam: olivero_weerenwaterstanden
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 1
