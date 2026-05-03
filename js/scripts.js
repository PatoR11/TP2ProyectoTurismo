$(document).ready(function() {
    
    // ==========================================
    // --- MODO OSCURO (Persistente y con Iconos) ---
    // ==========================================
    const btnTema = $('#dark-mode-toggle');
    const body = $('body');
    const icono = $('#dark-mode-icon');

    // Al cargar: verificar preferencia guardada
    if (localStorage.getItem('tema') === 'oscuro') { 
        body.addClass('dark-mode bg-dark text-white'); 
        $('.card').addClass('bg-secondary text-white');
        $('.table').addClass('table-dark');
        icono.removeClass('bi-moon-stars').addClass('bi-sun');
    }

    btnTema.on('click', function() {
        body.toggleClass('dark-mode bg-dark text-white');
        $('.card').toggleClass('bg-secondary text-white');
        $('.table').toggleClass('table-dark');
        
        const esOscuro = body.hasClass('dark-mode');
        localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
        
        icono.toggleClass('bi-moon-stars', !esOscuro);
        icono.toggleClass('bi-sun', esOscuro);
    });

    // ==========================================
    // --- CAMBIO DE MONEDA (Página Precios) ---
    // ==========================================
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
        
        $('.filtro-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

        if (filtro === 'todos') {
            $('.item-destino, .item-destino-tabla').fadeIn();
        } else {
            $('.item-destino, .item-destino-tabla').hide();
            $('.' + filtro).fadeIn();
        }
    });

    // ==========================================
    // --- LÓGICA DE AGENCIAS (Agencias.html) ---
    // ==========================================
    // Efecto de giro en las tarjetas
    $('.btn-girar-card').on('click', function () {
        $(this).closest('.card-inner').toggleClass('is-flipped');
    });

    // Calificación por estrellas (estético)
    $('.star-btn').on('click', function() {
        $(this).parent().find('.star-btn').removeClass('fa-solid text-warning').addClass('fa-regular');
        $(this).prevAll().addBack().addClass('fa-solid text-warning').removeClass('fa-regular');
    });

    // Envío del formulario
    $('#miFormulario').on('submit', function(e) {
        e.preventDefault();
        const nombre = $('#nombre').val();
        alert('¡Gracias ' + nombre + '! Tu consulta ha sido enviada con éxito.');
        this.reset();
    });

    // ==========================================
    // --- SELECCIÓN DE DESTINO (Página Precios) ---
    // ==========================================
    $('.btn-seleccionar').on('click', function() {
        const nombre = $(this).data('nombre');
        $('#nombre-destino-elegido').text(nombre);
        $('#resumen-seleccion').slideDown();
        
        // Scroll suave hacia el resumen
        $('html, body').animate({
            scrollTop: $("#resumen-seleccion").offset().top - 150
        }, 500);
    });

    $('#btn-limpiar').on('click', function() {
        $('#resumen-seleccion').slideUp();
    });

    // ==========================================
    // --- EFECTOS VISUALES ADICIONALES ---
    // ==========================================
    $('.img-zoom').css('transition', 'transform .3s ease');
    $('.img-zoom').hover(
        function() { $(this).css('transform', 'scale(1.1)'); }, 
        function() { $(this).css('transform', 'scale(1)'); }
    );
});