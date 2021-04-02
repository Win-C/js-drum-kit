"use strict";

/** Function to play audio based on key */
function playSound(evt){
  // keyCode is associated with every key on keyboard
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`); 
  if(audio){
    audio.currentTime = 0; // Rewind to the start to allow audio to play multiple times
    audio.play()
    key.classList.add('playing');
  }
}

/** Function removes the 'playing' class when transition has ended */
function removeTransition(evt){
  if (evt.propertyName == 'transform'){
    this.classList.remove('playing');
  }
}

// Get all keys and add an event listener for each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add event listener for keydown
window.addEventListener('keydown', playSound);