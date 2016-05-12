
//Slide toggle function for the nav in the header.
$('.header-menu').click(function(){
  //What is appearing and how fast
  $('.header-nav').slideToggle(500);
});


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


