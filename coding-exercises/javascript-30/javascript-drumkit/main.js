function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // doesn't play if key press is wrong
    audio.currentTime = 0; // rewinds audio
    audio.play();
    key.classList.add('playing'); // add class to scale up keys when pressed
  }
  
  function removeTrasition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  };
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTrasition));
  window.addEventListener('keydown', playSound);