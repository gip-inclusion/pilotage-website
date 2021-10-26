// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');
var jwt = require('jsonwebtoken');

// Vars
var METABASE_SITE_URL = 'https://stats.inclusion.beta.gouv.fr';
var METABASE_SECRET_KEY = 'df1fe706c021c17910027c779f42099fe7acd402cc1e039b36a04d9c72533ad3';
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


// Load Metabase Dashboard
window.loadMetabase = function(iframeId, iframeTitle) {
  var payload = {
    resource: { dashboard: iframeId },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
  };
  var token = jwt.sign(payload, METABASE_SECRET_KEY);
  var iframeUrl = METABASE_SITE_URL + '/embed/dashboard/' + token + '#bordered=true&titled=true';

  $('#embedMetabase').html('<iframe src='+iframeUrl+' title="'+iframeTitle+'" width="100%" height="1500" frameborder="0" allowtransparency></iframe>');
};
