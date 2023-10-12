window.onload = function() {
  window.scrollTo(0, 0); // Desplaza la página al inicio (coordenadas 0,0)
}

/*/////////////////////////////////////////////////////////////////////////////////*/

  /*FUNCION PARA EL SCROLL ANIMADO DEL NAV*/
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});
/*/////////////////////////////////////////////////////////////////////////////////*/

/*FUNCION PARA CERRAR EL DESPLEGABLE DEL NAV RESPONSIVE*/
// Obtén una referencia al elemento de menú desplegable y a los enlaces del menú
const check = document.getElementById('check');
const navbarLinks = document.querySelectorAll('.navbar a');

// Agrega un controlador de eventos clic a cada enlace del menú
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Desmarca la casilla de verificación (cierra el menú)
    check.checked = false;
  });
});

/*/////////////////////////////////////////////////////////////////////////////////*/

/*FUNCIONES DEL SWIPER TESTIMONIOS*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*/////////////////////////////////////////////////////////////////////////////////*/

/*FUNCIONES DE MAQUINA DE ESCRIBIR PERFIL*/
const titleElement = document.querySelector('.maquina');
const textToType = 'Axel Henderson </Front-End Developer>';
const delay = 3000; // Retraso de 3 segundos

function typeText() {
  let index = 0;
  let text = '';

  function typeNextChar() {
    if (index < textToType.length) {
      text += textToType.charAt(index);
      titleElement.textContent = text;
      index++;
      setTimeout(typeNextChar, 100); // Velocidad de escritura (100ms)
    } else {
      setTimeout(eraseText, delay);
    }
  }

  typeNextChar();
}

function eraseText() {
  let text = titleElement.textContent;

  function eraseNextChar() {
    if (text.length > 0) {
      text = text.slice(0, -1);
      titleElement.textContent = text;
      setTimeout(eraseNextChar, 50); // Velocidad de borrado (50ms)
    } else {
      setTimeout(typeText, delay);
    }
  }

  eraseNextChar();
}

typeText(); // Iniciar el ciclo de escritura

/*/////////////////////////////////////////////////////////////////////////////////*/

/*MODAL DE SKILL-LENGUAJE*/
const openModalLenguaje = document.querySelector('.skill-link_lenguaje');
const modalLenguaje = document.querySelector('.modal__lenguajes')
const closeModalLenguaje = document.querySelector('.modal__close-lenguajes')

openModalLenguaje.addEventListener('click', (e)=>{
  e.preventDefault();
  modalLenguaje.classList.add('modal--show-lenguajes')
});

closeModalLenguaje.addEventListener('click', (e)=>{
  e.preventDefault();
  modalLenguaje.classList.remove('modal--show-lenguajes')
});

/*MODAL DE SKILL-FRAMEWORK*/
const openModalFramework = document.querySelector('.skill-link_framework');
const modalFramework = document.querySelector('.modal__framework')
const closeModalFramework = document.querySelector('.modal__close-framework')

openModalFramework.addEventListener('click', (e)=>{
  e.preventDefault();
  modalFramework.classList.add('modal--show-framework')
});

closeModalFramework.addEventListener('click', (e)=>{
  e.preventDefault();
  modalFramework.classList.remove('modal--show-framework')
});


/*MODAL DE SKILL-HERRAMIENTAS*/
const openModalHerramientas = document.querySelector('.skill-link_herramientas');
const modalHerramientas = document.querySelector('.modal__herramientas')
const closeModalHerramientas = document.querySelector('.modal__close-herramientas')

openModalHerramientas.addEventListener('click', (e)=>{
  e.preventDefault();
  modalHerramientas.classList.add('modal--show-herramientas')
});

closeModalHerramientas.addEventListener('click', (e)=>{
  e.preventDefault();
  modalHerramientas.classList.remove('modal--show-herramientas')
});