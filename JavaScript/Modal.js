/*            Modal           */

var MessageBtn = document.getElementById("MessageModal");
var ModalMessage = document.getElementById("MessageMe");
var GameBtn = document.getElementById("GameModal");
var ModalGame = document.getElementById("Game");
var Modal1 = document.getElementsByClassName("modal")[0];
var Modal2 = document.getElementsByClassName("modal")[1];


GameBtn.onclick = function() {
  ModalGame.style.display = "flex";
}
MessageBtn.onclick = function() {
  ModalMessage.style.display = "flex";
}

function MessageClose() {
  ModalMessage.style.display = "none";
  ModalGame.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === Modal2) {
    ModalMessage.style.display = "none";
  }
  if (event.target === Modal1) {
    ModalGame.style.display = "none";
  }
}

