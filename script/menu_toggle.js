document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('header_nav');
    nav.classList.toggle('active');
});

document.getElementById('sair-link').addEventListener('click', function(event) {
    var nav = document.getElementById('header_nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }

    event.preventDefault();
});


document.querySelectorAll('#header_nav p a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            event.preventDefault();
            
            // se tirar esse código o header fixo acaba indo por cima do container ao escrolar
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            // pra n teleportar a viewport pro lugar 
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // 
            var nav = document.getElementById('header_nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});
