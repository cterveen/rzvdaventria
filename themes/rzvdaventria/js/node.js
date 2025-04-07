/**
 * @file
 * Handler to add a notification to external links
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaLinkOutBehavior = {
      attach: function (context, settings) {
        once('link-out', '#block-rzvdaventria-hoofdnavigatie').forEach(function (element) {
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
