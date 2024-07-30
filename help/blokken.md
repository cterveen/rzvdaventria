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
- Sociale media
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

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Kop
- Gewicht: 0

#### Blok bewerken

- Body: -zie onder-
- Blokbeschrijving: Adres, contact- en bankgegevens

#### Blok instellen

- Titel: Adres, contact- en bankgegevens
- Systeemnaam: rzvdaventria_adrescontactenbankgegevens
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 4

#### Body

    Roei- en Zeilvereniging Daventria
    
    Rembrandtkade 197
    7412 HL Deventer
    0570-618441
    info@daventria.com
    
    NL86 INGB 0000 8044 45
    t.n.v. R&ZV Daventria

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

## Hoofdnavigatie

#### Blokindeling

- Categorie: Menu's
- Gebied: Kop
- Gewicht: 2

## Gebouwd met Drupal

#### Blokindeling

- Categorie: System
- Gebied: Voet
- Gewicht: 0

## Hub

#### Blokindeling

- Categorie: Lijsten (Overzichten)
- Gebied: Inhoud
- Gewicht: 0

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
- Gewicht: -10

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

## Sociale media

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Zijbalk
- Gewicht: 3

#### Blok bewerken

- Body: [FB] [X] [LI] [RSS]
- Blokbeschrijving: Iconen Sociale media & RSS

#### Blok instellen

- Titel: Iconen Sociale media & RSS
- Systeemnaam: rzvdaventria_iconensocialemediarss
- Titel weergeven: Nee
- Zichtbaarheid: Geen beperking
- Gebied: Zijbalk, 3

## Statusberichten

#### Blokindeling

- Categorie: System
- Gebied: Inhoud
- Gewicht: -9

## Webcam

#### Blokindeling

- Categorie: Inhoudsblok
- Gebied: Zijbalk
- Gewicht: 1

#### Blok bewerken

- Body: [webcam]
- Blokbeschrijving: Webcam met link naar weerpagina

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

- Body: [temp][waterhoogte][weer]
- Blokbeschrijving: Weer en waterstanden

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

Het gewicht van het zoekformulier is lager dan dat van hoofdnavigatie. Met de layout wordt de volgorde van deze elementen omgedraaid.
