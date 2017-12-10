// This is where the JavaScript for the Williams-Sonoma Markup Challege for
// William Kaspar will live.  It will run some of the actions on the page,
// switching images and expandables-collapsables.


$(document).ready(function(){
  console.log('app.js working. hello world!');

  $('.sidekick').on('click', function(){
    console.log('hero switch!');
  });

  $('#add-to-cart').on('click', function(){
    console.log('quantity added!');
  });

  $('.expanded').on('click', function(){
    console.log('collapsed!');
  });

  $('.collapsed').on('click', function(){
    console.log('expanded!');
  });

});
