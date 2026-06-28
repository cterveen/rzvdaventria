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
              let href = $(this).attr('href');
               if (href.substring(0, 39).toLowerCase() == "https://rzvdaventria-site.e-captain.nl/") {
                $(this).addClass("is-mijn-daventria-link");
              }
              else if ((href.substr(0, 7).toLowerCase() == "http://" || href.substr(0, 8).toLowerCase() == "https://") & href.substring(0, 26).toLowerCase() != "https://www.daventria.com/") {
                $(this).addClass("is-external-link");
              }
            }
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
