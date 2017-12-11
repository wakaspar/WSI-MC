// This is where the JavaScript for the Williams-Sonoma Markup Challege for
// Will Kaspar will live.  This version utilizes jQuery.  It will run some of
// the actions on the page, switching images, and expandables-collapsables.

$(document).ready(function(){

  $('.add-to-cart-modal').hide();

  /* NOTE: Grabs quantity from input field and builds #items-added message */
  function displayItemsAdded(){
    var howMany = $('#quantity').val();
    if (howMany == 0) {
      $('.items-added').text(`Error: Please select a quantity.`);
      $('.modal-greeting').text(`Uh-oh.  Try again!`);
    } else if (howMany > 1) {
      $('.items-added').text(`You have added ${howMany} items to your cart.`);
    } else {
      $('.items-added').text(`You have added ${howMany} item to your cart.`);
    }
    $('.items-added').css('display', 'inline');
  };

  /* NOTE: Displays quantity being added on #add-to-cart button press,
  in a message and on a modal */
  $('#add-to-cart').on('click', function(){
    displayItemsAdded();
    $('.add-to-cart-modal').show();
    $('.modal-overlay').css('display', 'block');
  });

  $('#button-close-modal').on('click', function(){
    $('.add-to-cart-modal').hide();
    $('.modal-overlay').css('display', 'none');
  })

  /* NOTE: Switches #hero image with a selected .sidekick */
  $('.sidekick').on('click', function(){
    var oldSidekick = $('.sidekick.active').removeClass('active');
    var newHero = $(this).attr('hero');
    $(this).addClass('active');
    $('#hero').attr('src', newHero);
  });

  /* NOTE: Toggles expandable-collapsable sections */
  $('#accordion .acc-box').on('click', function(){
    var accHead = $(this).find('h3');
    var accBody = $(this).find('p');
    var expArrow = 'assets/arrow-expanded.png';
    var colArrow = 'assets/arrow-collapsed.png';

    if (accHead.text() == 'EXPANDED') {
      accHead.text('COLLAPSED')
      $(this).find('img').attr('src', colArrow);
    } else {
      accHead.text('EXPANDED');
      $(this).find('img').attr('src', expArrow);
    }
    accBody.toggle('slide');
  });
});
