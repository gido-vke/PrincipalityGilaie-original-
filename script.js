var btn2 = document.getElementById('btn2');
function toggle_visibility() {
  var e = document.getElementById('ReasoningOFF');
  if (e.style.display == 'block') {
    e.style.display = 'none';
  }
  else {
    e.style.display = 'block';
  }
  console.log('clicked');
  return;
}

//W3 CODE STICKY NAVBAR
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    ScrollFixTED.style.display = 'none';
  } else {
    navbar.classList.remove("sticky");
    ScrollFixTED.style.display = 'block';
  }
}