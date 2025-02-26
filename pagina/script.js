
window.addEventListener('scroll', () => {
    const topBar = document.getElementById('topBar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    topBar.classList.toggle('show', scrollTop > 50); 
});


function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", (event) => {
        toggleMenu();
        event.stopPropagation();
    });

    window.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });

    sidebar.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});




function toggleSubmenu(event) {
    if (event.target.classList.contains('submenu-btn')) {
        const submenu = event.target.nextElementSibling;
        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            const arrow = event.target.querySelector(".arrow");
            arrow.textContent = submenu.style.display === "block" ? "▼" : "▶"; 
            event.preventDefault(); 
        }
    }
}

document.getElementById('sidebar').addEventListener('click', toggleSubmenu); 

const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');


const data = [
  { title: 'Trámite 1', description: 'Descripción del trámite 1', category: 'trámites' },
  { title: 'Anuncio 1', content: 'Contenido del anuncio 1', category: 'anuncios' },
  { title: 'Noticia 1', content: 'Contenido de la noticia 1', category: 'noticias' },
];


