removeClass = (event) => {
    if(event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}
addClass = (event) => {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
let klasy = document.querySelectorAll('.key');
klasy.forEach((event) => event.addEventListener('transitionend', removeClass));
window.addEventListener('keydown', addClass);
