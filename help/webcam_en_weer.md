## Titel

Daventria Drupal 10.x Theme help - Webcam en Weer

## Beschrijving

Hier worden de aanvullende gegevens die op de website weer worden gegeven beschreven. Met name de webcam, het weer en de waterstand.

## Weer en waterstand

De temperatuur wordt aan de achterkant van het botenhuis gemeten door een Raspberry Pi met temperatuursensor. Op de Raspberry Pi draait een script dat elke minuut de temperatuur afleest. Tevens wordt elke uur de waterstand in Deventer uitgelezen van rws.nl. Op dit moment wordt van deze gegevens een plaatje gemaakt en geupload. Deze werkwijze gaat veranderen waarbij de gegevens in een json-bestand worden vastgelegd en geupload.

Het json-bestand is als volgt samengesteld:

- Bestandsnaam: tempwind.json
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
  - windkracht
    - meting: mediaan van de laatste 10 metingen met 1 minuut interval  
    - interval: 1 minuut
    - eenheid: beaufort
    - nauwkeurigheid: geheel getal
    - verloopt: na 1 uur

Het json-bestand wordt gebruikt om zowel het plaatje met de meetgegevens te maken als de alt-tekst en titel. Het plaatje wordt gemaakt in php, de alt-tekst en titel in JavaScript. Omdat JavaScript in de browser draait en alles omzet naar lokale tijd of UTC wordt de timestamp zonder tijdszoneaanduiding gegeven en expires in UTC. De berekeningen worden door het script op de Raspberry Pi zodat deze maar op één plek te hoeven worden aangepast, dat script doet dus ook een groot deel van de datavalidatie.

#### Voorbeeld tempwind.json

De samenstelling van tempwind.json is al volgt:

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
   https://waterinfo.rws.nl/publiek/watertemperatuur/driel.boven/details
2. Waterhoogte bij Deventer
   https://waterinfo.rws.nl/publiek/waterhoogte/deventer/details
3. Waterhoogte bij Lobith
   https://waterinfo.rws.nl/publiek/waterhoogte/lobith.bovenrijn.tolkamer/details

De gegevens worden eenmaal per uur uitgelezen vanuit de Rijkswaterstaat Waterdata API, verwerkt als aparte json bestand geüpload naar de webserver. De gegevens worden in JavaScript verwerkt op de weerpagina. De actuele waterhoogte wordt ook in een los json bestandje verwerkt en geüpload om de waterstand op de voorpagina te laten zien. Zowel het php-script voor het plaatje als het javascript voor de alt-tekst en titel maken hier gebruik van. Het bestand met de actuele waterstand is veel kleiner (~0.1 kB in plaats van ~60 kB) en is daardoor sneller te laden en verwerken.

Het json-bestand met historische en verwachte waterstanden is als volgt samengesteld:
- Bestandsnaam: -zie metingen-
- Locatie: /webcam/data
- Per meting een object met:
  - label: de nette naam van de meting
  - unit: de eenheid voor de meting
  - actueel: een opject met de gemeten waarden, een tijdstip en verlooptijd:
    - waarde: de numerieke waarde van de laatste meting
    - tijdstip: een string met de tijdstip van de meting
    - caption: als het ijsselpeil hoger is dan 4.85m "hoogwater", anders leeg
    - timestamp: het uur en minuten van de meting in de locale tijdzone
    - expires: een string van datum en tijdstip dat de waarde verloopt, vier uur na de meting
  - historie: een object met de gemeten waarden:
    - waarde: een array met de meetresultaten
    - tijdstip: een array met de tijdstippen van de metingen
  - verwacht: een object met de gemeten waarden:
    - waarde: een array met de meetresultaten
    - tijdstip: een array met de tijdstippen van de metingen
- Metingen:
  - Watertemperatuur Driel Boven
    - Bestandsnaam: tempDrielBoven.json
    - actueel: nee
    - historie: ja
    - verwacht: nee
  - Actuele waterhoogte Deventer
    - Bestandsnaam: wathtedevactueel.json
    - actueel: ja
    - historie: nee
    - verwacht: nee
  - Waterhoogte Deventer
    - Bestandsnaam: waterstandenDev.json
    - actueel: nee
    - historie: ja
    - verwacht: ja
  - Watertemperatuur Driel Boven
    - Bestandsnaam: waterstandenLob.json
    - actueel nee
    - historie: ja
    - verwacht: ja

#### Voorbeeld wathtedevactueel.json

````
{
  "label": "IJsselpeil Deventer",
  "unit": "m",
  "actueel": {
    "waarde": 1.48,
    "tijdstip": "2026-06-24T09:40:00.000+01:00",
    "caption": "",
    "timestamp": "10:40",
    "expires": "2026-06-24T13:40:00.000+0100"
  }
}
````

#### Voorbeeld ijsselpeil_deventer.json

````
{
  "label": "IJsselpeil Deventer",
  "unit": "m",
  "historie": {
    "waarde": [
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
      3.77
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
      "2024-10-18T18:00:00.000+01:00"
    ]
  }
}
````

## Zie ook:
https://rijkswaterstaatdata.nl/waterdata/
