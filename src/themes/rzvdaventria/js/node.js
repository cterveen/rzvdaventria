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
              if ($(this).attr('href').substring(0, 1) == "/" || $(this).attr('href').substring(0, 26) == "https://www.daventria.com/") {
              }
              else if ($(this).attr('href').substring(0, 6).toLowerCase() == "mailto") {
              }
              else if ($(this).attr('href').substring(0, 39).toLowerCase() == "https://rzvdaventria-site.e-captain.nl/") {
                $(this).addClass("is-mijn-daventria-link");
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
