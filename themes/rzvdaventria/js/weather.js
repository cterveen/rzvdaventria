(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      once('alt-weather', '#block-rzvdaventria-weerenwaterstanden').forEach(function (element) {
        // Apply the myCustomBehaviour effect to the elements only once.
        $.getJSON( "http://192.168.2.6/~internetcie/webcam/data/weerdata.json", function( data ) {
          $.each( data, function ( key, val ) {
            var value = new String( val.value );
                value = value.replace(".", ",");

            var now = new Date ();
            var expires = new Date( Date.parse( val.expires ) );
            if (now > expires ) {
              value = "X";
              hour = "--";
              minutes = "--";
            }

            var label = val.label + ": " + value + val.unit + " (" + val.timestamp + "u)";
            var id = "#" + key;

            $( id ).attr( "alt", label );
          });
        });
      });
    }
  };
})(jQuery, Drupal, once);
