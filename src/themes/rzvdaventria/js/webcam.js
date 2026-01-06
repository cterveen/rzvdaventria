/**
 * @file
 * Alt text and title for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWebcamBehavior = {
      attach: function (context, settings) {
        once('alt-webcam', '#block-rzvdaventria-webcammetlinknaardeweerpagina').forEach(function (element) {
          $.get(window.location.origin + "/webcam/data/webcam_haven.jpg", function( data, status, xhr) {
            let lastModified = new Date(Date.parse(xhr.getResponseHeader('Last-Modified')));
            let expires = new Date(lastModified.getTime() + (60 * 60 * 1000));
            let now = new Date();
            let label = "Webcam vlot (--.--u)";

            if (now.getTime() < expires.getTime()) {
              label = "Webcam vlot (" + String(lastModified.getHours()).padStart(2, "0") + ":" + String(lastModified.getMinutes()).padStart(2, "0") + "u)";
            }

            $( "#webcam_haven" ).attr( "alt", label );
            $( "#webcam_haven" ).attr( "title", label );
            $( "#webcam_haven2" ).attr( "alt", label );
            $( "#webcam_haven2" ).attr( "title", label );
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
