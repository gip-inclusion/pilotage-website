// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');
var jwt = require('jsonwebtoken');

// Vars
var stickyNav = $('#header');
stickyNav.data('top', stickyNav.offset().top);

// Initialisation
$(window).on('load', function() {
  //console.log('load');
});

// Re-initialisation au resize
$(window).on('resize orientationchange', function() {
  //console.log('resize');
});

$(window).on('scroll', function() {
  //console.log('scroll');
});

$('[data-toggle=burger]').on('click tap', function(e) {
  e.preventDefault();
  stickyNav.toggleClass('is-opened');
});

$('.track-click-zapier button').on('click tap', function() {
  var thisButton = $(this);
  var answer = $(this).data('answer');
  var parent = $(this).parent('.track-click-zapier');
  var metabase_name = parent.data('metabase-name');
  var target = 'https://hooks.zapier.com/hooks/catch/8155879/oq7l1h1';

  $.post( target, { answer: answer, metabase_name: metabase_name })
  .done(function( data ) {
    thisButton.children('img').show();
    parent.addClass('disabled');
  });
});
