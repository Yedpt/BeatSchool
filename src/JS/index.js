document.getElementById('share-icon').addEventListener('click', function () {
    console.log('Icono clicado')
    document.getElementById('share-popup').style.display = 'block'
})

document.addEventListener('click', function (event) {
    var popup = document.getElementById('share-popup')
    if (!popup.contains(event.target) && event.target.id !== 'share-icon') {
        console.log('Cerrando popup')
        popup.style.display = 'none'
    }
})

document.querySelectorAll('.share-button').forEach((button) => {
    button.addEventListener('click', function () {
        const platform = this.getAttribute('data-platform')
        const url = window.location.href
        let shareUrl = ''

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`
                break
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                )}`
                break
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    url
                )}`
                break
        }

        console.log(`Abriendo ventana de compartir: ${shareUrl}`)
        window.open(shareUrl, 'popup', 'width=600,height=400')
    })
})

document.getElementById('copy-link').addEventListener('click', function () {
    const url = 'www.beatschool.com'
    navigator.clipboard.writeText(url).then(() => {
        const confirmation = document.getElementById('copy-confirmation')
        confirmation.classList.remove('hidden')
        setTimeout(() => confirmation.classList.add('hidden'), 4000)
        console.log('Enlace copiado')
    })
})
