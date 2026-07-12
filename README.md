## Project title

Daventria Drupal 10.x Theme

## Description

A Drupal 10.x or 11.x Theme for the Daventria website. The Theme was developed as a theme for a new website of a rowing club in the Netherlands. The aims for the project is to build a theme (website) that is easy to maintain, responsive, accessible and privacy friendly.

The project can be considered stable, it's in use on a live website (https://www.daventria.com/). The core language for the documentation is Dutch. Some of the bug reports, and most of the programming will be in English but may be mixed with Dutch terminorlogy. Internationalisation and localisation are not available. The theme is made for left-to-right languages.

This project is under active development.

## Installation

Make a standard install of Drupal.  
Configure the Drupal system according to the documents in /help/nl. The recommended order is:  
- 10 Modules.md
- 11 Instellingen.md
- 12 Inhoudstypen.md
- 13 Blokken.md
- 14 Personen.md
- 15 Menu.md
The website is intended to show recent water and weather data. For the necessary files see 23 Water en weegegevens.md
Copy all files in /src to the Drupal main folder.  
Go to Admin > Appearance (admin/appearance).  
Find the rzvdaventria theme and click install and make default.  
Select Claro as Administration theme.  
Flush the cache (Admin > Configuration > Development > Performance (/admin/config/development/performance)

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

Drupal base theme: Starterkit / Stable9 https://www.drupal.org/  
Font: Lato https://www.latofonts.com/  
Graphs: Plotly JavaScript library https://plotly.com/javascript/  
Colorbox: Fork by TurbojetTechnologies https://github.com/TurbojetTechnologies/colorbox/  
Icons: Arturo Wibawa https://akaricons.com/  
Map(s): OpenStreetMap: https://www.openstreetmap.org/  
Favicon: derivative of Wikimedia commons https://commons.wikimedia.org/wiki/File:Daventriablad.jpg  

## License

The rzvdaventria theme is licensed under the GNU General Public License, version 2 or later. That means you are free to download, reuse, modify, and distribute any non-redistributed files in this repository under the terms of either the GPL version 2 or version 3, and to run this module in combination with any code with any license that is compatible with either versions 2 or 3.
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

Lato is redistributed under the SIL Open Font License 1.1
