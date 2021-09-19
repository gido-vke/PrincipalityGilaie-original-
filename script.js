//cookie banner 


function Koekje() {
  document.getElementById("cookieConsent").style.display = "none";
}



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

function grubbel() {
  var er = document.getElementById('LIJSTloc');
  if (er.style.display == 'block') {
    er.style.display = 'none';
  }
  else {
    er.style.display = 'block';
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

let ScrollFixTED;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    ScrollFixTED.style.display = 'none';
  } else {
    navbar.classList.remove("sticky");
    ScrollFixTED.style.display = 'block';
  }
}






//hey
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}







