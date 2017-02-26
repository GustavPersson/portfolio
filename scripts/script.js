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

    $.scrollTo($('.projects'), 100, {
      interrupt: false
    });

    var projectElement = $('.projects .right'),
        height = projectElement.height();


    if(window.outerWidth > 768) {          
      projectElement.bind('mousewheel', function(e, d) {
        var scrollHeight = $(e.currentTarget)[0].scrollHeight;
        if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
          e.preventDefault();
        }
      });
    }

  });

  $('.close').click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    var projectElement = $('.projects .right');

    projectElement.unbind('mousewheel');

    $('.project-container.displayed').removeClass('displayed');
    $('.content.displayed').slideUp(400).removeClass('displayed');
    $('.projects.section').removeClass('displayed');
    $('.preview-container').show();
    $('.first').removeClass('displayed');
    $(this).hide();
  });
});
