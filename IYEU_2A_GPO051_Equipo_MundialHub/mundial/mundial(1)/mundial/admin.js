document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado - Inicializando perfil de usuario");

  // Inicializar funcionalidades
  inicializarNavegacion();
  inicializarModales();
  inicializarAccesibilidad();
  cargarMisPublicaciones();
  inicializarBotones();
  inicializarModalEdicion();

  console.log("Perfil de usuario inicializado correctamente");
});

// ===== NAVEGACIÓN =====
function inicializarNavegacion() {
  // Navegación a otras páginas
  const homeBtn = document.getElementById("homeBtn");
  const worldCupBtn = document.getElementById("worldCupBtn");
  const postsBtn = document.getElementById("postsBtn");
  const nuevapubli = document.getElementById("nueva-publi");
  const nuevomundial = document.getElementById("nuevo-mundial");

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (worldCupBtn) {
    worldCupBtn.addEventListener("click", () => {
      window.location.href = "mundiales.html";
    });
  }

  if (postsBtn) {
    postsBtn.addEventListener("click", () => {
      window.location.href = "publicaciones.html";
    });
  }

  if (nuevapubli) {
    nuevapubli.addEventListener("click", () => {
      window.location.href = "crear-publicacion.html";
    });
  }

  if (nuevomundial) {
    nuevomundial.addEventListener("click", () => {
      window.location.href = "crear-mundial.html";
    });
  }
}

// ===== MODALES (Funcionalidad recuperada) =====
function inicializarModales() {
  // Recuperar funcionalidad de los modales del header
  const loginBtn = document.getElementById("loginBtn"); // CORREGIDO: Ahora es loginBtn
  const helpBtn = document.getElementById("helpBtn");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");

  const loginModal = document.getElementById("loginModal");
  const accessibilityModal = document.getElementById("accessibilityModal");
  const mobileSearchModal = document.getElementById("mobileSearchModal");

  const closeLoginModal = document.getElementById("closeLoginModal");
  const closeAccessibilityModal = document.getElementById(
    "closeAccessibilityModal"
  );
  const closeMobileSearchModal = document.getElementById(
    "closeMobileSearchModal"
  );

  // Abrir modales
  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => {
      console.log("Abriendo modal de login desde perfil");
      loginModal.style.display = "flex";
    });
  }

  if (helpBtn && accessibilityModal) {
    helpBtn.addEventListener("click", () => {
      accessibilityModal.style.display = "flex";
    });
  }

  if (mobileSearchBtn && mobileSearchModal) {
    mobileSearchBtn.addEventListener("click", () => {
      mobileSearchModal.style.display = "flex";
    });
  }

  // Cerrar modales
  if (closeLoginModal) {
    closeLoginModal.addEventListener("click", () => {
      loginModal.style.display = "none";
    });
  }

  if (closeAccessibilityModal) {
    closeAccessibilityModal.addEventListener("click", () => {
      accessibilityModal.style.display = "none";
    });
  }

  if (closeMobileSearchModal) {
    closeMobileSearchModal.addEventListener("click", () => {
      mobileSearchModal.style.display = "none";
    });
  }

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", (e) => {
    if (loginModal && e.target === loginModal) {
      loginModal.style.display = "none";
    }
    if (accessibilityModal && e.target === accessibilityModal) {
      accessibilityModal.style.display = "none";
    }
    if (mobileSearchModal && e.target === mobileSearchModal) {
      mobileSearchModal.style.display = "none";
    }
  });

  // Formulario de login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Inicio de sesión simulado. En una implementación real, aquí se procesarían las credenciales."
      );
      loginModal.style.display = "none";
    });
  }
}

// ===== ACCESIBILIDAD =====
function inicializarAccesibilidad() {
  // Light Mode
  const lightModeToggle = document.getElementById("lightModeToggle");
  if (lightModeToggle) {
    if (localStorage.getItem("lightMode") === "enabled") {
      document.body.classList.add("light-mode");
      lightModeToggle.checked = true;
    }

    lightModeToggle.addEventListener("change", () => {
      if (lightModeToggle.checked) {
        document.body.classList.add("light-mode");
        localStorage.setItem("lightMode", "enabled");
      } else {
        document.body.classList.remove("light-mode");
        localStorage.setItem("lightMode", "disabled");
      }
    });
  }

  // Text Size
  const textSizeToggle = document.getElementById("textSizeToggle");
  if (textSizeToggle) {
    textSizeToggle.addEventListener("change", () => {
      if (textSizeToggle.checked) {
        document.body.style.fontSize = "1.1rem";
      } else {
        document.body.style.fontSize = "1rem";
      }
    });
  }

  // Contrast
  const contrastToggle = document.getElementById("contrastToggle");
  if (contrastToggle) {
    contrastToggle.addEventListener("change", () => {
      if (contrastToggle.checked) {
        document.body.style.filter = "contrast(1.5)";
      } else {
        document.body.style.filter = "contrast(1)";
      }
    });
  }
}

// ===== DATOS DE EJEMPLO =====
const misPublicaciones = [
  {
    id: 1,
    titulo: "Análisis: El sistema táctico de Argentina en Qatar 2022",
    fecha: "10 Mar, 2025",
    vistas: "12.4K",
    likes: "856",
    comentarios: "45",
    categoria: "Análisis",
  },
  {
    id: 2,
    titulo: "Los jóvenes talentos que brillarán en el Mundial 2026",
    fecha: "8 Mar, 2025",
    vistas: "8.7K",
    likes: "423",
    comentarios: "23",
    categoria: "Jugadores",
  },
  {
    id: 3,
    titulo: "Historia de los mundiales: Los momentos más épicos",
    fecha: "5 Mar, 2025",
    vistas: "15.2K",
    likes: "1.2K",
    comentarios: "67",
    categoria: "Historia",
  },
  {
    id: 4,
    titulo: "Tecnología VAR: ¿Mejora o perjudica el fútbol?",
    fecha: "2 Mar, 2025",
    vistas: "9.8K",
    likes: "567",
    comentarios: "89",
    categoria: "Tecnología",
  },
];

const publicacionesVistas = [
  {
    id: 1,
    titulo: "Preparativos para el Mundial 2026: Estadios y sedes confirmadas",
    imagen:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    fecha: "Hoy",
    vistas: "25.4K",
  },
  {
    id: 2,
    titulo: "Nueva generación de estrellas que dominarán el fútbol",
    imagen:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    fecha: "Ayer",
    vistas: "18.7K",
  },
  {
    id: 3,
    titulo: "Revolución táctica: Sistemas de juego modernos",
    imagen:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    fecha: "Hace 2 días",
    vistas: "15.2K",
  },
];

const publicacionesGuardadas = [
  {
    id: 1,
    titulo: "Estadios más innovadores del Mundial 2026",
    imagen:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    fecha: "Guardado: 12 Mar",
    autor: "María González",
  },
  {
    id: 2,
    titulo: "Tácticas de los equipos favoritos para 2026",
    imagen:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    fecha: "Guardado: 10 Mar",
    autor: "Carlos López",
  },
  {
    id: 3,
    titulo: "Historia completa de los mundiales de fútbol",
    imagen:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    fecha: "Guardado: 8 Mar",
    autor: "Ana Martínez",
  },
];

// ===== MIS PUBLICACIONES =====
function cargarMisPublicaciones() {
  const lista = document.getElementById("listaMisPublicaciones");
  if (!lista) return;

  lista.innerHTML = "";

  misPublicaciones.forEach((publicacion) => {
    const elemento = document.createElement("button");
    elemento.id = "mis-publicaciones";
    elemento.className = "publicacion-item";
    elemento.setAttribute("onclick", `abrirPublicacion()`);
    elemento.innerHTML = `
            <div class="publicacion-header">
                <div style="flex: 1;">
                    <h4 class="publicacion-titulo">${publicacion.titulo}</h4>
                    <span class="publicacion-fecha">${publicacion.fecha}</span>
                </div>
                <button class="aprovar-publicacion-btn" data-id="${publicacion.id}">
                    <i class="fas fa-check"></i>
                </button>
                <button class="rechazar-publicacion-btn" data-id="${publicacion.id}">
                    <i class="fas fa-times"></i>
                </button>
                <button class="borrar-publicacion-btn" data-id="${publicacion.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button class="editar-publicacion-btn" data-id="${publicacion.id}">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
            <div class="publicacion-stats">
                <span><i class="far fa-eye"></i> ${publicacion.vistas}</span>
                <span><i class="far fa-thumbs-up"></i> ${publicacion.likes}</span>
                <span><i class="far fa-comment"></i> ${publicacion.comentarios}</span>
                <span class="publicacion-categoria">${publicacion.categoria}</span>
            </div>
        `;

    lista.appendChild(elemento);
  });
  // Inicializar botones de edición
  inicializarBotonesEdicion();
}

function abrirPublicacion() {
  // Construir la URL con el ID de la publicación.
  // Ejemplo: publicaciones.html?id=123
  const url = `publicaciones.html`;

  // Redirigir al usuario.
  window.location.href = url;
}

// ===== MODAL DE EDICIÓN =====
function inicializarModalEdicion() {
  // Crear modal de edición si no existe
  if (!document.getElementById("modalEdicion")) {
    const modalHTML = `
            <div class="modal-edicion" id="modalEdicion">
                <div class="modal-edicion-content">
                    <div class="modal-edicion-header">
                        <h3 class="modal-edicion-title">Opciones de Publicación</h3>
                        <button class="close-btn" id="closeModalEdicion">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-edicion-body">
                        <div class="opciones-edicion" id="opcionesEdicion">
                            <!-- Las opciones se cargarán dinámicamente -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Inicializar funcionalidad del modal
    const modalEdicion = document.getElementById("modalEdicion");
    const closeModalEdicion = document.getElementById("closeModalEdicion");

    if (closeModalEdicion) {
      closeModalEdicion.addEventListener("click", () => {
        modalEdicion.style.display = "none";
      });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener("click", (e) => {
      if (e.target === modalEdicion) {
        modalEdicion.style.display = "none";
      }
    });
  }
}

function inicializarBotonesEdicion() {
  document.querySelectorAll(".editar-publicacion-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const publicacionId = this.getAttribute("data-id");
      abrirModalEdicion(publicacionId);
    });
  });
}

function abrirModalEdicion(publicacionId) {
  const modalEdicion = document.getElementById("modalEdicion");
  const opcionesEdicion = document.getElementById("opcionesEdicion");

  if (!modalEdicion || !opcionesEdicion) return;

  // Cargar opciones en el modal
  opcionesEdicion.innerHTML = `
        <button class="opcion-btn" onclick="editarPublicacion(${publicacionId})">
            <i class="fas fa-edit"></i>
            <span>Editar Publicación</span>
        </button>
        <button class="opcion-btn" onclick="verEstadisticas(${publicacionId})">
            <i class="fas fa-chart-bar"></i>
            <span>Ver Estadísticas</span>
        </button>
        <button class="opcion-btn" onclick="compartirPublicacion(${publicacionId})">
            <i class="fas fa-share"></i>
            <span>Compartir</span>
        </button>
        <button class="opcion-btn eliminar" onclick="eliminarPublicacion(${publicacionId})">
            <i class="fas fa-trash"></i>
            <span>Eliminar Publicación</span>
        </button>
    `;

  modalEdicion.style.display = "flex";
}

// Funciones de las opciones del modal
function editarPublicacion(id) {
  alert(`Editando publicación ${id}`);
  cerrarModalEdicion();
}

function verEstadisticas(id) {
  alert(`Mostrando estadísticas de publicación ${id}`);
  cerrarModalEdicion();
}

function compartirPublicacion(id) {
  alert(`Compartiendo publicación ${id}`);
  cerrarModalEdicion();
}

function eliminarPublicacion(id) {
  if (
    confirm(
      "¿Estás seguro de que quieres eliminar esta publicación? Esta acción no se puede deshacer."
    )
  ) {
    alert(`Publicación ${id} eliminada (simulado)`);
    cerrarModalEdicion();
  }
}

function cerrarModalEdicion() {
  const modalEdicion = document.getElementById("modalEdicion");
  if (modalEdicion) {
    modalEdicion.style.display = "none";
  }
}

// ===== CAROUSELES =====
function inicializarCarouseles() {
  // Carrusel de Vistas Recientes
  const carouselVistas = document.getElementById("carouselVistas");
  const prevVistas = document.getElementById("prevVistas");
  const nextVistas = document.getElementById("nextVistas");

  // Carrusel de Guardados
  const carouselGuardados = document.getElementById("carouselGuardados");
  const prevGuardados = document.getElementById("prevGuardados");
  const nextGuardados = document.getElementById("nextGuardados");

  // Cargar datos en los carruseles
  cargarCarouselVistas(carouselVistas);
  cargarCarouselGuardados(carouselGuardados);

  // Inicializar funcionalidad de carruseles
  inicializarCarousel(carouselVistas, prevVistas, nextVistas);
  inicializarCarousel(carouselGuardados, prevGuardados, nextGuardados);
}

function cargarCarouselVistas(container) {
  if (!container) return;

  container.innerHTML = "";

  publicacionesVistas.forEach((publicacion) => {
    const elemento = document.createElement("div");
    elemento.className = "carousel-item";
    elemento.innerHTML = `
            <img src="${publicacion.imagen}" alt="${publicacion.titulo}" class="carousel-img">
            <div class="carousel-content">
                <h4 class="carousel-titulo">${publicacion.titulo}</h4>
                <div class="carousel-meta">
                    <span>${publicacion.fecha}</span>
                    <span>${publicacion.vistas}</span>
                </div>
            </div>
        `;

    container.appendChild(elemento);
  });
}

function cargarCarouselGuardados(container) {
  if (!container) return;

  container.innerHTML = "";

  publicacionesGuardadas.forEach((publicacion) => {
    const elemento = document.createElement("div");
    elemento.className = "carousel-item";
    elemento.innerHTML = `
            <img src="${publicacion.imagen}" alt="${publicacion.titulo}" class="carousel-img">
            <div class="carousel-content">
                <h4 class="carousel-titulo">${publicacion.titulo}</h4>
                <div class="carousel-meta">
                    <span>${publicacion.fecha}</span>
                    <span>por ${publicacion.autor}</span>
                </div>
            </div>
        `;

    container.appendChild(elemento);
  });
}

function inicializarCarousel(carousel, prevBtn, nextBtn) {
  let currentIndex = 0;
  const items = carousel.children;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }

  // Auto-advance cada 5 segundos
  setInterval(() => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
}

// ===== BOTONES =====
function inicializarBotones() {
  // Botón de editar perfil
  const editarPerfilBtn = document.querySelector(".editar-perfil-btn");
  if (editarPerfilBtn) {
    editarPerfilBtn.addEventListener("click", () => {
      alert("Funcionalidad de edición de perfil en desarrollo");
    });
  }

  // Botón de nueva publicación
  const nuevaPublicacionBtn = document.querySelector(".nueva-publicacion-btn");
  if (nuevaPublicacionBtn) {
    nuevaPublicacionBtn.addEventListener("click", () => {
      alert("Funcionalidad de nueva publicación en desarrollo");
    });
  }

  // ELIMINADO: Botón de cambiar foto removido

  // Filtro de publicaciones
  const filtroPublicaciones = document.getElementById("filtroPublicaciones");
  if (filtroPublicaciones) {
    filtroPublicaciones.addEventListener("change", (e) => {
      alert(`Filtrando por: ${e.target.value}`);
    });
  }
}

// ===== ESTADÍSTICAS EN TIEMPO REAL =====
function actualizarEstadisticas() {
  setInterval(() => {
    const stats = document.querySelectorAll(".estadistica-num");
    if (stats.length > 0) {
      stats[0].textContent = (
        2400 + Math.floor(Math.random() * 10)
      ).toLocaleString();
      stats[1].textContent = (
        568 + Math.floor(Math.random() * 5)
      ).toLocaleString();
    }
  }, 10000);
}

// Iniciar actualización de estadísticas
document.addEventListener("DOMContentLoaded", actualizarEstadisticas);
