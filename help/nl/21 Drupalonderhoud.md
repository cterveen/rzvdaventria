## Titel

Drupal onderhoud

## Beschrijving

Dit document beschrijft de noodzakelijke handelingen voor het updaten en upgraden van het systeem en de modules.

Met een update wordt een overgang bedoeld waarbij het de hoofdversie van Drupal hetzelfde blijft, bijvoorbeeld van Drupal 10.2.6 naar Drupal 10.3.1. Deze updates komen regelmatig beschikbaar en bevatten vaak oplossingen voor veiligheidsproblemen en bugs. Het is verstandig deze op korte termijn uit te voeren. In principe leiden updates niet tot moeilijkheden.

Met een upgrade wordt een overgang bedoeld waarbij de hoofdversie veranderd, bijvoorbeeld van 10.3.1 naar 11.0.1. Upgrades komen minder vaak voor en er kan soms jaren tussen zitten. Bij een upgrade is meer aan het systeem zelf gesleuteld en dit veroorzaakt eerder problemen. De wijzigingen zijn echter niet zo groot dat het hele systeem opnieuw moet worden opgebouwd. Het doen van een upgrade hoeft minder snel te gebeuren dan een update, maar wel voordat de oude hoofdversie niet meer wordt ondersteund.  

Of er nieuwe versies van het systeem of modules beschikbaar zijn kan worden gezien in Beheer > Rapporten > Beschikbare updates (/admin/reports/updates/update). Onder het tabblad Instellingen is het mogelijk om bij updates een mailbericht te sturen. Daarnaast wordt binnen het beheersysteem her- en der een waarschuwing gegeven dat er updates beschikbaar zijn. Van modules, themas of libraries die geen onderdeel zijn van Drupal moet handmatig worden gecontroleerd of er updates zijn. Zie help/modules.md voor een overzicht.

In veel gevallen zal het updaten van het systeem en de modules gelijktijdig worden uitgevoerd. In dat geval is het uiteraard maar eenmaal nodig om een back up te maken en het systeem in of uit Onderhoudsmodus te zetten.

## Updaten Drupal

1. Download de nieuwe Drupal versie van de website: https://www.drupal.org/project/drupal
2. Maak een back-up van de bestanden en database
3. Ga naar Beheer > Instellingen > Ontwikkeling > Onderhoudsmodus (/admin/config/development/maintenance)
4. Zet de website in Onderhoudsmodus
5. Verwijder alle mappen en bestanden in de hoofdmap **met uitzondering van** de volgende mappen:
     - /libraries
     - /modules
     - /profiles
     - /sites
     - /themes
     - /webcam
     - /.htaccess*
     - /favicon.ico
     - /robots.txt*
6. Upload alle mappen en bestanden van de gedownloade Drupal versie, met uitzondering van de onder 5 genoemde mappen.
7. Ga naar /update.php en volg de instructies
8. Haal de website uit Onderhoudsmodus

\* .htaccess en robots.txt zijn configuratiebestanden waarin zowel Drupal als eigen instellingen zijn opgenomen. Vergelijk de bestanden met de bestanden in de nieuwe versie en neem waar nodig instellingen over.

## Upgraden Drupal

Eigenlijk wordt het afgeraden om Drupal handmatig te upgraden en is hier ook geen handleiding voor. Dit kan via composer worden gedaan als er toegang is tot de commandline (voor zover ik weet is dat er niet). Het is lastig na te gaan of de update volledig is gelukt. Wellicht is het verstandig om /sites/default/*settings.php en /sites/default/*services.yml tussen de versies te vergelijken

1. Controleer of alle gebruikte modules en thema's de nieuwe Drupal versie ondersteunen
   - Zie de lijst onder modules
2. Controleer of er core-modules worden gebruikt die in de nieuwe versie niet worden ondersteund
   - Deze staan onder Beheer > Uitbreiding (/admin/modules) aangemerkt als (Deprecated)
   - Vaak kunnen deze modules worden vervangen door een nieuwe Drupal module
3. Geef schrijfrechten aan de volgende map en bestanden:
   - /sites/default (777)
   - /sites/default/*settings.php (666)
   - /sites/default/*services.yml (666)
4. Voer de stappen onder Updaten uit
5. Verwijder schrijfrechten van de volgende map en bestanden:
   - /sites/default (755)
   - /sites/default/*settings.php (644)
   - /sites/default/*services.yml (644)

## Updaten modules (automatisch)

Drupal kan modules automatisch updaten mits het systeem een ftp toegang heeft.

1. Maak een back-up van de bestanden en database
2. Ga naar Beheer > Instellingen > Ontwikkelingen > Onderhoudsmodus (/admin/config/development/maintenance)
3. Zet de website in Onderhoudsmodus
4. Ga naar Beheer > Uitbreiding > Bijwerken
5. Selecteer de bij te werken modules
6. Volg de aanwijzingen

## Updaten onderdelen (handmatig)

Soms is het niet mogelijk om toevoegingen aan de website automatisch te updaten. Dit geldt bijvoorbeeld voor het thema en de modules die speciaal voor het systeem zijn geschreven en voor libraries.

1. Download de nieuwe versie van de module of het thema
2. Maak een back-up van de bestanden en database
3. Ga naar Beheer > Instellingen > Ontwikkelingen > Onderhoudsmodus (/admin/config/development/maintenance)
4. Zet de website in Onderhoudsmodus
5. Verwijder de map van het onderdeel, bijvoorbeeld in /modules, /themes of /libraries
6. Upload de nieuwe map
7. Ga naar /update.php en volg de instructies
8. Haal de website uit Onderhoudsmodus
