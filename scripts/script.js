$(document).ready(function() {
  console.log("Document ready");

  $('.wrapper').fullpage({
    normalScrollElements: '.projects .right'
  });

  $('.slide').click(function(event) {
    console.log(this);
    $(this).find('.content').show();
  });

});
