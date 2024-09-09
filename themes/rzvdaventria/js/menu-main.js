/**
 * @file
 * Handler to double the menu-bar
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.myModuleBehavior = {
      attach: function (context, settings) {
        once('double-menu', '#block-rzvdaventria-hoofdnavigatie').forEach(function (element) {
          checkMenuIsDouble()

          $( window ).on( "resize", function() {
            checkMenuIsDouble()
          });

          function checkMenuIsDouble() {
            var barwidth = $( "#block-rzvdaventria-hoofdnavigatie" ).innerWidth();
            var menuwidth = 0;
            $( "a.sf-depth-1" ).each(function( index ) {
              menuwidth = menuwidth + $( this ).outerWidth();
            });
            if (barwidth < menuwidth) {
              $( ".sf-depth-1" ).addClass("is-double");
            }
            else {
              $( ".sf-depth-1" ).removeClass("is-double");
            }
          }
        });
      }
    };
  })(jQuery, Drupal, once);
})();
