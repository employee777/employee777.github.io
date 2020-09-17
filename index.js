

/*                       M E N U                         */

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-link'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

/* Event Listeners */
document.addEventListener("click", closeSubmenu, true);
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
/*                   E N D   O F   M E N U                      */


/*                 N A V    B A R    S C R O L L                    */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && currentScrollPos < 150) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-175px";
  }
  prevScrollpos = currentScrollPos;
}









/*                 Dark Theme                  */

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});



//Copyright//
const date_ob = new Date();
const Year = date_ob.getFullYear();
const Copyright = document.getElementById("copyright"); 
copyright = document.write(" Copyright "+" &copy; "+ " " + `${Year}` + " " + "Marcus Helms "+". All Rights Reserved");

/*            Modal           */

// GAME

var ModalGame = document.getElementById("Game");
// Get the button that opens the modal
var GameBtn = document.getElementById("GameModal");
// When the user clicks on the button, open the modal
GameBtn.onclick = function() {
  ModalGame.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === ModalGame) {
    ModalGame.style.display = "none";
  }
}

// MESSAGE

var ModalMessageMe = document.getElementById("MessageMe");
// Get the button that opens the modal
var MessageBtn = document.getElementById("MessageMeModal");
// When the user clicks on the button, open the modal
MessageBtn.onclick = function() {
  ModalMessageMe.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === ModalMessageMe) {
    ModalMessageMe.style.display = "none";
  }
}

// CLOSE

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  (ModalGame.style.display = "none") || (ModalMessageMe.style.display = "none");
}