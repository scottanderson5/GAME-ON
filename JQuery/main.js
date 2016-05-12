
//Slide toggle function for the nav in the header.
$('.header-menu').click(function(){
  //What is appearing and how fast
  $('.header-nav').slideToggle(500);
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })




// The selector will match all input controls of type :checkbox on review and request pages
// And attach a click event handler 
$("input:checkbox").on('click', function() {
  // In the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    //Tthe name of the box is retrieved using the .attr() method
    // As it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // The checked state of the group/box on the other hand will change
    // And the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});


//MODAL

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});






