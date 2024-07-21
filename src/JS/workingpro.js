document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');

    function adjustLayout() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 600) {
            message.style.fontSize = '1.5rem';
        } else {
            message.style.fontSize = '2rem';
        }
    }

    // Adjust layout on page load
    adjustLayout();

    // Adjust layout on window resize
    window.addEventListener('resize', adjustLayout);