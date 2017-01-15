$(document).ready(function() {
  console.log("Document ready");

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
    $(this).find('.content').slideDown(600).addClass('displayed');
  });

  $('.close').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).parents('.content').slideUp(400).removeClass('displayed');
  })

  $('.parallax').enllax();

});
