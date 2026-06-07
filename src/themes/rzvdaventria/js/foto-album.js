/**
 * @file
 * Handler to add a notification to external links
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaLinkOutBehavior = {
      attach: function (context, settings) {
        once('foto-album', '.field--name-field-fotos').forEach(function (element) {
          $('img').each(function(){
            if($(this).parent().hasClass("field__item")) {
              $(this).wrap($('<a>',{href: $(this).attr('src'), class: 'album-item'}));
            };
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
