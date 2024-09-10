/**
 * @file
 * Handler to double the menu-bar
 */
(() => {
    (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaMainMenuBehavior = {
      attach: function (context, settings) {
        once('double-menu', '#block-rzvdaventria-hoofdnavigatie').forEach(function (element) {
          rzvdaventriaMainMenuIsDouble()

          $( window ).on( "resize", function() {
            rzvdaventriaMainMenuIsDouble()
          });

          /**
           * @function rzvdaventriaMainMenuIsDouble
           *
           * Determines the width of the menubar and top level menu items. If
           * the width of the items is bigger than that of the menubar add
           * state is-double to top level li and a elements.
           *
           * Removes state is-double if the width of the document is less than
           * 600px as the menu is in accordion state.
           *
           * @returns {boolean} state is-double
           */
          function rzvdaventriaMainMenuIsDouble() {
            let barWidth = $( "#block-rzvdaventria-hoofdnavigatie" ).innerWidth();
            let menuWidth = 0;

            // State shouldn't be is-double in accordeon menu.
            if ($( ".layout-container" ).outerWidth() < 600) {
              $( ".sf-depth-1" ).removeClass("is-double");
              return false;
            }

            $( "li.sf-depth-1" ).each(function( index ) {
              menuWidth = menuWidth + $( this ).outerWidth();
            });
            if (barWidth < menuWidth) {
              $( ".sf-depth-1" ).addClass("is-double");
              return true;
            }
            else {
              $( ".sf-depth-1" ).removeClass("is-double");
              return false;
            }
          }
        });
      }
    };
  })(jQuery, Drupal, once);
})();
