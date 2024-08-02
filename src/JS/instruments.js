   // Mapeo de elementos a sus correspondientes archivos de audio.
   const soundMappings = {
    '.instrument__container--hihat': 'assets/sounds/Hit_hat.wav',
    '.instrument__container--crash': 'assets/sounds/Crash.mp3',
    '.instrument__container--ride': 'assets/sounds/Ride.mp3',
    '.instrument__container--snare': 'assets/sounds/Snare-tape.wav',
    '.instrument__container--midtom': 'assets/sounds/Mid_tomb.mp3',
    '.instrument__container--hightom': 'assets/sounds/High_tomb.wav',
    '.instrument__container--tombase': 'assets/sounds/Tom_base.wav',
    '.instrument__container--bassdrum': 'assets/sounds/bass-drum.wav'
};

const audioElements = {}

// Crea elementos de audio para cada sonido.
for (const [selector, sound] of Object.entries(soundMappings)) {
    const audioElement = document.createElement('audio')
    audioElement.src = sound
    audioElements[selector] = audioElement
}

//  Adjunta eventos a cada elemento
for (const [selector, sound] of Object.entries(soundMappings)) {
    const element = document.querySelector(selector)
    element.addEventListener('click', () =>
        playSound(audioElements[selector])
    )
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to play the audio
    function playSound(audioElement) {
        audioElement.currentTime = 0 // vuelve al principio
        audioElement.play()
    }

 
    

    // HIT HAT
    document.getElementById('hi_hat_i').addEventListener('click', hihatimage)
    function hihatimage() {
        let hi_hat_i = document.getElementById('hi_hat_i')
        let hi_hat_c = document.getElementById('hi_hat_c')
        hi_hat_i.classList.remove('hi-hat-image')
        hi_hat_c.classList.add('hi-hat-color')
        hi_hat_c.classList.add('vibrating')
        playSound(audioElements['.instrument__container--hihat'])

        setTimeout(function () {
            hi_hat_c.classList.remove('vibrating')
            hi_hat_c.classList.remove('hi-hat-color')
            hi_hat_i.classList.add('hi-hat-image')
        }, 150)
    }

    // PEDAL
    document.getElementById('hi_hat_i').addEventListener('click', pedalimage)
    function pedalimage() {
        let pedal_h_i = document.getElementById('pedal_h_i')
        let pedal_h_c = document.getElementById('pedal_h_c')
        pedal_h_i.classList.remove('pedal-one-image')
        pedal_h_c.classList.add('pedal-color-one')
        setTimeout(function () {
            pedal_h_c.classList.remove('pedal-color-one')
            pedal_h_i.classList.add('pedal-one-image')
        }, 150)
    }

    // STICK
    document.getElementById('hi_hat_i').addEventListener('click', stickImage)
    function stickImage() {
        let stick_l = document.getElementById('stick_l')
        stick_l.classList.add('left-drumstick')
        setTimeout(function () {
            stick_l.classList.remove('left-drumstick')
        }, 150)
    }

    // CRASH
    document.getElementById('crash_i').addEventListener('click', crashimage)
    function crashimage() {
        let crash_i = document.getElementById('crash_i')
        let crash_c = document.getElementById('crash_c')
        crash_i.classList.remove('crash-image')
        crash_c.classList.add('crash-color')
        crash_c.classList.add('vibrating')
        playSound(audioElements['.instrument__container--crash'])

        setTimeout(function () {
            crash_c.classList.remove('vibrating')
            crash_c.classList.remove('crash-color')
            crash_i.classList.add('crash-image')
        }, 400)
    }

    // RIDE
    document.getElementById('ride_i').addEventListener('click', rideimage)
    function rideimage() {
        let ride_i = document.getElementById('ride_i')
        let ride_c = document.getElementById('ride_c')
        ride_i.classList.remove('ride-image')
        ride_c.classList.add('ride-color')
        ride_c.classList.add('vibrating')
        playSound(audioElements['.instrument__container--ride'])

        setTimeout(function () {
            ride_c.classList.remove('vibrating')
            ride_c.classList.remove('ride-color')
            ride_i.classList.add('ride-image')
        }, 150)
    }

    // SNARE
    document.getElementById('snare_i').addEventListener('click', snareimage)
    function snareimage() {
        let snare_i = document.getElementById('snare_i')
        let snare_c = document.getElementById('snare_c')
        snare_i.classList.remove('snare-image')
        snare_c.classList.add('share-color')
        playSound(audioElements['.instrument__container--snare'])

        setTimeout(function () {
            snare_c.classList.remove('share-color')
            snare_i.classList.add('snare-image')
        }, 150)
    }

    // MIDTOM
    document.getElementById('midtom_i').addEventListener('click', midtomimage)
    function midtomimage() {
        let midtom_i = document.getElementById('midtom_i')
        let midtom_c = document.getElementById('midtom_c')
        midtom_i.classList.remove('mid-tom-image')
        midtom_c.classList.add('mid-tom-color')
        playSound(audioElements['.instrument__container--midtom'])

        setTimeout(function () {
            midtom_c.classList.remove('mid-tom-color')
            midtom_i.classList.add('mid-tom-image')
        }, 150)
    }

    // HIGHTOM
    document.getElementById('hightom_i').addEventListener('click', hightomimage)
    function hightomimage() {
        let hightom_i = document.getElementById('hightom_i')
        let hightom_c = document.getElementById('hightom_c')
        hightom_i.classList.remove('high-tom-image')
        hightom_c.classList.add('high-tom-color')
        playSound(audioElements['.instrument__container--hightom'])

        setTimeout(function () {
            hightom_c.classList.remove('high-tom-color')
            hightom_i.classList.add('high-tom-image')
        }, 150)
    }

    // TOMBASE
    document.getElementById('tombase_i').addEventListener('click', tombaseimage)
    function tombaseimage() {
        let tombase_i = document.getElementById('tombase_i')
        let tombase_c = document.getElementById('tombase_c')
        tombase_i.classList.remove('tom-base-image')
        tombase_c.classList.add('tom-base-color')
        playSound(audioElements['.instrument__container--tombase'])

        setTimeout(function () {
            tombase_c.classList.remove('tom-base-color')
            tombase_i.classList.add('tom-base-image')
        }, 150)
    }

    // BOMBO
    document.getElementById('pedal_i').addEventListener('click', bassimage)
    function bassimage() {
        let pedal_i = document.getElementById('pedal_i')
        let pedal_c = document.getElementById('pedal_c')
        pedal_i.classList.remove('pedal-image-two')
        pedal_c.classList.add('pedal-color-two')
        playSound(audioElements['.instrument__container--bassdrum'])

        setTimeout(function () {
            pedal_c.classList.remove('pedal-color-two')
            pedal_i.classList.add('pedal-image-two')
        }, 150)
    }

    // Keypress event listener
    document.addEventListener('keypress', function (event) {
        switch (event.code) {
            case 'KeyR':
                hihatimage()
                pedalimage()
                break
            case 'KeyY':
                crashimage()
                break
            case 'KeyG':
                midtomimage()
                break
            case 'KeyH':
                hightomimage()
                break
            case 'KeyX':
                bassimage()
                break
            case 'KeyU':
                rideimage()
                break
            case 'KeyJ':
                tombaseimage()
                break
            case 'KeyS':
                snareimage()
                break
            default:
                break
        }
    })

    // pantalla completa 
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
})


