$(document).ready(function() {
  $('.wrapper').fullpage({
    normalScrollElements: '.projects .right, .project',
    verticalCentered: false,
    scrollBar: true,
    autoScrolling: false,
    responsiveWidth: 1024,
    touchSensitivity: 25,
    normalScrollElementTouchThreshold: 25,
    anchors: ['home', 'project', 'about-me', 'end']
  });

  $('.slide').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).addClass('displayed');
    $('.content').slideDown(600).addClass('displayed');
    $('.projects.section').addClass('displayed');
    $('.close').show();
    window.setTimeout(function() {
      $.fn.fullpage.reBuild();
    }, 600);

  });

  $('.close').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $('.slide.displayed').removeClass('displayed');
    $('.content.displayed').slideUp(400).removeClass('displayed');
    $('.projects.section').removeClass('displayed');
    $(this).hide();
    window.setTimeout(function() {
      $.fn.fullpage.reBuild();
    }, 600);
  });
});
