let blurTimeout;

window.addEventListener('load', function() {
    const blurBackground = document.querySelector('.blur-overlay');
    blurBackground.classList.add('active');
});

window.addEventListener('scroll', function() {
    const blurBackground = document.querySelector('.blur-overlay');
    blurBackground.classList.add('active');

    clearTimeout(blurTimeout);
    blurTimeout = setTimeout(function() {
        blurBackground.classList.remove('active');
    },400); // Remover o blur após um curto período de tempo (66ms)
});
