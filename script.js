function revelarSecciones() {
  const secciones = document.querySelectorAll('.reveal');
  
  secciones.forEach(seccion => {
    const distanciaTop = seccion.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (distanciaTop < alturaVentana - 100) {
      seccion.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revelarSecciones);

revelarSecciones();

const datosBeneficios = {
  estudiantes: {
    titulo: "Para Estudiantes",
    texto: "Mejora la retención de información al estudiar en bloques saludables, reduce la ansiedad antes de exámenes y regula los horarios de descanso."
  },
  oficina: {
    titulo: "Para Personas en Teletrabajo",
    texto: "Evita la fatiga visual y los dolores de espalda mediante recordatorios inteligentes de estiramiento e hidratación durante la jornada laboral."
  },
  instituciones: {
    titulo: "Para Colegios y Universidades",
    texto: "Permite promover campañas de salud preventiva y reducir los índices de agotamiento académico (burnout) en la comunidad estudiantil."
  }
};

function mostrarBeneficio(perfil, botonSeleccionado) {

  const botones = document.querySelectorAll('.tab-btn');
  botones.forEach(btn => btn.classList.remove('active'));
  botonSeleccionado.classList.add('active');


  const contenedor = document.getElementById('contenido-beneficio');
  contenedor.innerHTML = `
    <h3>${datosBeneficios[perfil].titulo}</h3>
    <p>${datosBeneficios[perfil].texto}</p>
  `;
}

const formulario = document.getElementById('form-registro');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); 

  const nombreUsuario = document.getElementById('nombre').value;
  
  mensajeExito.textContent = `¡Gracias, ${nombreUsuario}! Te hemos registrado en la lista de acceso de VitaPulse 💗`;
  formulario.reset();
});