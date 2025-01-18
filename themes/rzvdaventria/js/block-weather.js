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
              if (key != "windkracht" & key != "temperatuur") {
                return true;
              }
              let expires = new Date();
              let id = "#" + key;
              let alt = "";
              let title = "";
              let now = new Date ();
              let timestamp = val.timestamp;
              let value = val.value;
              let caption = val.caption;

              /* temporary workaround for wind and expiration date */
              if (key == "windkracht") {
                val.unit = "bft";
                if (val.values[99][0].substr(-3, 3) == "UTC") {
                  let expirydate = val.values[99][0];
                  val.values[99][0] = expirydate.substr(6, 4) + "-" + expirydate.substr(3, 2) + "-" + expirydate.substr(0,2) + "T" + expirydate.substr(11, 8) + ".000Z";
                }
                expires = new Date(Date.parse(val.values[99][0]));
                timestamp = val.values[99][1];
                value = val.values[99][2].toFixed(1);
              }
              else {
                if (val.expires.substr(-3, 3) == "UTC") {
                  let expirydate = val.expires;
                  val.expires = expirydate.substr(6, 4) + "-" + expirydate.substr(3, 2) + "-" + expirydate.substr(0,2) + "T" + expirydate.substr(11, 8) + ".000Z";
                }
                expires = new Date(Date.parse(val.expires));
              }

              if (now.getTime() > expires.getTime()) {
                value = "X";
                timestamp = "--:--";
                caption = "";
              }

              alt = val.label + ": " + value + " " + val.unit + " (" + timestamp + "u)";
              if (caption != "") {
                alt += " " + caption;
              }

              title = val.label + " (" + timestamp + "u)";

              $(id).attr("alt", alt);
              $(id).attr("title", title);
            });
          });

          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/ijsselpeil_deventer.json", function(data) {
            let expires = new Date(Date.parse(data.actueel.expires));
            let id = "#ijsselpeil";
            let alt = "";
            let title = "";
            let now = new Date ();
            let timestamp = data.actueel.timestamp;
            let value = data.actueel.waarde.toFixed(2);
            let caption = data.actueel.caption;

            if (now.getTime() > expires.getTime()) {
              value = "X";
              timestamp = "--:--";
              caption = "";
            }

            alt = "IJsselpeil Deventer: " + value + " " + data.unit + " (" + timestamp + "u)";
            if (caption != "") {
              alt += " " + caption;
            }

            title = "IJsselpeil Deventer (" + timestamp + "u)";

            $(id).attr("alt", alt);
            $(id).attr("title", title);
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
