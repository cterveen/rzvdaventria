/**
 * @file
 * Handler for adding colorbox to foto albums
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaLinkOutBehavior = {
      attach: function (context, settings) {
        once('foto-album', '.field--name-field-fotos').forEach(function (element) {
          /* Change each foto into a link to itself */
          $('img').each(function(){
            if($(this).parent().hasClass("field__item")) {
              $(this).wrap($('<a>',{href: $(this).attr('src'), class: 'rzvdaventria-album-foto'}));
            };
          });
          
          /* Change the link to a colorbox item */
          $('a').each(function(){
            if ($(this).hasClass('rzvdaventria-album-foto')) {
              $(this).colorbox(
                {
                  opacity: 0.75,
                  rel: 'group1',
                  maxWidth: '95%',
                  maxHeight:'95%',
                  current: 'Foto {current} van {total}',
                  previous: 'Vorige',
                  next: 'Volgende',
                  close: 'Sluiten',
                  xhrError: 'Foto kon niet worden geladen.',
                  imgError: 'Foto kon niet worden geladen.'
                }
              );
            }
          });

          /* Keyboard navigation */
          $('html').keydown(function(event){
            if(event.which == 37) {
              $.colorbox.prev();
            }
            if(event.which == 39) {
              $.colorbox.next();
            }
            if(event.which == 27) {
              $.colorbox.close();
            }
          });
        });
      }
    };
  })(jQuery, Drupal, once);
})();
