document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('header_nav');
    nav.classList.toggle('active');
});

document.getElementById('sair-link').addEventListener('click', function(event) {
    var nav = document.getElementById('header_nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
    // Evitar que o link redirecione para outra página
    event.preventDefault();
});

// Adiciona eventos aos links do menu para fechar o menu ao clicar e ajustar a rolagem
document.querySelectorAll('#header_nav p a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            event.preventDefault();
            
            // Calcular a posição do destino, ajustando pelo tamanho do cabeçalho fixo
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            // Rolagem suave para a posição calculada
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Fechar o menu
            var nav = document.getElementById('header_nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});
