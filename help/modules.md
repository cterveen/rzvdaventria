## Titel

Daventria Drupal 10.x Theme help - modules

## Beschrijving

Een overzicht van de te installeren modules, inhoudstypen en libraries voor de website

## Core modules

- Block content: Om blokken aan te kunnen maken.
- Breakpoint: nodig voor toolbar.
- CKEditor5: WYSIWYG editor
- Custom menu links: nodig voor Menu UI
- Field UI: beheer van velden van inhoudstypen
- Help
- Media: beheer van afbeeldingen etc.
- Media library: Beheer van afbeeldingen etc.
- Menu UI: aanpassen van menu's.
- Path: aanpassen van URL's naar nette URL's (aliassen).
- Search: zoeken.
- Taxonomy: taggen van nieuwsberichten.
- Text Editor: nodig voor CKEditor5.
- Toolbar: admin menu toolbar.
- Views: nodig voor Media Library en Views UI.
- Views UI: aanmaken van lijsten vanuit inhoudstypen.

## Drupal modules

- Book: Boekstuctuur voor het Gele Boekje
  - https://www.drupal.org/project/book
- Book Export RTF
  - https://github.com/cterveen/bookexportrtf-9.x
- Pathauto: automatisch aanmaken van alliassen voor nieuwe inhoud.
  - https://www.drupal.org/project/pathauto
- Token: nodig voor Pathauto.
  - https://www.drupal.org/project/token
- Superfish
  - https://www.drupal.org/project/superfish
  
## Eigen modules

## Core datatypen

- Datetime
- Datetime Range
- Image
- Link

## Libraries

- Drupal Superfish
  - https://github.com/LOBsTerr/drupal-superfish/releases
  - Opslaan in /libaries/drupal-superfish
  - Nodig voor de Superfish module
- Lato fonts
  - https://www.latofonts.com/
  - Onderdeel van het thema
  - Opslaan in /thems/rzvdavenria/fonts/Lato
    - LatoLatin-Bold.woff2
    - LatoLatin-BoldItalic.woff2
    - LatoLatin-Italic.woff2
    - LatoLatin-Regular.woff2
  - Font voor de website
- Schepp's CSS Parser
  - https://github.com/Schepp/CSS-Parser
  - parser.php opslaan in /libraries/schepp-css-parser
  - Nodig voor bookexportrtf
- Simple HTML DOM
  - https://simplehtmldom.sourceforge.io/
  - simple_html_dom.php opslaan in /libraries/simple_html_dom
  - Nodig voor bookexportrtf
- Plotly
  - https://plotly.com/javascript/
  - Onderdeel van het thema
  - Opslaan in /themes/rzvdaventria/js/plotly/
  - Nodig voor de weergrafieken
