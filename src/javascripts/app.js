// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');
let jwt = require('jsonwebtoken');

// Vars
const burgerNav = $('.s-header');
const rootStyle = getComputedStyle(document.body);
let breakpointXL = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xl');

// Initialisation
$(window).on('load', function() {
  postHeaderNavDisplay();
});

// Re-initialisation au resize
$(window).on('resize', function() {
  postHeaderNavDisplay();
  if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
    burgerNav.removeClass('is-opened');
  }
});

$(window).on('scroll', function() {
  // Scroll
});

function postHeaderNavDisplay() {
  let postHeaderNav = $('.s-postheader');

  if (postHeaderNav.length) {
    let thisNavTopOffset = postHeaderNav.offset().top;
    let lastScrollTop = 0;

    $(window).on('scroll', function() {
      let $window = $(window);
      let windowScrollTop = $window.scrollTop();

      if (windowScrollTop >= thisNavTopOffset) {
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          $('main').css('paddingTop', '58px');
        }
        if (lastScrollTop > windowScrollTop) {
          postHeaderNav.removeClass('it-scrolldown').addClass('it-scrollup');
        } else {
          postHeaderNav.removeClass('it-scrollup').addClass('it-scrolldown');
        }
      } else {
        postHeaderNav.removeClass('it-scrollup it-scrolldown');
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          $('main').css('paddingTop', '0px');
        }
      }
      lastScrollTop = windowScrollTop;
    });
  }
}

$('[data-toggle=burger]')
  .on('click tap', function(e) {
    e.preventDefault();
    burgerNav.toggleClass('is-opened');
  })
  .on('keypress', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      burgerNav.toggleClass('is-opened');
    }
  });

$('.input-group .form-control')
  .on('focus', function(e) {
    e.preventDefault();
    $(this).parent('.input-group').toggleClass('has-focus');
  })
  .on('blur', function(e) {
    e.preventDefault();
    $(this).parent('.input-group').toggleClass('has-focus');
  });

$('body')
  .on('keydown input', 'textarea[data-expandable]', function () {
    this.style.removeProperty('height');
    this.style.height = this.scrollHeight + 2 + 'px';
  })
  .on('mousedown focus', 'textarea[data-expandable]', function () {
    this.style.removeProperty('height');
    this.style.height = this.scrollHeight + 2 + 'px';
  });

$('.track-click-zapier button').on('click tap', function() {
  var thisButton = $(this);
  var answer = $(this).data('answer');
  var parent = $(this).parent('.track-click-zapier');
  var metabase_name = parent.data('metabase-name');
  var target = 'https://hooks.zapier.com/hooks/catch/8155879/oq7l1h1';

  $.post(target, { answer: answer, metabase_name: metabase_name }).done(
    function(data) {
      thisButton.children('img').css('display', 'inline-block');
      parent.addClass('disabled');
    }
  );
});
