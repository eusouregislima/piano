let keyPiano = {
    "z": 'audio/1.mp3',
    "x": 'audio/2.mp3',
    "c": 'audio/3.mp3',
    "v": 'audio/4.mp3',
    "b": 'audio/5.mp3',
    "n": 'audio/6.mp3',
    "m": 'audio/7.mp3',
    ",": 'audio/8.mp3',
    ".": 'audio/9.mp3',
    "/": 'audio/10.mp3',
    "s": 'audio/a.mp3',
    "d": 'audio/b.mp3',
    "g": 'audio/c.mp3',
    "h": 'audio/d.mp3',
    "j": 'audio/e.mp3',
    "l": 'audio/f.mp3',
    ";": 'audio/g.mp3'

}
document.addEventListener('keydown',
    (event) => playPiano(event.key));
function playPiano(key) {
    audio = new Audio(keyPiano[key]);
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    if (keyClick) {
        keyClick.classList.add('active');
        const remmoveActive = setInterval(() => {
            keyClick.classList.remove('active')
        }, 500);
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        playPiano(key.dataset.key);
    })
})