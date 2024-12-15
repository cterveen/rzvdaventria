## Titel

Daventria Drupal 10.x Theme help - Datatypen

## Beschrijving

Een overzicht van de instellingen voor inhoudstypen en de bijbehorende woordenlijsten, automatische aliassen en views voor het daventria thema. Dit document bevat de volgende inhoudstypen:

- Activiteit
- Boekpagina
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
   - Helptekst: -zie onder-
   - Verplicht veld: Nee
   - Toegestane tekstopmaken: HTML
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
  - Veldtype: Datum en tijd, Datum
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
  - Systeemnaam: field_interne_link
  - Veldtype: Link
  - Aantal waarden: Beperkt, 1
  - Helptekst: -zie onder-
  - Verplicht veld: Nee
  - Toegestaan linktype: Alleen interne links
  - Linktekst toestaan: Optioneel
  - Standaard waarde instellen: Nee
- Website
  - Label: Website
  - Systeemnaam: field_externe_link
  - Veldtype: Link
  - Aantal waarden: Beperkt, 1
  - Helptekst: -zie onder-
  - Verplicht veld: Nee
  - Toegestaan linktype: Alleen externe links
  - Linktekst toestaan: Optioneel
  - Standaard waarde instellen: Nee
- Inschrijven
  - Label: Inschrijven
  - Systeemnaam: field_inschrijven
  - Veldtype: Link
  - Aantal waarden: Beperkt, 1
  - Helptekst: -zie onder-
  - Verplicht veld: Nee
  - Toegestaan linktype: Interne en externe links
  - Linktekst toestaan: Optioneel
  - Standaard waarde instellen: Nee
 

Helptekst body:

````
<ul>
<li>De body kan eventueel gebruikt worden voor extra informatie, in de meeste gevallen is een link naar de aankonding of infopagina voldoende.</li>
<li>Gebruik bij plakken altijd plakken zonder opmaak (Ctrl-Shift-V).</li>
<li>Vervang paragraafeinden door een enkele enter</li>
<li>Plaatjes hoeven geen alt-tekst, tenzij het plaatje inhoudelijk van belang is.</li>
</ul>
````

Helptekst inschrijven:

````
<ul>
<li>Gebruik dit veld voor links waar deelnemers zich in kunnen schrijven.</li>
<li>Voor links naar Mijn Daventria gebruik de linktekst "Mijn Daventria"</li>
<li>Voor een inschrijfformulier gebruik de linktekst "Inschrijfformulier"</li>
<li>Voor een e-mailadres gebruik de link "mailto:<adres>" en de omschrijving "E-mail".</li>
</ul>
````

Helptekst externe link:

````
<ul>
<li>Gebruik dit veld om een link naar andere websites toe te voegen, bijvoorbeeld naar de website van een wedstrijd.</li>
<li>Als linktekst het domein van de website gebruiken.</li>
</ul>
````

Helptekst interne link:

````
<ul>
<li>Gebruik dit veld om een link te maken naar een informatiepagina of aankondiging op onze eigen website.</li>
<li>Als linktekst de naam van de pagina of "Aankondiging" gebruiken.</li>
</ul>
````
 
#### Formulierweergave

- Titel: -11
- Begindatum: -10
- Einddatum: -9
- Begintijd: -8
- Eindtijd: -7
- Locatie: -6
- Inschrijven: -5
- Interne link: -4
- Externe link -3
- Body: -2
- Gepubliceerd: 5
- URL-alias: 10
- Geschreven door: 11
- Aangemaakt op: 12
- Taal: 20
- Aangeraden op de voorpagina: Uitgeschakeld
- Vastgeplakt boven aan de lijst: Uitgeschakeld

#### Weergave

- Links:
  - Gewicht: 99
- Begindatum:
  - Gewicht: 100
  - Label: Inline
  - Datumnotatie: Agenda - datum
- Einddatum:
  - Gewicht: 101
  - Label: Inline
  - Datumnotatie: Agenda - datum
- Begintijd:
  - Gewicht: 102
  - Label: Inline
  - Datumnotatie: Agenda - tijd
  - Datumnotatie tooltip: Agenda - tijd
- Eindtijd:
  - Gewicht: 103
  - Label: Inline
  - Datumnotatie: Agenda - tijd
  - Datumnotatie tooltip: Agenda - tijd
- Locatie:
  - Gewicht: 104
  - Label: Inline
- Inschrijven:
  - Gewicht: 106
  - Label: Inline
- Meer informatie:
  - Gewicht: 107
  - Label: Inline
- Website:
  - Gewicht: 108
  - Label: Inline
- Body:
  - Gewicht: 109
  - Label: - Verborgen -
- Taal:
  - Gebied: Uitgeschakeld
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
      - Een label aanmaken: Nee
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

Twig code voor het herschrijven van begindatum (maand), de exacte namen van de variabelen kunnen afwijken.

```
{{ field_begindatum }}
{% if field_einddatum and field_begindatum_1 == field_einddatum_1  %}
 - {{ field_einddatum }} {{ field_einddatum_1 }}
{% elseif field_einddatum %}
 {{ field_begindatum_1 }} - {{ field_einddatum }} {{ field_einddatum_1 }}
{% else %}
 {{ field_begindatum_1 }}
{% endif %}
```

#### Overzicht jaarkalender

- Naam voor weergave: Jaarkalender
- Opmaak: Onopgemaakte lijst
  - Instellingen
    - Groepeerveld nr 1: Maand
    - Views-rijklassen toevoegen: ja
- Weergeven: Velden
  - Instellingen
    - Levert standaard veldwrapper-elementen: ja
    - Inline-velden: -geen-
    - Scheidingsteken: -geen-
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
    - Inhoud: Begindatum
      - Een label aanmaken: Nee
      - Uitsluiten van weergave: Ja
      - Opmaakhupmiddel: aangepast
      - Tijdzone overschrijven: - Niets geselecteerd -
      - Datum-/tijdnotatie: F
      - Stijlinstellingen: Standaardklassen toevoegen
      - Resultaten herschijven: ```` {{ field_begindatum_2 }} <hr>````
      - Gedrag bij ontbreken van resultaten: Niet herschrijven indien leeg
      - Beheertitel: Maand
   - Filtercriteria
      - Inhoud: Gepubliceerd (=ja), Standaardgroep (EN)
      - Inhoud: Inhoudstype (=Activiteit), Standaardgroep (EN)
      - Inhoud: Begindatum (>=1 jan ), Groep 2 (EN)
      - Inhoud: Begindatum (>=31 dec), Groep 2
    - (OF)
      - Inhoud: Gepubliceerd (=ja), Standaardgroep (EN)
      - Inhoud: Inhoudstype (=Activiteit), Standaardgroep (EN)
      - Inhoud: Einddatum (>=1 jan ), Groep 2 (EN)
      - Inhoud: Einddatum (>=31 dec), Groep 2
   - Sorteercriteria
     - Inhoud: Befindatum (oplopend)
  - Pagnina-instellingen
    - Pad: /agenda
    - Menu: Geen menu
     
Twig code voor het herschrijven van begindatum (maand), de exacte namen van de variabelen kunnen afwijken.

````
{{ field_begindatum }}
{% if field_einddatum and field_begindatum_1 == field_einddatum_1  %}
 - {{ field_einddatum }}
{% elseif field_einddatum %}
- {{ field_einddatum }} {{ field_einddatum_1 }}
{% endif %}
````

#### Opmerkingen

Voor zowel begindatum, einddatum, begintijd en eindtijd worden het veldtype "Datum en tijd, Datum" gebruikt. De twee andere veldtypen ("Datum en tijd, Datumbereik" en "Datum en tijd, tijd") slaan indien leeg de huidige datum en tijd op. Gebruik van losse velden maakt het invoeren van de gegevens flexibeler. Via de opmaak wordt alleen de datum of de tijd weergegeven.


## Boekpagina

#### Inhoudstype
- Naam: Boekpagina
- Beschrijving: \<em\>Boeken\</em\> hebben een hiërarchische navigatie. Vaak gebruikt voor het aanmaken van handboeken of lesmateriaal.
- Instellingen van inzendingsformulier
  - Label van het titelveld: Titel
  - Voorbeeldweergave voor indien: Optioneel
  - Uitleg of indienrichtlijnen: -geen-
- Publicatie-opties:
  - Gepubliceerd: ja
  - Aangeraden op voorpagina: nee
  - Vastgeplakt bovenaan de lijst: nee
  - Nieuwe revisie aanmaken: ja
- Taalinstellingen:
  - Standaardtaal: Standaardtaal van de site (Dutch)
  - Toon de taalselector op de aanmaken- en bewerkpagina: Nee
- Weergave-instellingen
  - Auter en datum tonen: nee
- Menu-instellingen
  - Beschikbare menu's: Hoofdnavigatie
  - Standaard bovenliggende link: <main>

#### Velden

- Inhoud
  - Label: Inhoud
  - Veldopslag: Beperkt, 1
  - Helptext: -zie onder-
  - Verplicht veld: nee
  - Toegestane tekstopmaken: HTML
  - Samenvatting invoeren: Nee
  - Samenvatting vereisen: Nee
  - Standaardwaarde instellen: Nee

Helptekst Inhoud:
````
<ul>
<li>Een hoofdstuk uit het Gele Boekje.</li>
<li>Kleine tekstuele aanpassingen kunnen direct worden gemaakt, inhoudelijke wijzigingen gebeuren in overleg met het bestuur of de verantwoordelijke commissie.</li>
<li>Gebruik bij plakken altijd plakken zonder opmaak (Ctrl-Shift-V).</li>
<li>Vervang paragraafeinden door een enkele enter</li>
<li>Gebruik kop 2 of kop 3 voor tussenkoppen</li>
<li>Plaatjes hoeven geen alt-tekst, tenzij het plaatje inhoudelijk van belang is.</li>
<li>Termen van de index kunnen worden toegevoegd met de code <code>&lt;a name="index<i>term</i>"&gt;&lt;/a&gt;</code>. Plaats de code direct op de plaats waar deze moet komen te staan zonder extra witruimte.</li>
</ul>
````

#### Formulierweergave

- Titel: -5
- Taal: 20
- Geschreven door: 11
- Aangemaakt op: 12
- Aangeraden op de voorpagina: uitgeschakeld
- Vastgeplakt boven aan de lijst: uitgeschakeld
- Inhoud: -4
- URL-alias: 13
- Gepubliceerd: 5

#### Weergave

- Inhoud: 100
- Links: 101
- Taal: Uitgeschakeld
- Aangepaste weergave-instellingen: -geen-

#### Toegangsrechten

- Anonieme gebruiker: geen
- Geverifieerde gebruiker: geen
- Redacteur: -alle-

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
- Weergave-instellingen:
  - Auteur en datum tonen: Ja
- Menu-instellingen: -geen-

#### Velden

- Body
   - Label: Body
   - Toegestane aantal waarden: Beperkt, 1
   - Helptekst: - zie onder -
   - Verplicht veld: Nee
   - Toegestane tekstopmaken: HTML
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
  - Helptekst: - zie onder -
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
  - Toegestane bestandsextensies: doc, docx, jpg, jpeg, odf, ods, odx, pdf, png, txt, xls, xlsx
  - Map: bijlagen
  - Maximumgrootte per upload: -geen-
  - Veld omschrijving inschakelen: Nee

#### Helptekst Body ####

````
<ul>
<li>Gebruik bij plakken altijd plakken zonder opmaak (Ctrl-Shift-V).</li>
<li>Vervang paragraafeinden door een enkele enter</li>
<li>Plaatjes hoeven geen alt-tekst, tenzij het plaatje inhoudelijk van belang is.</li>
</ul>
````

#### Helptekst Tags ####

````
<p>Tags worden gebruikt om vergelijkbaar nieuws te kunnen selecteren.</p>
<p>Standaard termen zijn bijvoorbeeld:
<ul>
<li>In Memoriam</li>
<li>Jeugd en Junioren</li>
<li>Marathonroeien</li>
<li>Midweekroeien</li>
<li>Veiligheid</li>
<li>Wedstrijdroeien</li>
</ul>
</p>
````

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

#### Overzicht Nieuws - teasers

- Naam voor weergave: Nieuws - teasers
- Opmaak: Onopgemaakte lijst
- Weergeven: Inhoud | Teaser
 - Velden: -geen-
 - Filtercriteria
    - Inhoud: Gepubliceerd (= Ja), Standaardgroep (EN)
    - Inhoud: Inhoudstype (= Nieuws), Standaardgroep (EN)
    - Inhoud: Aangeraden op de voorpagina (= Ja), Standaardgroep
 - Sorteercriteria
   - Inhoud: Vastgeplakt bovenaan de lijst (aflopend)
   - Inhoud: Aangemaakt op (aflopend)
 - Pagina-instellingen
   - Pad: /home
   - Menu: Geen menu
   - Beheerthema: Nee
- Paginering
  - Een bepaald aantal items weergeven | 5 items
  - 'Meer'-link: nee

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
   - Helptekst: -zie onder-
opmaak (Ctrl-Shift-V). Paragraafeinden zijn een dubbele enter. Opmaak is op het moment niet mogelijk.
   - Verplicht veld: Nee
   - Toegestane tekstopmaken: HTML
   - Samenvatting invoeren: Nee
   - Samenvatting vereisen: Nee
   - Standaardwaarde instellen: Nee
   - Samenvatting: -geen-
   - Body: -geen-
 
#### Helptekst body

````
<ul>
<li>Gebruik bij plakken altijd plakken zonder opmaak (Ctrl-Shift-V).</li>
<li>Vervang paragraafeinden door een enkele enter</li>
<li>Plaatjes hoeven geen alt-tekst, tenzij het plaatje inhoudelijk van belang is.</li>
</ul>
````

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
