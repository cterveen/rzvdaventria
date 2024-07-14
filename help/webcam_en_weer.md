## Titel

Daventria Drupal 10.x Theme help - Webcam en Weer

## Beschrijving

Hier worden de aanvullende gegevens die op de website weer worden gegeven beschreven. Met name de webcam, het weer en de waterstand.

## Weer en waterstand

De temperatuur wordt aan de achterkant van het botenhuis gemeten door een Raspberry Pi met temperatuursensor. Op de Raspberry Pi draait een script dat elke minuut de temperatuur afleest en hier een plaatje van maakt. Tevens wordt elke 3 uur de waterstand in Deventer uitgelezen van rws.nl en wordt ook hier een plaatje van gemaakt.

De bestandsnamen van deze plaatjes zijn respecievelijk temp_achter.gif en IJsselpeil.gif. Beide plaatjes worden elke minuut geupload naar /webcam. Beide plaatjes worden op de site getoond via het script /webcam/weerdata.php met daarbij de naam van het plaatje in de parameter image. Het script controleert of het plaatje bestaat en niet ouder is dan 1 uur. Als dat het geval is wordt het plaatje getoond, anders wordt een plaatje dat een error weergeeft getoond.
