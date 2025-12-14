## Project title

Daventria Drupal 10.x Theme

## Description

A Drupal 10.x or 11.x Theme for the Daventria website. The Theme is being developed as a theme for a new website of a rowing club in the Netherlands. The aims for the project is to build a theme (website) that is easy to maintain, responsive, accessible and privacy friendly.

The project can be considered stable, it's in use on a live website (https://www.daventria.com/). The core language for the documentation is Dutch. Some of the bug reports, and most of the programming will be in English though. Internationalisation and localisation are not available. The theme is made for left-to-right languages.

This project is under active development.

## Installation

Make a minimal install of Drupal.
Download plotly.js and add it to /libraries/plotly
Copy all files in /src to the Drupal main folder.  
Go to Admin > Appearance (admin/appearance).  
Find the rzvdaventria theme and click install and make default.  
Select Claro as Administration theme.
Flush the cache (Admin > Configuration > Development > Performance (/admin/config/development/performance)

Configure the Drupal system according to the documents in help. The recommended order is:

- webcam_en_weer.md
- modules.md
- instellingen.md
- inhoudstypen.md
- blokken.md

## Update

Remove the following directories:

- help
- themes/rzvdaventria
- webcam

Copy all files in /src to the Drupal main folder.
Flush the cache (Admin > Configuration > Development > Performance (/admin/config/development/performance)

## Use

Help for configuration of modules, data types, content types, views etc. is available in /help

## Credits

Written by Christiaan ter Veen https://www.rork.nl/  
Design by Niels den Boer https://hetvormburo.nl/

Drupal base theme: Starterkit / Stable9  
Font: Lato https://www.latofonts.com/  
Graphs: Plotly JavaScript library https://plotly.com/javascript/  
Icons: Arturo Wibaba https://akaricons.com/  
Map(s): OpenStreetMap: https://www.openstreetmap.org/  
Favicon: derivative of Wikimedia commons https://commons.wikimedia.org/wiki/File:Daventriablad.jpg  

## License

The rzvdaventria theme is licensed under the GNU General Public License, version 2 or later. That means you are free to download, reuse, modify, and distribute any non-redistributed files in this repository under the terms of either the GPL version 2 or version 3, and to run this module in combination with any code with any license that is compatible with either versions 2 or 3.
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

Lato is redistributed under the SIL Open Font License 1.1

