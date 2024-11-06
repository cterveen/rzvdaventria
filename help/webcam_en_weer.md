## Titel

Daventria Drupal 10.x Theme help - Webcam en Weer

## Beschrijving

Hier worden de aanvullende gegevens die op de website weer worden gegeven beschreven. Met name de webcam, het weer en de waterstand.

## Weer en waterstand

De temperatuur wordt aan de achterkant van het botenhuis gemeten door een Raspberry Pi met temperatuursensor. Op de Raspberry Pi draait een script dat elke minuut de temperatuur afleest. Tevens wordt elke uur de waterstand in Deventer uitgelezen van rws.nl. Op dit moment wordt van deze gegevens een plaatje gemaakt en geupload. Deze werkwijze gaat veranderen waarbij de gegevens in een json-bestand worden vastgelegd en geupload.

Het json-bestand is als volgt samengesteld:

- Bestandsnaam: weerdata.json
- Locatie: /webcam/data
- Per meting een object met:
  - label: de nette naam van de meting
  - value: de waarde als string (Nederlandse notatie)
  - unit: de eenheid voor de meting
  - caption: een onderschift voor de conditie, bijvoorbeeld "vorst" of "hoogwater"
  - timestamp: de tijd waarop de meting heeft plaatsgevonden in lokale tijd format hh:mm
  - expires: de tijd, in UTC, waarna de meting niet meer geldig is.
- Metingen:
  - temperatuur
    - meting: huidige meting temperatuursensor achterkant botenhuis
    - interval: 1 minuut
    - eenheid: graden Celsius
    - nauwkeurigheid: geheel getal
      - -0,5 ≤ temperatuur < 0 wordt -0
    - onderschrift:
      - temperatuur < 0°C: vorst
    - verloopt: na 1 uur
  - ijsselpeil
    - meting: rijkswaterstaat
    - interval: 60 minuten
    - eenheid: meter
    - nauwkeurigheid: twee decimalen
    - onderschrift:
      - ijsselpeil ≥ 4,85 hoogwater
      - ijsselpeil ≤ 1,35 laagwater
    - verloopt: na 4 uur
  - windkracht
    - meting: mediaan van de laatste 10 metingen met 1 minuut interval  
    - interval: 1 minuut
    - eenheid: beaufort
    - nauwkeurigheid: geheel getal
    - verloopt: na 1 uur

Het json-bestand wordt gebruikt om zowel het plaatje met de meetgegevens te maken als de alt-tekst en titel. Het plaatje wordt gemaakt in php, de alt-tekst en titel in JavaScript. Omdat JavaScript in de browser draait en alles omzet naar lokale tijd of UTC wordt de timestamp zonder tijdszoneaanduiding gegeven en expires in UTC. De berekeningen worden door het script op de Raspberry Pi zodat deze maar op één plek te hoeven worden aangepast, dat script doet dus ook een groot deel van de datavalidatie.

#### Voorbeeld weerdata.json

De samenstelling van weerdata.json is al volgt:

````
{
  "temperatuur": {
    "label": "Temperatuur",
    "value": "12",
    "unit": "°C",
    "caption": "",
    "timestamp": "15:30",
    "expires": "2025-08-29 14:30:00 UTC"
  },
  "ijsselpeil": {
    "label": "IJsselpeil",
    "value": "4,13",
    "unit": "m",
    "caption": "",
    "timestamp": "15:30",
    "expires": "2025-08-29 19:30:00 UTC"
  },
  "windkracht": {
    "label": "Windkracht",
    "value": "2",
    "unit": "bft",
    "caption": "",
    "timestamp": "15:30",
    "expires": "2025-08-29 14:30:00 UTC"
  }
}
````

## Waterdata

De waterdata bestaat uit drie datasets:

1. Watertemperatuur bij Driel Boven
   https://waterinfo.rws.nl/#!/details/publiek/watertemperatuur/Driel-boven(DRIB)/Temperatuur___20Oppervlaktewater___20oC
2. Waterhoogte bij Deventer
   https://waterinfo.rws.nl/#/publiek/waterhoogte/Deventer%28DEVE%29/details?parameters=Waterhoogte___20Oppervlaktewater___20t.o.v.___20Normaal___20Amsterdams___20Peil___20in___20cm
3. Waterhoogte bij Lobith
   https://waterinfo.rws.nl/#/publiek/waterhoogte/Lobith%28LOBI%29/details?parameters=Waterhoogte___20Oppervlaktewater___20t.o.v.___20Normaal___20Amsterdams___20Peil___20in___20cm

De gegevens worden eenmaal per uur uitgelezen vanuit de Rijkswaterstaat Waterdata API, verwerkt en apart als json bestand geupload naar de webserver. De gegevens worden in JavaScript verwerkt op de weerpagina.

Het json-bestand is als volgt samengesteld:
- Bestandsnaam: -zie metingen-
- Locatie: /webcam/data
- Per meting een object met:
  - label: de nette naam van de meting
  - unit: de eenheid voor de meting
  - historie: een object met de gemeten waarden:
    - waarde: een array met de meetresultaten
    - tijdstip: een array met de tijdstippen van de metingen
  - verwacht: een object met de gemeten waarden:
    - waarde: een array met de meetresultaten
    - tijdstip: een array met de tijdstippen van de metingen
- Metingen:
  - Watertemperatuur Driel Boven
    - Bestandsnaam: watertemperatuur_driel_boven.json
    - historie: ja
    - verwacht: nee
- Metingen:
  - Waterhoogte Deventer
    - Bestandsnaam: ijsselpeil_deventer.json
    - historie: ja
    - verwacht: ja
- Metingen:
  - Watertemperatuur Driel Boven
    - Bestandsnaam: rijnpeil_lobith.json
    - historie: ja
    - verwacht: ja

#### Voorbeeld ijsselpeil_deventer.json

````
{
  "label": "IJsselpeil Deventer",
  "unit": "m",
  "historie": {
    "waarde": [
      4.02,
      4.02,
      4.00,
      3.99,
      3.98,
      3.98,
      3.97,
      3.97,
      3.96,
      3.95,
      3.94,
      3.93,
      3.93,
      3.92,
      3.91,
      3.91,
      3.9,
      3.89,
      3.88,
      3.88,
      3.87,
      3.87,
      3.86,
      3.85,
      3.84,
      3.83,
      3.82,
      3.81,
      3.81,
      3.8,
      3.8,
      3.8,
      3.8,
      3.8,
      3.79,
      3.79,
      3.78,
      3.78,
      3.7,
      3.77,
      3.76,
      3.75,
      3.75,
      3.76,
      3.74,
      3.75
    ],
    "tijdstip": [
      "2024-10-16T21:00:00.000+01:00",
      "2024-10-16T22:00:00.000+01:00",
      "2024-10-16T23:00:00.000+01:00",
      "2024-10-17T00:00:00.000+01:00",
      "2024-10-17T01:00:00.000+01:00",
      "2024-10-17T02:00:00.000+01:00",
      "2024-10-17T03:00:00.000+01:00",
      "2024-10-17T04:00:00.000+01:00",
      "2024-10-17T05:00:00.000+01:00",
      "2024-10-17T06:00:00.000+01:00",
      "2024-10-17T07:00:00.000+01:00",
      "2024-10-17T08:00:00.000+01:00",
      "2024-10-17T09:00:00.000+01:00",
      "2024-10-17T10:00:00.000+01:00",
      "2024-10-17T11:00:00.000+01:00",
      "2024-10-17T12:00:00.000+01:00",
      "2024-10-17T13:00:00.000+01:00",
      "2024-10-17T14:00:00.000+01:00",
      "2024-10-17T15:00:00.000+01:00",
      "2024-10-17T16:00:00.000+01:00",
      "2024-10-17T17:00:00.000+01:00",
      "2024-10-17T18:00:00.000+01:00",
      "2024-10-17T19:00:00.000+01:00",
      "2024-10-17T20:00:00.000+01:00",
      "2024-10-17T21:00:00.000+01:00",
      "2024-10-17T22:00:00.000+01:00",
      "2024-10-17T23:00:00.000+01:00",
      "2024-10-18T00:00:00.000+01:00",
      "2024-10-18T01:00:00.000+01:00",
      "2024-10-18T02:00:00.000+01:00",
      "2024-10-18T03:00:00.000+01:00",
      "2024-10-18T04:00:00.000+01:00",
      "2024-10-18T05:00:00.000+01:00",
      "2024-10-18T06:00:00.000+01:00",
      "2024-10-18T07:00:00.000+01:00",
      "2024-10-18T08:00:00.000+01:00",
      "2024-10-18T09:00:00.000+01:00",
      "2024-10-18T10:00:00.000+01:00",
      "2024-10-18T11:00:00.000+01:00",
      "2024-10-18T12:00:00.000+01:00",
      "2024-10-18T13:00:00.000+01:00",
      "2024-10-18T14:00:00.000+01:00",
      "2024-10-18T15:00:00.000+01:00",
      "2024-10-18T16:00:00.000+01:00",
      "2024-10-18T17:00:00.000+01:00",
      "2024-10-18T18:00:00.000+01:00"
    ]
  },
  "verwacht": {
    "waarde": [
      3.79,
      3.79,
      3.79,
      3.79,
      3.79,
      3.79,
      3.78,
      3.78,
      3.78,
      3.77,
      3.77,
      3.77,
      3.77,
      3.76,
      3.76,
      3.76,
      3.76,
      3.76,
      3.76,
      3.76,
      3.75,
      3.75,
      3.75,
      3.74,
      3.73,
      3.73,
      3.72,
      3.72,
      3.71,
      3.7,
      3.7,
      3.69,
      3.69,
      3.68,
      3.68,
      3.67,
      3.67,
      3.66,
      3.66,
      3.66,
      3.65,
      3.65,
      3.64,
      3.64,
      3.64,
      3.64,
      3.64,
      3.66,
      3.67
    ],
    "tijdstip": [
      "2024-10-18T09:00:00.000+01:00",
      "2024-10-18T10:00:00.000+01:00",
      "2024-10-18T11:00:00.000+01:00",
      "2024-10-18T12:00:00.000+01:00",
      "2024-10-18T13:00:00.000+01:00",
      "2024-10-18T14:00:00.000+01:00",
      "2024-10-18T15:00:00.000+01:00",
      "2024-10-18T16:00:00.000+01:00",
      "2024-10-18T17:00:00.000+01:00",
      "2024-10-18T18:00:00.000+01:00",
      "2024-10-18T19:00:00.000+01:00",
      "2024-10-18T20:00:00.000+01:00",
      "2024-10-18T21:00:00.000+01:00",
      "2024-10-18T22:00:00.000+01:00",
      "2024-10-18T23:00:00.000+01:00",
      "2024-10-19T00:00:00.000+01:00",
      "2024-10-19T01:00:00.000+01:00",
      "2024-10-19T02:00:00.000+01:00",
      "2024-10-19T03:00:00.000+01:00",
      "2024-10-19T04:00:00.000+01:00",
      "2024-10-19T05:00:00.000+01:00",
      "2024-10-19T06:00:00.000+01:00",
      "2024-10-19T07:00:00.000+01:00",
      "2024-10-19T08:00:00.000+01:00",
      "2024-10-19T09:00:00.000+01:00",
      "2024-10-19T10:00:00.000+01:00",
      "2024-10-19T11:00:00.000+01:00",
      "2024-10-19T12:00:00.000+01:00",
      "2024-10-19T13:00:00.000+01:00",
      "2024-10-19T14:00:00.000+01:00",
      "2024-10-19T15:00:00.000+01:00",
      "2024-10-19T16:00:00.000+01:00",
      "2024-10-19T17:00:00.000+01:00",
      "2024-10-19T18:00:00.000+01:00",
      "2024-10-19T19:00:00.000+01:00",
      "2024-10-19T20:00:00.000+01:00",
      "2024-10-19T21:00:00.000+01:00",
      "2024-10-19T22:00:00.000+01:00",
      "2024-10-19T23:00:00.000+01:00",
      "2024-10-20T00:00:00.000+01:00",
      "2024-10-20T01:00:00.000+01:00",
      "2024-10-20T02:00:00.000+01:00",
      "2024-10-20T03:00:00.000+01:00",
      "2024-10-20T04:00:00.000+01:00",
      "2024-10-20T05:00:00.000+01:00",
      "2024-10-20T06:00:00.000+01:00",
      "2024-10-20T07:00:00.000+01:00",
      "2024-10-20T08:00:00.000+01:00",
      "2024-10-20T09:00:00.000+01:00"
    ]
  }
}
````

## Zie ook:
https://rijkswaterstaatdata.nl/waterdata/
