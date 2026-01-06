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
            let id = "#webcam_haven";
            let lastModified = new Date(Date.parse(xhr.getResponseHeader('Last-Modified')));
            let expires = new Date(lastModified.getTime() + (60 * 60 * 1000));
            let now = new Date();
            let label = "Webcam vlot (--.--u)";

            if (now.getTime() < expires.getTime()) {
              label = "Webcam vlot (" + lastModified.getHours() + ":" + lastModified.getMinutes() + "u)";
            }

            $( id ).attr( "alt", label );
            $( id ).attr( "title", label );
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
