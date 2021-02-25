//responsive navbar
$(window).resize(function () {
  if ($(window).width() >= 1100) {
    $(".link-container").show();
  }
});

//show links on click
$(".menu").on("click", function () {
  $(".link-container").fadeToggle(200);
});





const menu = document.getElementById('menubars');
const linkContainer = document.getElementById('nav-links');


menu.addEventListener('click', () => {
  linkContainer.classList.toggle('show');
});




$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});


//Get the button
var mybutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}