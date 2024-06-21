let blurTimeout;

//window.addEventListener('load', function() {
//    const blurBackground = document.querySelector('.blur-overlay');
//    blurBackground.classList.add('active');
//});                                                                //não sei se é uma boa ativar o blur ao acessar a página

window.addEventListener('scroll', function() {
    const blurBackground = document.querySelector('.blur-overlay');
    blurBackground.classList.add('active');

    clearTimeout(blurTimeout);
    blurTimeout = setTimeout(function() {
        blurBackground.classList.remove('active');
    },400); 
});
