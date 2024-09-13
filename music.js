let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");
song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
    if (ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}
progress.onchange= function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
const audio = document.getElementById('song');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
let currentTrack = 0;
let tracks = [
{ title: 'TAJDAR E HARAM', artist: 'ATIF ASLAM', src:'audio/Tajdar-E-Haram-Coke-Studio-Atif-Aslam.mp3' },
{ title: 'BALAGAHAL ULA BE KAMALIHI', artist: 'ALI ZAFAR', src: 'audio/balaghal-ula-be-kamalehi.mp3' },
{ title: 'YA NABI SALAM ALIKA', artist: 'MAHER ZAIN', src: 'audio/Ya-Nabi-Salam-Alayka.mp3' },
{ title: 'MERA DIL BADAL DA', artist: 'JUNAID JAMSHEED', src: 'audio/Mera Dil Badal De MP3 Naat Download.mp3'},
{ title: 'MERA DIL BADAL DA', artist: 'JUNAID JAMSHEED', src: 'audio/Mera Dil Badal De MP3 Naat Download.mp3'}
];




prev.addEventListener('click', () => {
currentTrack--;
if (currentTrack < 0) currentTrack = tracks.length - 1;
updateTrack();
});

next.addEventListener('click', () => {
currentTrack++;
if (currentTrack >= tracks.length) currentTrack = 0;
updateTrack();
});
function updateTrack() {
audio.src = tracks[currentTrack].src;
trackTitle.textContent = tracks[currentTrack].title;
trackArtist.textContent = tracks[currentTrack].artist;
playPause.innerHTML ='<i class="fa-solid fa-pause"></i>';
audio.play();
isPlaying = true;
}