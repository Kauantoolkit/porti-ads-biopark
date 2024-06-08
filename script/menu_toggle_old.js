document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('header_nav');
    nav.classList.toggle('active');
    
    // Adiciona a classe 'blur' ao body quando o menu é aberto
    document.body.classList.toggle('blur', nav.classList.contains('active'));
});

document.getElementById('sair-link').addEventListener('click', function(event) {
    var nav = document.getElementById('header_nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        // Remove o blur quando o menu é fechado
        document.body.classList.remove('blur');
    }
    // Evitar que o link redirecione para outra página
    event.preventDefault();
});

// Adiciona eventos aos links do menu para fechar o menu ao clicar
document.querySelectorAll('#header_nav p a').forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.getElementById('header_nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            // Remove o blur quando o menu é fechado
            document.body.classList.remove('blur');
        }
    });
});
