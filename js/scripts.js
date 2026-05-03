$(document).ready(function() {
    
    // ==========================================
    // --- MODO OSCURO (Persistente y con Iconos) ---
    // ==========================================
    const btnTema = $('#dark-mode-toggle');
    const body = $('body');
    const icono = $('#dark-mode-icon');

    if (localStorage.getItem('tema') === 'oscuro') { 
        body.addClass('dark-mode'); 
        icono.removeClass('bi-moon-stars').addClass('bi-sun');
    }

    btnTema.on('click', function() {
        body.toggleClass('dark-mode');
        const esOscuro = body.hasClass('dark-mode');
        
        localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
        icono.toggleClass('bi-moon-stars', !esOscuro);
        icono.toggleClass('bi-sun', esOscuro);
    });

    // ==========================================
    // --- CAMBIO DE MONEDA (Página Precios) ---
    // ==========================================
    // Esta lógica ahora busca la clase .precio que pusimos en el HTML
    $('#btn-dolares').on('click', function() {
        $('.precio').each(function() {
            const usd = $(this).data('usd');
            $(this).fadeOut(200, function() {
                $(this).text('US$ ' + usd).fadeIn(200);
            });
        });
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');
        $('#btn-pesos').removeClass('active btn-primary').addClass('btn-outline-primary');
    });

    $('#btn-pesos').on('click', function() {
        $('.precio').each(function() {
            const ars = $(this).data('ars');
            $(this).fadeOut(200, function() {
                $(this).text('$ ' + ars.toLocaleString()).fadeIn(200);
            });
        });
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');
        $('#btn-dolares').removeClass('active btn-primary').addClass('btn-outline-primary');
    });

    // ==========================================
    // --- FILTRADO DE DESTINOS (Página Destinos) ---
    // ==========================================
    $('.filtro-btn').on('click', function() {
        const filtro = $(this).data('filter');
        
        // Manejo de botones activos
        $('.filtro-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

        if (filtro === 'todos') {
            $('.item-destino, .item-destino-tabla').fadeIn();
        } else {
            // Oculta lo que no coincide y muestra lo que sí
            $('.item-destino, .item-destino-tabla').hide();
            $('.' + filtro).fadeIn();
        }
    });

    // ==========================================
    // --- SELECCIÓN DE DESTINO (Página Precios) ---
    // ==========================================
    $('.btn-seleccionar').on('click', function() {
        const nombre = $(this).data('nombre');
        $('#nombre-destino-elegido').text(nombre);
        $('#resumen-seleccion').slideDown();
        
        // Scroll suave al resumen
        $('html, body').animate({
            scrollTop: $("#resumen-seleccion").offset().top - 100
        }, 500);
    });

    $('#btn-limpiar').on('click', function() {
        $('#resumen-seleccion').slideUp();
    });

    // Zoom en imágenes (Bootstrap cards)
    $('.img-zoom').hover(
        function() { $(this).css('transform', 'scale(1.1)'); }, 
        function() { $(this).css('transform', 'scale(1)'); }
    );
});