$(document).ready(function () {
    var audio, playbtn, seek_bar;
    
    function initAudioPlayer() {
    audio = document.createElement("audio");
    audio.src = "audio/NewBanger.flac";
    audio.loop = true;
    audio.play();
     // set objects
        playbtn = document.addEventListener("playpausebtn");
        mutebtn = document.addEventListener("mutebtn")
    // Event handlers
        playbtn.addEventListener("click" , playPause);
        mutebtn.addEventListener("click", mute);
    // Dependant Functions
        function playPause() {
            if(audio.paused) {
                audio.play();
                playbtn.style.background = "url(.images/pause.png) no-repeat";
            } else {
                audio.pause();
                playbtn.style.background = "url(.images/play.png) no-repeat";
            }
        }
        
        function mute () {
            
        }
}

    window.addEventListener("load", initAudioPlayer);
});