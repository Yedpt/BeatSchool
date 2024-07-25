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
