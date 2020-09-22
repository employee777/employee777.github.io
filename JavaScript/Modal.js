/*            Modal           */

// GAME





//document.querySelector('.myClassName').id[0]

//document.querySelector('.myClassName').id[0]

//.style.display = "block";


// CLOSE

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  (ModalGame.style.display = "none") || (ModalMessageMe.style.display = "none");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === ModalMessageMe) {
    ModalMessageMe.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target === ModalGame) {
    ModalGame.style.display = "none";
  }
}



var ModalGame = document.getElementById("Game");
// Get the button that opens the modal
var GameBtn = document.getElementById("GameModal");
// When the user clicks on the button, open the modal
GameBtn.onclick = function() {
  ModalGame.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it


// MESSAGE

var ModalMessageMe = document.getElementById("MessageMe");
// Get the button that opens the modal
var MessageBtn = document.getElementById("MessageMeModal");
// When the user clicks on the button, open the modal
MessageBtn.onclick = function() {
  ModalMessageMe.style.display = "block";
}

