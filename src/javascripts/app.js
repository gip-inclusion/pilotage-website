// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');
var jwt = require('jsonwebtoken');

// Vars
var stickyNav = $('#header');
const rootStyle = getComputedStyle(document.body);
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
  stickyNav.data('top', stickyNav.offset().top);
  stickyNav.toggleClass('is-opened');
}).on('keypress', function(e) {
  if ( e.which == 13 ) {
    e.preventDefault();
    stickyNav.data('top', stickyNav.offset().top);
    stickyNav.toggleClass('is-opened');
 }
});

$('.input-group .form-control').on('focus', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').find('.input-group-text').css('border-color', rootStyle.getPropertyValue('--gray-800'));
});
$('.input-group .form-control').on('blur', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').find('.input-group-text').css('border-color', rootStyle.getPropertyValue('--gray-600'));
});


$('.track-click-zapier button').on('click tap', function() {
  var thisButton = $(this);
  var answer = $(this).data('answer');
  var parent = $(this).parent('.track-click-zapier');
  var metabase_name = parent.data('metabase-name');
  var target = 'https://hooks.zapier.com/hooks/catch/8155879/oq7l1h1';

  $.post( target, { answer: answer, metabase_name: metabase_name })
  .done(function( data ) {
    thisButton.children('img').css('display', 'inline-block');
    parent.addClass('disabled');
  });
});
