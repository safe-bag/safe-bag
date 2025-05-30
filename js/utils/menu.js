const btnMenu = document.getElementById('btn-menu');

const toggleMenu = () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

btnMenu.addEventListener('click', toggleMenu)