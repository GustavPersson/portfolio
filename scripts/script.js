$(document).ready(function() {
  $('.home-button').click(function(event) {
    $.scrollTo($('.splash'), 450, {
      interrupt: true
    });
  });


  $('.project-button').click(function(event) {
    $.scrollTo($('.projects'), 450, {
      interrupt: true
    });
  });


  $('.about-me-button').click(function(event) {
    $.scrollTo($('.about'), 450, {
      interrupt: true
    });
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
  });
});
