
let songs = 
    [
        "Ed Sheeran - Give Me Love [Official Video].mp3",
        "Ed Sheeran - I See Fire (Music Video).mp3",
        "Ed Sheeran - Photograph.mp3"
    ];
for (let i in songs) {
    songs[i] = "./assets/audio/"+songs[i];
}
let poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];
for (let i in poster) {
    poster[i] = "./assets/imgs/"+poster[i];
}
let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");

let song = new Audio();
let currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){
    
    song.src = songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = songs[currentSong].replace('./assets/audio/',''); // set the title of song
    songTitle.textContent =  songTitle.textContent.replace('.mp3',''); // set the title of song
    
    song.play();    // play the song
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    let position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});

function next(){
    
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}