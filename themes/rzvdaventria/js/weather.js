/**
 * @file
 * Alt-text for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWeatherBehavior = {
      attach: function (context, settings) {
        once('alt-weather', '#block-rzvdaventria-weerenwaterstanden').forEach(function (element) {
          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/weerdata.json", function(data) {
            $.each(data, function(key, val) {
              let expires = new Date(Date.parse(val.expires));
              let id = "#" + key;
              let label = "";
              let now = new Date ();
              let timestamp = val.timestamp;
              let value = val.value;

              if (now > expires) {
                value = "X";
                timestamp = "--:--";
              }

              label = val.label + ": " + value + val.unit + " (" + timestamp + "u)";

              $(id).attr("alt", label);
            });
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
