$(document).ready(function() {
  $('.wrapper').fullpage({
    normalScrollElements: '.projects .right, .parallax',
    verticalCentered: false,
    scrollBar: true,
    autoScrolling: true,
    anchors: ['home', 'about-me', 'project', 'end']
  });

  $('.slide').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).addClass('displayed');
    $(this).find('.content').slideDown(600).addClass('displayed');
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
