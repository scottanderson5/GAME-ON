
//Slide toggle function for the nav in the header.
$('.header-menu').click(function(){
  //What is appearing and how fast
  $('.header-nav').slideToggle(500);
});



//OWL CAROUSEL PLUGIN
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


//MODAL REQUEST

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

//MODAL TRACK (2)

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
  $(".modal-box2, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box2").css({
    top: ($(window).height() - $(".modal-box2").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box2").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL RETURN (3)

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
  $(".modal-box3, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box3").css({
    top: ($(window).height() - $(".modal-box3").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box3").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL REVIEW (4)

$(function(){

var appendthis =  ("<div class='modal-overlay4 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay4").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay4").click(function() {
  $(".modal-box4, .modal-overlay4").fadeOut(500, function() {
    $(".modal-overlay4").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box4").css({
    top: ($(window).height() - $(".modal-box4").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box4").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});



//STARS

 $(function(){
    $('.container').rating();
});

 
