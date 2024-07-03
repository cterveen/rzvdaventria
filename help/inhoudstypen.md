## Title

Daventria Drupal 10.x Theme help - Datatypen

## Beschrijving

Een overzicht van de instellingen voor inhoudstypen, woordenlijsten en automatische aliassen voor het
daventria thema.

De inhoudstypen kunnen worden aangemaakt in Admin > Structuur > Inhoudstypen (admin/structure/types).

Een woordenlijst kan worden aangemaakt in Admin > Structuur > Taxonomie (admin/structure/taxonomy).

Het installen van de automatische alias gaat via Admin > Instellingen > URL-aliassen > Patronen
(admin/config/search/path/patterns). Na het aanmaken moet de het patroon bewerkt worden om de resterende
velden in te vullen.

## Nieuws

#### Woordenlijst

Voordat het inhoudstype aangemaakt kan worden moet eerst de woordenlijst worden aangemaakt om de
tags op te kunnen slaan. 

- Naam: Nieuws
- Systeemnaam: nieuwstags
- Beschrijving: Tags voor nieuwsberichten
- Woordenlijst-taal: Dutch
- Standaardtaal: Standaardtaal van de site (Dutch)

#### Inhoudstype

- Naam: Nieuws
- Systeemnaam: Nieuws
- Beschrijving: Nieuws betreffen de nieuwsberichten die op de site te lezen zijn.
- Label van het titelveld: Titel
- Voorbeeldweergave voor indienen: optioneel
- Uitleg of indienrichtlijnen: Nieuws wordt op de voorpagina en in het archief weergegeven.
- Publicatieopties: Gepubliceerd, Aangeraden op de voorpagina.
- Taalinstellingen: Standaardtaal van de site (Dutch)
- Weergave-instellingen: -geen-
- Menu-instellingen: -geen-

#### Velden

- Body
   - Label: Body
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: Vul hier de tekst van het nieuwsbericht in. Gebruik bij plakken altijd plakken zonder
opmaak (Ctrl-Shift-V). Paragraafeinden zijn een dubbele enter. Opmaak is op het moment niet mogelijk.
   - Verplicht veld: Nee
   - Toegestane tekstopmaken: Platte tekst
   - Samenvatting invoeren: Nee
   - Samenvatting vereisen: Nee
   - Standaardwaarde instellen: Nee
   - Samenvatting: -geen-
   - Body: -geen-
- Tags
  - Label: Tags
  - Systeemnaam: field_tags
  - Type: Referentie
  - Referentie: Taxonomieterm
  - Toegestane aantal waarden: Onbeperkt
  - Helptekst: Voeg een of meerdere termen toe om nieuws te kunnen groeperen. Standaard termen zijn
bijvoorbeeld In Memoriam, Jeugd en Junioren, Marathonroeien, Midweekroeien, Veiligheid, Wedstrijdroeien.
  - Verplicht veld: Nee
  - Referentiemethode: Standaard
  - Woordenlijst: Nieuws
  - Maak de gerefereerde entiteiten aan als deze nog niet bestaan: Ja
  - Standaardwaarde instellen: Nee
  - Standaardwaarde: -geen-
- Bijlage
  - Label: Bijlage
  - Systeemnaam: field_bijlage
  - Type: Bestandsupload
  - Type: Bestand
  - Weergave veld inschakelen: Nee
  - Bestanden standaard weergeven: Nee
  - Uploadbestemming: Publieke bestanden
  - Toegestaan aantal waarden: Onbeperkt
  - Helptekst: Bijlagen kunnen onderaan het nieuwsbericht worden gedownload.
  - Verplicht veld: Nee
  - Toegestane bestandsextensies: txt doc docx odf xls xlsx odx pdf
  - Map: bijlagen
  - Maximumgrootte per upload: -geen-
  - Veld omschrijving inschakelen: Nee

 #### Formulierweergave beheren

 - Titel: -5
 - Taal: 20
 - Geschreven door: 11
 - Aangemaakt op: 12
 - Aangeraden op de voorpagina: 6
 - Vastgeplakt boven aan de lijst: 7
 - URL-alias: 10
 - Gepubliceerd: 5
 - Body: -4
 - Tags -3
 - Bijlage -2

#### Weergave beheren

- Links: 100
- Body: 101
- Tags: 102
- Bijlage: 103
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen:
  - Afdrukken: Nee
  - RSS: Nee
  - Search index: Nee
  - Teaser: Ja
  - Token: Nee
  - Volledige inhoud: Nee
  - Zoekresultaten uitlichten-invoer: Nee
 
#### Toegangsrechten

  - Anonieme gebruiker: geen
  - Geverifieerde gebruiker: geen

#### Automatische alias Nieuws

- Patroontype: Inhoud
- Label: Nieuws
- ID: nieuwsalias
- Ingeschakeld: Ja
- Pad-patroon: nieuws/\[node:created:custom:d-m-Y\]/\[node:title\]
- Inhoudstype: Nieuws
- Ingeschakeld: Ja

#### Automatische alias Tags

- Patroontype: Taxonomieterm
- Label: Tags
- ID: tagsalias
- Ingeschakeld: Ja
- Pad-patroon: tag/[term:name]
- Woordenlijst: Nieuws
- Ingeschakeld: Ja
  
