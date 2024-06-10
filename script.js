const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const repeatButton = document.getElementById('repeat');

const plist = document.querySelector('.plist');

const close = document.querySelector('.close');
const btnplaylist = document.querySelector('.btnplaylist');
let musicimage=document.querySelector('.musicimage');

btnplaylist.addEventListener('click', ()=> {
    plist.classList.toggle('plist2');
})
close.addEventListener('click', ()=>{
    plist.classList.toggle('plist2');
})


const cutime = document.querySelector('.cutime');
const dutime = document.querySelector('.dutime');

let isRepeating = false;
let currentTrack = 0;
const tracks = ['./assets/music/music8.mp3', './assets/music/music1.mp3', './assets/music/music5.mp3', './assets/music/music11.mp3', './assets/music/music7.mp3', './assets/music/music6.mp3'];

function updateTime() {
    setInterval(() => {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        cutime.textContent = `${currentTime}`;
        dutime.textContent = `${duration}`;
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');


audio.addEventListener('ended', () => {
    // Automatically play the next track
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    updateTime(); // Call updateTime() when audio starts playing
    btn2.classList.add('btn12');
    musicimage.classList.add('music2p');
});


playButton.addEventListener('click', () => {

    btn2.classList.add('btn12');
    btn1.classList.remove('btn12');
    updateTime(); // Call updateTime() when audio starts playing
    audio.play();
    musicimage.classList.add('music2p');
});

pauseButton.addEventListener('click', () => {
    btn2.classList.remove('btn12');
    btn1.classList.add('btn12');
    audio.pause();
    musicimage.classList.remove('music2p');
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    updateTime(); // Call updateTime() when audio starts playing
    btn2.classList.add('btn12');
    musicimage.classList.add('music2p');
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    updateTime(); // Call updateTime() when audio starts playing
    btn2.classList.add('btn12');
    musicimage.classList.add('music2p');
});

repeatButton.addEventListener('click', () => {
    isRepeating = !isRepeating;
    audio.loop = isRepeating;
    repeatButton.style.background = isRepeating ? '#28a745' : '#007bff';
});


const playlist = document.getElementById("playlist");

playlist.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const songSrc = event.target.getAttribute("data-src");
        audio.src = songSrc;
        updateTime(); // Call updateTime() when audio starts playing
        audio.play();
        btn2.classList.add('btn12');
        musicimage.classList.add('music2p');
    }
});


// Update progress bar
let progress1 = document.querySelector('.progress1');
let progress2 = document.querySelector('.progress2');
progress1.addEventListener("click", function(event) {
    const progressRect = progress1.getBoundingClientRect();
    const clickX = event.clientX - progressRect.left;
    const percentClicked = clickX / progressRect.width;
    const seekTime = percentClicked * audio.duration;
    audio.currentTime = seekTime;
});

audio.addEventListener("timeupdate", function() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress2.style.width = progressPercent + "%";
});

// Initialize progress bar
audio.addEventListener("loadedmetadata", function() {
    progress2.style.width = "0%";
});

// Adjust progress bar on seeking
audio.addEventListener("seeking", function() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress2.style.width = progressPercent + "%";
});

