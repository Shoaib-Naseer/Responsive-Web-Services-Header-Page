$(document).ready(function () {
  if ($(window).scrollTop() > 30) {
    $('nav').css({
      'background-color': '#6C5CE7',
      'box-shadow': '0 0.2rem 0.5rem rgba(0,0,0,.4)',
    });
  } else {
    $('nav').css({
      'background-color': 'none',
      'box-shadow': 'none',
    });
  }

  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.menu').toggleClass('menu-toggle');
  });

  $(window).on('load scroll', function () {
    $('.fa-bars').removeClass('fa-times');
    $('.menu').removeClass('menu-toggle');
  });
});
