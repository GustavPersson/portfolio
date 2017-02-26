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


  $('.preview').click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    var target = $(this).children('.target').data('target');

    $('.preview-container').hide();
    $('.project-container.' + target).addClass('displayed');
    $('.content').slideDown(600).addClass('displayed');
    $('.projects.section').addClass('displayed');
    $('.close').show();
  });

  $('.close').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $('.project-container.displayed').removeClass('displayed');
    $('.content.displayed').slideUp(400).removeClass('displayed');
    $('.projects.section').removeClass('displayed');
    $('.preview-container').show();
    $('.first').removeClass('displayed');
    $(this).hide();
    window.setTimeout(function() {
      $.fn.fullpage.reBuild();
    }, 600);
  });
});
