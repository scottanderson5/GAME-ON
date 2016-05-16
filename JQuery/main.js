
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
    navText: ['<span  class="chevronL"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>', '<span class="chevronR"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>'],
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

//MODAL WORKS (5)

$(function(){

var appendthis =  ("<div class='modal-overlay5 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay5").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay5").click(function() {
  $(".modal-box5, .modal-overlay5").fadeOut(500, function() {
    $(".modal-overlay5").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box5").css({
    top: ($(window).height() - $(".modal-box5").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box5").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL WORKS (6)

$(function(){

var appendthis =  ("<div class='modal-overlay5 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay5").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay5").click(function() {
  $(".modal-box6, .modal-overlay5").fadeOut(500, function() {
    $(".modal-overlay5").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box6").css({
    top: ($(window).height() - $(".modal-box6").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box6").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL WORKS (7)

$(function(){

var appendthis =  ("<div class='modal-overlay5 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay5").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay5").click(function() {
  $(".modal-box7, .modal-overlay5").fadeOut(500, function() {
    $(".modal-overlay5").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box7").css({
    top: ($(window).height() - $(".modal-box7").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box7").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL WORKS (8)

$(function(){

var appendthis =  ("<div class='modal-overlay5 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay5").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay5").click(function() {
  $(".modal-box8, .modal-overlay5").fadeOut(500, function() {
    $(".modal-overlay5").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box8").css({
    top: ($(window).height() - $(".modal-box8").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box8").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

//MODAL WORKS (9)

$(function(){

var appendthis =  ("<div class='modal-overlay5 js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay5").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay5").click(function() {
  $(".modal-box9, .modal-overlay5").fadeOut(500, function() {
    $(".modal-overlay5").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box9").css({
    top: ($(window).height() - $(".modal-box9").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box9").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});


//STARS

 $(function(){
    $('.container').rating();
});

 
