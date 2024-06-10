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

// window.addEventListener('load', ()=> {
//     plist.classList.toggle('plist2');
// })

// const timeDisplay = document.getElementById('time-display'); // Add this line
const cutime = document.querySelector('.cutime');
const dutime = document.querySelector('.dutime');

let isRepeating = false;
let currentTrack = 0;
const tracks = ['./assets/music/music8.mp3', './assets/music/music1.mp3', './assets/music/music5.mp3', './assets/music/music11.mp3', './assets/music/music7.mp3', './assets/music/music6.mp3'];

// btn1

function updateTime() {
    setInterval(() => {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        // timeDisplay.textContent = `${currentTime} / ${duration}`;
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


playButton.addEventListener('click', () => {

    btn2.classList.add('btn12');
    btn1.classList.remove('btn12');
    updateTime(); // Call updateTime() when audio starts playing
    audio.play();

    musicimage.classList.add('music2p');
    // if(playButton.innerHTML.toLowerCase()=="play"){
    //     // musicimage.classList.toggle('music2p');
    //     playButton.innerHTML="Pause";
    //     // audio.pause();
    //     audio.play();
    //     // musicimage.classList.toggle('music2p');
    // }else{
    //     playButton.innerHTML="Play";
    //     // audio.play();
    //     audio.pause();
    //     // musicimage.classList.toggle('music2p');
    // }
    // audio.play();
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
    // playButton.innerHTML="Pause";
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    updateTime(); // Call updateTime() when audio starts playing
    btn2.classList.add('btn12');
    musicimage.classList.add('music2p');
    // playButton.innerHTML="Pause";
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
        // playbtn.innerHTML="Play";
        btn2.classList.add('btn12');
        musicimage.classList.add('music2p');
        // musicimage.classList.toggle('music2p');
    }
});

let progress2 = document.querySelector('.progress2');
    audio.addEventListener("timeupdate", function() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress2.style.width = progressPercent + "%";
        // if((audio.duration) === 100){
        //      playbtn.innerHTML="Play";
        // }
    });





//     const audio = document.getElementById('audio');
// const playButton = document.getElementById('play');
// const pauseButton = document.getElementById('pause');
// const nextButton = document.getElementById('next');
// const prevButton = document.getElementById('prev');
// const repeatButton = document.getElementById('repeat');
// const timeDisplay = document.getElementById('time-display'); // Add this line

// let isRepeating = false;
// let currentTrack = 0;
// const tracks = ['song1.mp3', 'song2.mp3', 'song3.mp3'];

// playButton.addEventListener('click', () => {
//     audio.play();
//     updateTime(); // Call updateTime() when audio starts playing
// });

// pauseButton.addEventListener('click', () => {
//     audio.pause();
// });

// nextButton.addEventListener('click', () => {
//     currentTrack = (currentTrack + 1) % tracks.length;
//     audio.src = tracks[currentTrack];
//     audio.play();
//     updateTime(); // Call updateTime() when audio changes
// });

// prevButton.addEventListener('click', () => {
//     currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
//     audio.src = tracks[currentTrack];
//     audio.play();
//     updateTime(); // Call updateTime() when audio changes
// });

// repeatButton.addEventListener('click', () => {
//     isRepeating = !isRepeating;
//     audio.loop = isRepeating;
//     repeatButton.style.background = isRepeating ? '#28a745' : '#007bff';
// });

// function updateTime() {
//     setInterval(() => {
//         const currentTime = formatTime(audio.currentTime);
//         const duration = formatTime(audio.duration);
//         timeDisplay.textContent = `${currentTime} / ${duration}`;
//     }, 1000);
// }

// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }

// ### Instructions
// 1. Create three files: index.html, styles.css, and script.js.
// 2. Copy the respective code into each file.
// 3. Replace 'song1.mp3', 'song2.mp3', and 'song3.mp3' with the paths to your actual music files.
// 4. Open index.html in a web browser to test the music player.

// This basic player includes functionality to play, pause, skip to the next track, go to the previous track, and toggle repeat mode.