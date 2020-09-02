"use strict";

var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var items = document.querySelectorAll(".item");
/* Toggle mobile menu */

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
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
  var isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */


document.addEventListener("click", closeSubmenu, true);
toggle.addEventListener("click", toggleMenu, false);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
    }

    item.addEventListener("keypress", toggleItem, false);
  }
  /*              N A V    B A R    S C R O L L                    */

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos && currentScrollPos < 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }

  prevScrollpos = currentScrollPos;
}; // Get the modal


var modal = document.getElementById("myModal"); // Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById("PlayButton");
var modalImg = document.getElementById("Game");
var captionText = document.getElementById("caption");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}; // Get the <span> element that closes the modal


var span = document.getElementsByClassName("close")[0]; // When the user clicks on <span> (x), close the modal

span.onclick = function () {
  modal.style.display = "none";
};