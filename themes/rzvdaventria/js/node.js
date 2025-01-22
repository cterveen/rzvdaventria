/**
 * @file
 * Handler to add a notification to external links
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaMainMenuBehavior = {
      attach: function (context, settings) {
        once('link-out', '.node__content').forEach(function (element) {
          $('a').each(function(){
            if ($(this).attr('href')) {
              if ($(this).attr('href').substring(0, 1) == "/") {
              }
              else if ($(this).attr('href').substring(0, 6).toLowerCase() == "mailto") {
              }
              else {
                $(this).addClass("is-external-link");
              }
            }
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
