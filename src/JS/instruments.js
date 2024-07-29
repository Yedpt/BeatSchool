document.addEventListener("DOMContentLoaded", function() {
    // Function to play the audio
    function playSound(audioElement) {
        audioElement.currentTime = 0; // Rewind to the start
        audioElement.play();
    }

    // Mapping of elements to their corresponding audio files
    const soundMappings = {
        ".instrument__container--hihat": "/public/assets/sounds/Hit_hat.wav",
        ".instrument__container--crash": "/public/assets/sounds/Crash.mp3",
        ".instrument__container--ride": "/public/assets/sounds/Ride.mp3",
        ".instrument__container--snare": "/public/assets/sounds/Snare-tape.wav",
        ".instrument__container--midtom": "/public/assets/sounds/Mid_tomb.mp3",
        ".instrument__container--hightom": "/public/assets/sounds/High_tomb.wav",
        ".instrument__container--tombase": "/public/assets/sounds/Tom_base.wav",
        ".instrument__container--bassdrum": "/public/assets/sounds/bass-drum.wav"
    };

    // Attach event listeners to each element
    for (const [selector, sound] of Object.entries(soundMappings)) {
        const element = document.querySelector(selector);
        const audioElement = document.createElement("audio");
        audioElement.src = sound;

        element.addEventListener("click", () => playSound(audioElement));
    }
});


const button = document.getElementById('btn-fs')
const section = document.getElementById('max--container')

button.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        section.requestFullscreen().then(() => {
            section.classList.add('fullscreen')
        })
    } else {
        document.exitFullscreen().then(() => {
            section.classList.remove('fullscreen')
        })
    }
})
