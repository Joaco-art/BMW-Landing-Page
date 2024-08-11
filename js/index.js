document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video') ;
    setTimeout(() => {
        video.style.opacity = '0.65'; // Reducir la opacidad al 65%
    }, 300);
});
