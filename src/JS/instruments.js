// HIT HAT

//captura el evento click del hit hat
document.getElementById('hi_hat_i').addEventListener('click', hihatsound)
document.getElementById('hi_hat_i').addEventListener('click', hihatimage)

//function que reproduce el sonido de hit hat desde carpeta media
function hihatsound() {
    let audio = document.getElementById('audio--hihat')
    audio.play()
}

function hihatimage() {
    let hi_hat_i = document.getElementById('hi_hat_i')
    let hi_hat_c = document.getElementById('hi_hat_c')
    hi_hat_i.classList.remove('hi-hat-image')
    hi_hat_c.classList.add('hi-hat-color')
    setTimeout(function () {
        //setInterval(() => {
        hi_hat_c.classList.remove('hi-hat-color')
        hi_hat_i.classList.add('hi-hat-image')
    }, 150)
}

// PEDAL

//captura el evento click del hit hat
document.getElementById('hi_hat_i').addEventListener('click', pedalimage)

//function que reproduce imagen
function pedalimage() {
    let pedal_h_i = document.getElementById('pedal_h_i')
    let pedal_h_c = document.getElementById('pedal_h_c')
    pedal_h_i.classList.remove('pedal-one-image')
    pedal_h_c.classList.add('pedal-color-one')
    setTimeout(function () {
        //setInterval(() => {
        pedal_h_c.classList.remove('pedal-color-one')
        pedal_h_i.classList.add('pedal-one-image')
    }, 150)
}

// STICK

//captura el evento click del hit hat
document.getElementById('hi_hat_i').addEventListener('click', stickImage)

//function que reproduce imagen
function stickImage() {
    let stick_l = document.getElementById('stick_l')
    stick_l.classList.add('left-drumstick')
    setTimeout(function () {
        //setInterval(() => {
        stick_l.classList.remove('left-drumstick')
    }, 150)
}

// CRASH
document.getElementById('crash_i').addEventListener('click', crashsound)
document.getElementById('crash_i').addEventListener('click', crashimage)

function crashsound() {
    let audio = document.getElementById('audio--crash')
    audio.play()
}

function crashimage() {
    let crash_i = document.getElementById('crash_i')
    let crash_c = document.getElementById('crash_c')
    crash_i.classList.remove('crash-image')
    crash_c.classList.add('crash-color')
    setTimeout(function () {
        //setInterval(() => {
        crash_c.classList.remove('crash-color')
        crash_i.classList.add('crash-image')
    }, 150)
}

// RIDE
document.getElementById('ride_i').addEventListener('click', ridesound)
document.getElementById('ride_i').addEventListener('click', rideimage)

function ridesound() {
    let audio = document.getElementById('audio--ride')
    audio.play()
}

function rideimage() {
    let ride_i = document.getElementById('ride_i')
    let ride_c = document.getElementById('ride_c')
    ride_i.classList.remove('ride-image')
    ride_c.classList.add('ride-color')
    setTimeout(function () {
        //setInterval(() => {
        ride_c.classList.remove('ride-color')
        ride_i.classList.add('ride-image')
    }, 150)
}

// SNARE
document.getElementById('snare_i').addEventListener('click', snaresound)
document.getElementById('snare_i').addEventListener('click', snareimage)

function snaresound() {
    let audio = document.getElementById('audio--snare')
    audio.play()
}

function snareimage() {
    let snare_i = document.getElementById('snare_i')
    let snare_c = document.getElementById('snare_c')
    snare_i.classList.remove('snare-image')
    snare_c.classList.add('snare-color')
    setTimeout(function () {
        //setInterval(() => {
        snare_c.classList.remove('snare-color')
        snare_i.classList.add('snare-image')
    }, 150)
}

// MIDTOM
document.getElementById('midtom_i').addEventListener('click', midtomsound)
document.getElementById('midtom_i').addEventListener('click', midtomimage)

function midtomsound() {
    let audio = document.getElementById('audio--midtom')
    audio.play()
}

function midtomimage() {
    let midtom_i = document.getElementById('midtom_i')
    let midtom_c = document.getElementById('midtom_c')
    midtom_i.classList.remove('mid-tom-image')
    midtom_c.classList.add('mid-tom-color')
    setTimeout(function () {
        //setInterval(() => {
        midtom_c.classList.remove('mid-tom-color')
        midtom_i.classList.add('mid-tom-image')
    }, 150)
}

// HIGHTOM
document.getElementById('hightom_i').addEventListener('click', hightomsound)
document.getElementById('hightom_i').addEventListener('click', hightomimage)

function hightomsound() {
    let audio = document.getElementById('audio--hightom')
    audio.play()
}

function hightomimage() {
    let hightom_i = document.getElementById('hightom_i')
    let hightom_c = document.getElementById('hightom_c')
    hightom_i.classList.remove('high-tom-image')
    hightom_c.classList.add('high-tom-color')
    setTimeout(function () {
        //setInterval(() => {
        hightom_c.classList.remove('high-tom-color')
        hightom_i.classList.add('high-tom-image')
    }, 150)
}

// TOMBASE
document.getElementById('tombase_i').addEventListener('click', tombasesound)
document.getElementById('tombase_i').addEventListener('click', tombaseimage)

function tombasesound() {
    let audio = document.getElementById('audio--tombase')
    audio.play()
}

function tombaseimage() {
    let tombase_i = document.getElementById('tombase_i')
    let tombase_c = document.getElementById('tombase_c')
    tombase_i.classList.remove('tom-base-image')
    tombase_c.classList.add('tom-base-color')
    setTimeout(function () {
        //setInterval(() => {
        tombase_c.classList.remove('tom-base-color')
        tombase_i.classList.add('tom-base-image')
    }, 150)
}

// BOMBO
document.getElementById('pedal_i').addEventListener('click', basssound)
document.getElementById('pedal_i').addEventListener('click', bassimage)

function basssound() {
    let audio = document.getElementById('audio--bass')
    audio.play()
}

function bassimage() {
    let pedal_i = document.getElementById('tombase_i')
    let pedal_c = document.getElementById('tombase_c')
    tombase_i.classList.remove('pedal-image-two')
    tombase_c.classList.add('pedal-color-two')
    setTimeout(function () {
        //setInterval(() => {
        pedal_c.classList.remove('pedal-color-two')
        pedal_i.classList.add('pedal-image-two')
    }, 150)
} 
