## Titel

Daventria Drupal 10.x Theme help - Datatypen

## Beschrijving

Een overzicht van de instellingen voor inhoudstypen en de bijbehorende woordenlijsten, automatische aliassen en views voor het daventria thema. Dit document bevat de volgende inhoudstypen:

- Activiteit
- Hub
- Nieuws
- Pagina

De inhoudstypen kunnen worden aangemaakt in Admin > Structuur > Inhoudstypen (admin/structure/types).

Een woordenlijst kan worden aangemaakt in Admin > Structuur > Taxonomie (admin/structure/taxonomy).

Het installen van de automatische alias gaat via Admin > Instellingen > URL-aliassen > Patronen (admin/config/search/path/patterns). Na het aanmaken moet de het patroon bewerkt worden om de resterende velden in te vullen.

Het aanmaken van overzichten gaat via Admin > Structuur > Overzichten (admin/structure/views)

Mediatypen kunnen worden aangemaakt via Admin > Structuur > Mediatypes (admin/structure/media)

## Activiteit

#### Inhoudstype

- Naam: Activiteit
- Systeemnaam: activiteit
- Beschrijving: Activiteiten betreffen zaken die in de agenda worden weergegeven.
- Label van het titelveld: Titel
- Voorbeeldweergave voor indienen: optioneel
- Uitleg of indienrichtlijnen: Een activiteit bestaat meestal uit een begin- en eventueel einddatum, een begin- en eventueel eindtijdstip en een of meerdere links met aanvullende info of het inschrijfformulier. Het is niet nodig om de activiteit in de body uitgebreid te beschrijven.
- Publicatieopties: Gepubliceerd
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
- Begindatum
   - Label: Begindatum
   - Systeemnaam: field_begindatum
   - Veldtype: Datum en tijd, Datum
   - Data type: Alleen datum
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: Vul de begindatum in.
   - Verplicht veld: Ja
   - Standaardwaarde instellen: Nee
- Einddatum
   - Label: Einddatum
   - Systeemnaam: field_einddatum
   - Veldtype: Datum en tijd, Datum
   - Data type: Alleen datum
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: Als een activiteit meerdere dagen duurt vul dan hier een einddatum in. De activiteit wordt eenmalig weergegeven met begin- en einddatum en blijft staan tot en met de einddatum.
   - Verplicht veld: Nee
   - Standaardwaarde instellen: Nee
- Begintijd
  - Label: Begintijd
  - Systeemnaam: field_begintijd
  - Veldtype: Datum en tijd, Tijdstip
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: De tijd waarop de activiteit begint.
  - Verplicht veld: Nee
  - Standaardwaarde instellen: Nee
- Eindtijd
  - Label: Eindtijd
  - Systeemnaam: field_eindtijd
  - Veldtype: Datum en tijd, Tijdstip
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: De tijd waarop de activiteit eindigd.
  - Verplicht veld: Nee
  - Standaardwaarde instellen: Nee
- Locatie
  - Label: Locatie
  - Systeemnaam: field_locatie
  - Veldtype: Platte tekst, tekst (plat)
  - Maximum lengte: 255
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: Adres of bijvoorbeeld ruimte op de roeivereniging waar de activiteit plaatsvind of men zich kan melden.
  - Verplicht veld: Nee
  - Standaardwaarde instellen: Nee
- Meer informatie
  - Label: Meer informatie
  - Systeemnaam: field_meer_informatie
  - Veldtype: Link
  - Aantal waarden: Beperkt, 2
  - Helptekst: Een of twee links met meer informatie. Bijvoorbeeld naar een aankondiging of website van de organisatie.
  - Verplicht veld: Nee
  - Toegestaan linktype: Interne en externe links
  - Linktekst toestaan: Optioneel
  - Standaard waarde instellen: Nee
- Inschrijven
  - Label: Inschrijven
  - Systeemnaam: field_inschrijven
  - Veldtype: Link
  - Aantal waarden: Beperkt, 1
  - Helptekst: Een link waar men zich in kan schrijven. Voor links naar Mijn Daventria gebruik de omschrijving "Mijn Daventria", voor een formulier "Formulier" en voor email gebruik de omschrijving "E-mail" en de link "mailto:<adres>".
  - Verplicht veld: Nee
  - Toegestaan linktype: Interne en externe links
  - Linktekst toestaan: Optioneel
  - Standaard waarde instellen: Nee
 
#### Formulierweergave

- Titel: -11
- Taal: 20
- Geschreven door: 11
- Aangemaakt op: 12
- Aangeraden op de voorpagina: Uitgeschakeld
- Vastgeplakt boven aan de lijst: Uitgeschakeld
- URL-alias: 10
- Gepubliceerd: 5
- Body: -3
- Begindatum: -10
- Einddatum: -9
- Begintijd: -8
- Eindtijd: -7
- Locatie: -6
- Meer informatie: -4
- Inschrijven: -5

#### Weergave

- Links: 99
- Titel: -10
- Body: 107
- BeginDatum: 100
- Einddatum: 101
- Begintijd: 102
- Eindtijd: 103
- Locatie: 104
- Meer informatie: 105
- Inschrijven: 106
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen: -geen-

#### Toegangsrechten

- Anonieme gebruiker: geen
- Geverifieerde gebruiker: geen

#### Automatische alias Activiteit

- Patroontype: Inhoud
- Label: Activiteit
- ID: activiteitalias
- Ingeschakeld: Ja
- Pad-patroon: agenda/\[node:field_datum:start_date\]/\[node:title\]
- Inhoudstype: Activiteit

#### Overzicht: agenda

- Instellingen
  - Overzichtsnaam: activiteiten
  - Beschrijving: Nee
  - Weergeven: Inhoud, Activiteit, Ongesorteerd
  - Een pagina aanmaken: Nee
  - Een blok aanmaken: Ja
  - Bloktitel: Agenda
  - Weergaveformaat: Tabel
  - Items per blok: 5
  - Paginering gebruiken: nee
- Weergaven
  - Naam voor weergave: Agenda
  - Beheer-omschrijving: De agenda op de voorpagina.
  - Velden
    - Inhoud: Einddatum
      - Een label aanmaken: Nee
      - Uitsluiten van weergave: Ja
      - Opmaakhupmiddel: aangepast
      - Tijdzone overschrijven: - Niets geselecteerd -
      - Datum-/tijdnotatie: d
      - Stijlinstellingen: -geen-
      - Resultaten herschijven: -geen-
      - Gedrag bij ontbreken van resultaten: Niet herschrijven indien leeg
      - Beheertitel: Einddatum (dag)
    - Inhoud: Einddatum
      - Een label aanmaken: Nee
      - Uitsluiten van weergave: Ja
      - Opmaakhupmiddel: aangepast
      - Tijdzone overschrijven: - Niets geselecteerd -
      - Datum-/tijdnotatie: M
      - Stijlinstellingen: -geen-
      - Resultaten herschijven: -geen-
      - Gedrag bij ontbreken van resultaten: Niet herschrijven indien leeg
      - Beheertitel: Einddatum (maand)
    - Inhoud: Begindatum
      - Een label aanmaken: Nee
      - Uitsluiten van weergave: Nee
      - Opmaakhupmiddel: aangepast
      - Tijdzone overschrijven: - Niets geselecteerd -
      - Datum-/tijdnotatie: d
      - Stijlinstellingen: -geen-
      - Resultaten herschijven: -geen-
      - Gedrag bij ontbreken van resultaten: Niet herschrijven indien leeg
      - Beheertitel: Begindatum (dag)
    - Inhoud: Begindatum
      - Een label aanmaken: Nee
      - Uitsluiten van weergave: Nee
      - Opmaakhupmiddel: aangepast
      - Tijdzone overschrijven: - Niets geselecteerd -
      - Datum-/tijdnotatie: d
      - Stijlinstellingen: Standaardklassen toevoegen
      - Resultaten herschijven: Ja, zie onder
      - Gedrag bij ontbreken van resultaten: Niet herschrijven indien leeg
      - Beheertitel: Begindatum (maand)
    - Inhoud: Titel(titel)
  - Filtercriteria
    - Inhoud: Gepubliceerd (=ja), Standaardgroep (EN)
    - Inhoud: Inhoudstype (=Activiteit), Standaardgroep (EN)
    - Inhoud: Begindatum (>=today), Groep 2 (OF)
    - Inhoud: Einddatum (>=today), Groep 2 (OF)
  - Sorteercriteria
      - Begindatum
        - De sortering voor bezoekers zichtbaar maken: Nee
        - Volgorde: oplopend
        - Nauwkeurigheid: Dag
        - Beheertitel: -geen-
  - Bloknaam: Agenda
  - Blokcategorie: Lijsten (Overzichten)
  - Afwijkende instellingen: Items per pagina
  - Toegang: Toegangsrechten
  - Kop: -geen-
  - Voet: -geen
  - Gedrag bij ontbreken resultaten: -geen-
  - Paginering:
    - Een bepaald aantal items weergeven: 5 items
    - 'Meer' link: Nee
    - Linkweergave: geen
   
Twig code voor het herschrijven van begindatum (maand), de exacte naam van de variable kan afwijken.

```
{{ field_begindatum }}
{% if field_einddatum and field_begindatum_1 == field_einddatum_2  %}
 - {{ field_einddatum }} {{ field_einddatum_2 }}
{% elseif field_einddatum %}
 {{ field_begindatum_1 }} - {{ field_einddatum }} {{ field_einddatum_2 }}
{% else %}
 {{ field_begindatum_1 }}
{% endif %}
```

#### Opmerkingen

Onderzocht is of Datum en tijd, Datumbereik handig is om te gebruiken maar dit lijkt onvoldoende flexibel met niet ingevulde waarden. Vermoedelijk zijn losse velden voor begindatum, einddatum, begintijd en eindtijd flexibeler. 

## Hub

#### Mediatype

- Naam: Hub
- Systeemnaam: media_hub
- Beschrijving: Een afbeelding in die voor een hub gebruikt wordt.
- Mediabron: Afbeelding
- Veldtoewijzing: - Veld overslaan -
- Publicatieopties: Gepubliceerd

#### Inhoudstype

- Naam: Hub
- Systeemnaam: hub
- Beschrijving: Een hub is een plaatje dat boven de inhoud van sommige pagina's getoond wordt om gebruikers snel door te kunnen laten klikken. Per pagina worden twee hubs getoond, maar er kunnen meer hubs gemaakt worden zodat deze worden afgewisseld.
- Label van het titelveld: Titel
- Voorbeeldweergave voor indienen: optioneel
- Uitleg of indienrichtlijnen: De eerste twee gepubliceerd hubs worden op de geselecteerde pagina weergegeven.
- Publicatieopties: Gepubliceerd
- Taalinstellingen: Standaardtaal van de site (Dutch)
- Weergave-instellingen: -geen-
- Menu-instellingen: -geen-

#### Velden

- Afbeelding
   - Label: Afbeelding
   - Systeemnaam: field_afbeelding
   - Veldtype: Media
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: Upload een afbeelding van ###x## pixels.
   - Verplicht veld: Ja
   - Referentiemethode: standaard
   - Mediatype: Hub
   - Sorteren op: - Geen -
   - Toegestane tekstopmaken: Platte tekst
   - Samenvatting invoeren: Nee
   - Samenvatting vereisen: Nee
   - Standaardwaarde instellen: Nee
   - Samenvatting: -geen-
   - Body: -geen-
- Link
  - Label: Link
  - Systeemnaam: field_pagina
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: De pagina waarnaar gelinkt wordt. De linktekst wordt onder de afbeelding weergegeven.
  - Verplicht veld: Ja
  - Toegestaan linktype: Interne en externe links
  - Linktekst toestaan: Verplicht
  - Standaardwaarde instellen: Nee
- Pagina
  - Label: Pagina
  - Systeemnaam: field_pagina
  - Type: Referentie, Inhoud
  - Itemtype om naar te verwijzen: Inhoud
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: De pagina waarop de hub moet worden weergegeven.
  - Verplicht veld: Nee
  - Referentie-methode: Standaard
  - Inhoudstype: Pagina
  - Sorteren op: - Geen -
  - Standaardwaarde instellen: Nee
- Volgorde
  - Label: Volgorde
  - Veldtype: Getal, Getal
  - Toegestane aantal waarden: Beperkt, 1
  - Helptekst: De volgorde waarin hubs op een pagina worden getoond.
  - Verplicht veld: Nee
  - Minimum: -geen-
  - Maximum: -geen-
  - Voorvoegsel: -geen-
  - Standaardwaarde instellen: Nee
 
#### Formulierweergave

- Titel: -5
 - Taal: 20
 - Geschreven door: 11
 - Aangemaakt op: 12
 - Aangeraden op de voorpagina: uitgeschakeld
 - Vastgeplakt boven aan de lijst: uitgeschakeld
 - URL-alias: uitgeschakeld
 - Gepubliceerd: 5
 - Afbeelding: -2
 - Pagina -4
 - Volgorde -3

#### Weergave

- Links: 100
- Pagina: 101
- Volgorde: 102
- Afbeelding: 103
- Link: 104
- Taal: Uitgeschakeld

#### Toegangsrechten

- Anonieme gebruiker: geen
- Geverifieerde gebruiker: geen

#### Overzicht: hub

- Overzichtnaam: hub
- Systeemnaam: hub
- Beschrijving: Geeft de 'hubs' weer op de pagina
- Weergeven: Inhoud
- Van het type: Hub
- Gesorteerd volgens: Ongesorteerd
- Een pagina maken: Nee
- Een blok aanmaken: Ja
- Bloktitel: Hub
- Weergaveformaat: Onopgemaakte lijst
- Van: Velden
- Items per blok: 2
- Paginering gebruiken: Nee
- Naam voor weergave: Hub
- Beheer-weergave: Geeft de 'hubs' weer op de pagina
- Velden:
  - Inhoud: link [verborgen]
    - Een label aanmaken: Nee
    - Uitsluiten van weergave: Nee
    - Kolom gebruikt voor kliksortering: uri
    - Opmaakhulpmiddel: Link
    - Lengte linktekst inkorten: 80
    - Alleen url: Ja
    - rel="nofollow" aan links toevoegen: Nee
    - Link in nieuw venster openen: Nee
    - Stijlinstellingen: Standaardklassen toevoegen
    - Resulten van herschrijven: Nee
    - Gedrag bij ontbreken van resultaten: Verberg indien leeg, Niet herschrijven indien leeg
    - Beheertitel: -geen-
  - Inhoud: hub:afbeelding
    - Een label aanmaken: Nee
    - Uitsluiten van weergave: Nee
    - Opmaakhulpmiddel: Weergeven entiteit
    - Label linkt naar gerefereerde entitieit: Nee
    - Stijlinstellingen: Standaardklassen toevoegen
    - Resulten van herschrijven:
      - Dit veld als een link weergeven: Ja
      - Linkpad: {{ field_link_1 }}
    - Gedrag bij ontbreken van resultaten: Verberg indien leeg, Niet herschrijven indien leeg
    - Beheertitel: -geen-
  - Inhoud: link
    - Een label aanmaken: Nee
    - Uitsluiten van weergave: Nee
    - Kolom gebruikt voor kliksortering: uri
    - Opmaakhulpmiddel: Link
    - Lengte linktekst inkorten: 80
    - Alleen url: Nee
    - rel="nofollow" aan links toevoegen: Nee
    - Link in nieuw venster openen: Nee
    - Stijlinstellingen: Standaardklassen toevoegen
    - Resulten van herschrijven: Nee
    - Gedrag bij ontbreken van resultaten: Verberg indien leeg, Niet herschrijven indien leeg
    - Beheertitel: -geen-
 - Sorteercriteria
   - Volgorde
     - Sortering zichtbaarmaken: Nee
     - Volgorde: oplopend sorteren
  - Contextuele filter
    - Filter: Pagina (field_pagina)
    - Wanneer de fiterwaarde NIET beschikbaar is: Standaardwaarde opgeven, Inhoud-ID uit de URL
    - Wanneer de filterwaarde WEL beschikbaar is: -geen-
    - Validatiecriteria opgeven: Ja
    - Validatiemiddel: URL-alias
    - Valideren of de gebruiker toegang heeft tot URL-alias: Nee
    - Meerdere argumenten: Enkele ID
    - Te ondernemen actie als de filterwaarde ongeldig is: Overzicht verbergen
    - Beheertitel: -geen-
    - Meer: -geen-
 - Blok verbergen als het overzicht leeg is: Ja

## Nieuws

#### Woordenlijst

Voordat het inhoudstype aangemaakt kan worden moet eerst de woordenlijst worden aangemaakt om de tags op te kunnen slaan. 

- Naam: Nieuws
- Systeemnaam: nieuwstags
- Beschrijving: Tags voor nieuwsberichten
- Woordenlijst-taal: Dutch
- Standaardtaal: Standaardtaal van de site (Dutch)

#### Inhoudstype

- Naam: Nieuws
- Systeemnaam: nieuws
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
- Body: 101, Label: verborgen
- Tags: 102, Label: verborgen
- Bijlage: 103, Label: boven
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen: Teaser

#### Weergave beheren: teaser
- Body: 100
- Links: 101
- Tags: uitgeschakeld
- Bijlage: uitgeschakeld
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen: Teaser

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

#### Automatische alias Tags

- Patroontype: Taxonomieterm
- Label: Tags
- ID: tagsalias
- Ingeschakeld: Ja
- Pad-patroon: tag/[term:name]
- Woordenlijst: Nieuws

## Pagina

#### Inhoudstype

- Naam: Pagina
- Systeemnaam: pagina
- Beschrijving: Een pagina bevat vaste inhoud.
- Label van het titelveld: Titel
- Voorbeeldweergave voor indienen: optioneel
- Uitleg of indienrichtlijnen: Elke pagina heeft een vaste url waar veelal vanuit het menu
naar wordt gelinkt.
- Publicatieopties: Gepubliceerd, Nieuwe rivisie aanmaken
- Taalinstellingen: Standaardtaal van de site (Dutch)
- Weergave-instellingen: -geen-
- Menu-instellingen: Hoofdnavigie

#### Velden

- Body
   - Label: Body
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: Vul hier de tekst van de pagina in. Gebruik bij plakken altijd plakken zonder
opmaak (Ctrl-Shift-V). Paragraafeinden zijn een dubbele enter. Opmaak is op het moment niet mogelijk.
   - Verplicht veld: Nee
   - Toegestane tekstopmaken: Platte tekst
   - Samenvatting invoeren: Nee
   - Samenvatting vereisen: Nee
   - Standaardwaarde instellen: Nee
   - Samenvatting: -geen-
   - Body: -geen-

 #### Formulierweergave beheren

 - Titel: -5
 - Taal: 20
 - Geschreven door: 11
 - Aangemaakt op: 12
 - Aangeraden op de voorpagina: hidden
 - Vastgeplakt boven aan de lijst: hidden
 - URL-alias: 10
 - Gepubliceerd: 5
 - Body: -4

#### Weergave beheren

- Links: 100
- Body: 101
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen: -geen-
 
#### Toegangsrechten

- Anonieme gebruiker: geen
- Geverifieerde gebruiker: geen

#### Automatische alias Pagina

- Patroontype: Inhoud
- Label: Nieuws
- ID: nieuwsalias
- Ingeschakeld: Ja
- Pad-patroon: \[node:title\]
- Inhoudstype: Pagina
