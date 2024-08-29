const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu. addEventListener('click', (e) => {
    //Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //Alteramos su atributo 'src' para el ícono del menú 
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'Imagenes/menu-removebg-preview.png'){
        e.target.setAttribute('src', 'Imagenes/menu-removebg-preview.png');
    }else{
        e.target.setAttribute('src', 'Imagenes/menu-removebg-preview.png');
    }
}) 