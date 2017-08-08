var TSOS = TSOS || {};

(function(window, $, APP) {

  // Animation Helpers
  // ---------------------------------------------
  var _raf   = window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               // IE Fallback, you can even fallback to onscroll
               function(callback){ window.setTimeout(callback, 1000/60) };

  var _transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      _animationEnd = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';

  // Easing
  // ---------------------------------------------
  $.extend( jQuery.easing,
  {
    easeOutExpo: function (x, t, b, c, d) {
      return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
  });

  // Helpers
  // ---------------------------------------------
  APP.helpers = {

    initComponents : function ($elem) {
      $elem.find('[data-js-component]').each(function() {
        var $this         = $(this),
            components = $this.data('js-component').split(' '),
            componentName,
            component,
            i = 0, len = components.length;

        for (i, len; i < len; i++)  {

          componentName = components[i];

          if (APP.pageComponents.hasOwnProperty(componentName)) {
            component = APP.pageComponents[componentName];
            if (typeof component === 'function') {
              component($this, componentName);
            } else if (typeof component === 'object') {
              if (component.hasOwnProperty('init')) {
                component.init($this, componentName);
              } else {
                console.log('Component: "' + componentName + '" must contain an init method.');
              }
            }
          } else {
            console.log('Component: "' + componentName + '" not found on the ' + APP + ' pageComponents object.');
          }
        }
      });
    },

    breakpoint : function () {
      var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
      return breakpoint;
    }
  };

  // Page Components
  // <elem data-js-component="<component name>">
  // ---------------------------------------------
  APP.pageComponents = {

    carousel : function ($elem) {
      $elem.slick({
        autoplay: true,
        autoplaySpeed: 3500,
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    },

    teamsExpandable : function ($elem) {
      var $expand = $elem.find('.teams__button--expand'),
          $collapse = $elem.find('.teams__button--collapse'),
          $header = $elem.find('.teams__header'),
          $content = $elem.find('.teams__content'),
          $buttons = $elem.find('.teams__button');

      $expand.on('click', function () {
        $header.hide();
        $content.show();
      });

      $collapse.on('click', function () {
        $content.hide();
        $header.show();
      })

      $(window).on('resize', function () {
        if( $buttons.css('display', 'none') ) {
          $.each([$buttons, $content, $header ], function () {
            this.removeAttr('style');
          });
        }
      });
    },

    safariFix : function ($elem) {
      var is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
      if (is_safari) {
        $elem.addClass('_safari_border')
      }
    },

    postProcess : function ($elem) {
      var $video = $elem.find('iframe');
      $video.wrap('<p></p>').wrap('<div class="iframe-wrap"></div>');
    },

    pageHeader : function ($elem) {
      var $open = $elem.find('.js--dropdown__open'),
          $close = $elem.find('.js--dropdown__close'),
          $dropdown = $elem.find('.pageHeader__dropdown'),
          $nav = $elem.find('.mainNav'),
          $postnav = $elem.find('.js--postNav');

      if ($nav.find('li').length <= 1) {
        $.each([$nav, $open], function () {
          this.addClass('_is_hidden');
        });
      }

      function moveNav () {
        $breakpoint = APP.helpers.breakpoint();
        if ( $postnav.length ) {
          if ( $breakpoint  == 'desktop' || $breakpoint  == 'desktop-large' ) {
            $postnav.insertAfter('.js--preNav');
          } else {
            $postnav.insertAfter('.mainNav');
          }
        }
      }

      function clearDropdown () {
        $breakpoint = APP.helpers.breakpoint();
        if ( $breakpoint  == 'desktop' ) {
          $.each([$dropdown, $open, $close, $nav], function () {
            this.removeAttr('style');
          });

          $elem.removeClass('_nav_open');
        }
      }

      $open.on('click', function() {
        $dropdown.slideDown();
        $open.hide();
        $close.show();
        $elem.addClass('_nav_open');
      });

      $close.on('click', function() {
        $dropdown.slideUp();
        $close.hide();
        $open.show();
        $elem.removeClass('_nav_open');
      });

      moveNav();

      $(window).on('resize', function () {
        moveNav();
        clearDropdown();
      });
    }

  };

  // Document Ready
  // -----------------------------
  $(function() {
    APP.helpers.initComponents($('body'));
  });
}(window, jQuery, TSOS, undefined));
