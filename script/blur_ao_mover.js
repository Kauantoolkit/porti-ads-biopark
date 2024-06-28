let blurTimeout;


window.addEventListener('scroll', function() {
    const blurBackground = document.querySelector('.blur-overlay');
    blurBackground.classList.add('active');

    clearTimeout(blurTimeout);
    blurTimeout = setTimeout(function() {
        blurBackground.classList.remove('active');
    },400); 
});
