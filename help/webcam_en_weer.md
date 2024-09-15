## Titel

Daventria Drupal 10.x Theme help - Webcam en Weer

## Beschrijving

Hier worden de aanvullende gegevens die op de website weer worden gegeven beschreven. Met name de webcam, het weer en de waterstand.

## Weer en waterstand

De temperatuur wordt aan de achterkant van het botenhuis gemeten door een Raspberry Pi met temperatuursensor. Op de Raspberry Pi draait een script dat elke minuut de temperatuur afleest. Tevens wordt elke uur de waterstand in Deventer uitgelezen van rws.nl. Op dit moment wordt van deze gegevens een plaatje gemaakt en geupload. Deze werkwijze gaat veranderen waarbij de gegevens in een json-bestand worden vastgelegd en geupload.

Het json-bestand is als volgt samengesteld:

- Naam: weerdata.json
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
