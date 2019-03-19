// jshint esversion: 6

var drums = document.querySelectorAll(".drum");
var drum_quantity = drums.length;

var drumAudio = {
  "a": new Audio("sounds/tom-1.mp3"),
  "s": new Audio("sounds/tom-2.mp3"),
  "d": new Audio("sounds/tom-3.mp3"),
  "f": new Audio("sounds/tom-4.mp3"),
  "j": new Audio("sounds/crash.mp3"),
  "k": new Audio("sounds/snare.mp3"),
  "l": new Audio("sounds/kick-bass.mp3")
};

for (let i=0; i<drum_quantity; i++) {
  drums[i].addEventListener("click", function() {
    playDrum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(target) {
  var targetElement = document.querySelector("." + target + ".drum")
  if (targetElement) {
    targetElement.classList.add("pressed");
    setTimeout(function(){targetElement.classList.remove("pressed");}, 111);
  }
}

function playDrum(target) {
  if (target in drumAudio) {drumAudio[target].play();}
}
