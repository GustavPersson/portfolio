$(document).ready(function() {
  console.log("Document ready");

  $("#project-carousel").owlCarousel({
    navigation: true,
    pagination: false,
    navigationText: ["<",">"],
    autoHeight: true,
    rewindNav: true,
    scrollPerPage: true,
  });

  $("#header-carousel").owlCarousel({
    singleItem: true,
    autoHeight: true,
    itemsScaleUp: true
  });

  $(".menu a").click(function(e) {
    e.preventDefault(); //gör inte defultgrejen, låter bli att göra det du klickar på
    var element = $(e.currentTarget);
    var target = $(element.attr("href"));
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1500);
  });

});
