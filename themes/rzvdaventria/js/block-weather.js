/**
 * @file
 * Alt text and title for the weather icons
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
              let alt = "";
              let title = "";
              let now = new Date ();
              let timestamp = val.timestamp;
              let value = val.value;
              let caption = val.caption;

              if (now > expires) {
                value = "X";
                timestamp = "--:--";
              }

              alt = val.label + ": " + value + val.unit + " (" + timestamp + "u)";
              if (caption != "") {
                alt += " " + caption;
              }

              title = val.label + " (" + timestamp + "u)";

              $(id).attr("alt", alt);
              $(id).attr("title", title);
            });
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
