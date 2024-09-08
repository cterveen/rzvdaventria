/**
 * @file
 * Alt-text for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.myModuleBehavior = {
      attach: function (context, settings) {
        once('alt-weather', '#block-rzvdaventria-weerenwaterstanden').forEach(function (element) {
          $.getJSON( "http://192.168.2.6/~internetcie/webcam/data/weerdata.json", function( data ) {
            $.each( data, function ( key, val ) {
              var timestamp = new String( val.timestamp );
              var value = new String( val.value );
                  value = value.replace(".", ",");

              var now = new Date ();
              var expires = new Date( Date.parse( val.expires ) );
              if (now > expires ) {
                value = "X";
                timestamp = "--:--";
              }

              var label = val.label + ": " + value + val.unit + " (" + timestamp + "u)";
              var id = "#" + key;

              $( id ).attr( "alt", label );
            });
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
