/**
 * @file
 * Alt-text for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWeatherBehavior = {
      attach: function (context, settings) {
        once('alt-weather', '#block-rzvdaventria-weerenwaterstanden').forEach(function (element) {
          $.getJSON( "http://192.168.2.6/~internetcie/webcam/data/weerdata.json", function( data ) {
            $.each( data, function ( key, val ) {
              let timestamp = new String( val.timestamp );
              let value = new String( val.value );
              let now = new Date ();
              let expires = new Date( Date.parse( val.expires ) );
              let label = "";
              let id = "#" + key;

              if (now > expires ) {
                value = "X";
                timestamp = "--:--";
              }

              value = value.replace(".", ",");
              label = val.label + ": " + value + val.unit + " (" + timestamp + "u)";

              $( id ).attr( "alt", label );
            });
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
