// ===== FUNCIONALIDAD DE MODALES =====

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado - Inicializando mundiales");

  // ===== MODALES =====
  const loginBtn = document.getElementById("loginBtn");
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
    if (detallesModal && e.target === detallesModal) {
      detallesModal.style.display = "none";
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

  // ===== ACCESIBILIDAD =====
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

  // ===== NAVEGACIÓN =====
  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const postsBtn = document.getElementById("postsBtn");
  if (postsBtn) {
    postsBtn.addEventListener("click", () => {
      window.location.href = "publicaciones.html";
    });
  }

  // ===== MUNDIALES =====
  cargarMundiales();
  inicializarFiltros();
});

// ===== FUNCIONALIDAD DE MUNDIALES =====

// Datos de los mundiales (con imágenes de banderas y próximo mundial)
const mundiales = [
  {
    id: 1,
    anio: 2026,
    pais: "México/EEUU/Canadá",
    campeon: "Por determinar",
    subcampeon: "Por determinar",
    tercero: "Por determinar",
    sede: "México, Estados Unidos y Canadá",
    equipos: 48,
    partidos: 104,
    goles: "Por determinar",
    asistencia: "Por determinar",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png",
    destacado: true,
    proximo: true,
    descripcion:
      "La Copa Mundial de la FIFA 2026 será la vigésima tercera edición y se disputará en México, Estados Unidos y Canadá. Será el primer Mundial en tener 48 equipos participantes. México se convertirá en el primer país en organizar tres Copas del Mundo.",
  },
  {
    id: 2,
    anio: 2022,
    pais: "Catar",
    campeon: "Argentina",
    subcampeon: "Francia",
    tercero: "Croacia",
    sede: "Catar",
    equipos: 32,
    partidos: 64,
    goles: 172,
    asistencia: "3.4 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/800px-Flag_of_Qatar.svg.png",
    destacado: true,
    descripcion:
      "El Mundial de Catar 2022 fue la primera edición celebrada en el mundo árabe y en el otoño boreal. Argentina se coronó campeón en una emocionante final contra Francia.",
  },
  {
    id: 3,
    anio: 2018,
    pais: "Rusia",
    campeon: "Francia",
    subcampeon: "Croacia",
    tercero: "Bélgica",
    sede: "Rusia",
    equipos: 32,
    partidos: 64,
    goles: 169,
    asistencia: "3.0 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png",
    descripcion:
      "Rusia albergó por primera vez la Copa del Mundo. Francia se coronó campeona por segunda vez en su historia tras vencer a Croacia en la final.",
  },
  {
    id: 4,
    anio: 2014,
    pais: "Brasil",
    campeon: "Alemania",
    subcampeon: "Argentina",
    tercero: "Países Bajos",
    sede: "Brasil",
    equipos: 32,
    partidos: 64,
    goles: 171,
    asistencia: "3.4 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
    descripcion:
      "Brasil organizó el Mundial por segunda vez. Alemania se coronó campeona por cuarta vez tras vencer a Argentina con un gol de Mario Götze en el tiempo extra.",
  },
  {
    id: 5,
    anio: 2010,
    pais: "Sudáfrica",
    campeon: "España",
    subcampeon: "Países Bajos",
    tercero: "Alemania",
    sede: "Sudáfrica",
    equipos: 32,
    partidos: 64,
    goles: 145,
    asistencia: "3.2 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png",
    descripcion:
      "Primer Mundial celebrado en África. España ganó su primer título mundial tras vencer a Países Bajos con un gol de Andrés Iniesta en el tiempo extra.",
  },
  {
    id: 6,
    anio: 2006,
    pais: "Alemania",
    campeon: "Italia",
    subcampeon: "Francia",
    tercero: "Alemania",
    sede: "Alemania",
    equipos: 32,
    partidos: 64,
    goles: 147,
    asistencia: "3.4 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png",
    descripcion:
      "Alemania organizó un exitoso Mundial. Italia ganó su cuarto título tras vencer a Francia en la tanda de penaltis, en un partido recordado por el cabezazo de Zidane.",
  },
  {
    id: 7,
    anio: 2002,
    pais: "Corea/Japón",
    campeon: "Brasil",
    subcampeon: "Alemania",
    tercero: "Turquía",
    sede: "Corea del Sur / Japón",
    equipos: 32,
    partidos: 64,
    goles: 161,
    asistencia: "2.7 millones",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
    descripcion:
      "Primer Mundial coorganizado por dos países y primero en Asia. Brasil ganó su quinto título tras vencer a Alemania con dos goles de Ronaldo.",
  },
  {
    id: 8,
    anio: 1998,
    pais: "Francia",
    campeon: "Francia",
    subcampeon: "Brasil",
    tercero: "Croacia",
    sede: "Francia",
    equipos: 32,
    partidos: 64,
    goles: 171,
    asistencia: "2.8 millions",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png",
    descripcion:
      "Francia organizó el Mundial por segunda vez y ganó su primer título como anfitrión, venciendo a Brasil 3-0 en una final dominante.",
  },
];

// Modal de detalles
const detallesModal = document.createElement("div");
detallesModal.className = "modal";
detallesModal.id = "detallesModal";
detallesModal.style.display = "none";

// Cargar mundiales en el grid
function cargarMundiales(mundialesFiltrados = mundiales) {
  const grid = document.getElementById("mundialesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  mundialesFiltrados.forEach((mundial) => {
    const card = document.createElement("div");
    card.id = `mundial-${mundial.id}`;
    card.className = `mundial-card ${
      mundial.destacado ? "mundial-reciente" : ""
    }`;
    card.innerHTML = `
                <img src="${mundial.imagen}" alt="Mundial ${mundial.anio} en ${
      mundial.pais
    }" class="mundial-imagen">
                ${
                  mundial.proximo
                    ? '<div class="mundial-badge proximo"><i class="fas fa-clock"></i> Próximo</div>'
                    : mundial.destacado
                    ? '<div class="mundial-badge"><i class="fas fa-star"></i> Más Reciente</div>'
                    : ""
                }
                
                <div class="mundial-info">
                    <div class="mundial-anio">
                        <i class="fas fa-trophy"></i>
                        Copa del Mundo ${mundial.anio}
                    </div>
                    
                    <h3 class="mundial-titulo">${mundial.pais} ${
      mundial.anio
    }</h3>
                    
                    <div class="mundial-detalles">
                        <div class="mundial-detalle">
                            <i class="fas fa-flag"></i>
                            <span><strong>Campeón:</strong> ${
                              mundial.campeon
                            }</span>
                        </div>
                        <div class="mundial-detalle">
                            <i class="fas fa-medal"></i>
                            <span><strong>Subcampeón:</strong> ${
                              mundial.subcampeon
                            }</span>
                        </div>
                        <div class="mundial-detalle">
                            <i class="fas fa-map-marker-alt"></i>
                            <span><strong>Sede:</strong> ${mundial.sede}</span>
                        </div>
                    </div>
                    
                    <div class="mundial-estadisticas">
                        <div class="estadistica">
                            <span class="estadistica-valor">${
                              mundial.equipos
                            }</span>
                            <span class="estadistica-label">Equipos</span>
                        </div>
                        <div class="estadistica">
                            <span class="estadistica-valor">${
                              mundial.partidos
                            }</span>
                            <span class="estadistica-label">Partidos</span>
                        </div>
                        <div class="estadistica">
                            <span class="estadistica-valor">${
                              mundial.goles
                            }</span>
                            <span class="estadistica-label">Goles</span>
                        </div>
                    </div>
                    
                    <div class="mundial-acciones">
                        <button class="btn-detalles" onclick="verDetallesMundial(${
                          mundial.id
                        })">
                            <i class="fas fa-info-circle"></i>
                            Ver Detalles
                        </button>
                        <button class="btn-detalles" onclick="abrirMundial()">
                            <i class="fas fa-arrow-right"></i>
                            Ir al Mundial
                        </button>
                    </div>
                </div>
        `;

    grid.appendChild(card);
  });
}

function abrirMundial() {
  // 1. Construir la URL: Redirigimos a mundial.html y le adjuntamos el ID como un parámetro
  // Ejemplo de URL generada: mundial.html?id=2022
  const url = `mundial.html`;

  // 2. Redirigir al usuario a la nueva URL
  window.location.href = url;
}
// Inicializar filtros y ordenamiento
function inicializarFiltros() {
  const filtroAnio = document.getElementById("filtroAnio");
  const ordenMundiales = document.getElementById("ordenMundiales");

  if (filtroAnio) {
    filtroAnio.addEventListener("change", aplicarFiltros);
  }

  if (ordenMundiales) {
    ordenMundiales.addEventListener("change", aplicarFiltros);
  }
}

// Aplicar filtros y ordenamiento
function aplicarFiltros() {
  const filtroAnio = document.getElementById("filtroAnio").value;
  const orden = document.getElementById("ordenMundiales").value;

  let mundialesFiltrados = [...mundiales];

  // Aplicar filtro por año
  if (filtroAnio !== "todos") {
    const anioInicio = parseInt(filtroAnio);
    mundialesFiltrados = mundialesFiltrados.filter((mundial) => {
      if (anioInicio === 1930)
        return mundial.anio >= 1930 && mundial.anio <= 1938;
      if (anioInicio === 1950)
        return mundial.anio >= 1950 && mundial.anio <= 1958;
      if (anioInicio === 1960)
        return mundial.anio >= 1960 && mundial.anio <= 1970;
      if (anioInicio === 1974)
        return mundial.anio >= 1974 && mundial.anio <= 1982;
      if (anioInicio === 1986)
        return mundial.anio >= 1986 && mundial.anio <= 1994;
      if (anioInicio === 1998)
        return mundial.anio >= 1998 && mundial.anio <= 2006;
      if (anioInicio === 2010)
        return mundial.anio >= 2010 && mundial.anio <= 2018;
      if (anioInicio === 2022) return mundial.anio >= 2022;
      return true;
    });
  }

  // Aplicar ordenamiento
  switch (orden) {
    case "reciente":
      mundialesFiltrados.sort((a, b) => b.anio - a.anio);
      break;
    case "antiguo":
      mundialesFiltrados.sort((a, b) => a.anio - b.anio);
      break;
    case "pais":
      mundialesFiltrados.sort((a, b) => a.pais.localeCompare(b.pais));
      break;
    case "campeon":
      mundialesFiltrados.sort((a, b) => a.campeon.localeCompare(b.campeon));
      break;
  }

  cargarMundiales(mundialesFiltrados);
}

// Ver detalles del mundial en modal profesional
function verDetallesMundial(id) {
  const mundial = mundiales.find((m) => m.id === id);
  if (!mundial) return;

  // Crear contenido del modal
  detallesModal.innerHTML = `
        <div class="modal-detalles-content">
            <div class="detalles-header">
                <h3 class="detalles-titulo">Copa del Mundo ${mundial.anio} - ${
    mundial.pais
  }</h3>
                <button class="close-btn" onclick="cerrarDetallesModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="detalles-body">
                <div class="detalles-grid">
                    <div class="detalles-info">
                        <h4>Información General</h4>
                        <div class="detalles-lista">
                            <div class="detalle-item">
                                <span class="detalle-label">Año:</span>
                                <span class="detalle-valor">${
                                  mundial.anio
                                }</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">País Anfitrión:</span>
                                <span class="detalle-valor">${
                                  mundial.pais
                                }</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">Sede Principal:</span>
                                <span class="detalle-valor">${
                                  mundial.sede
                                }</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">Equipos Participantes:</span>
                                <span class="detalle-valor">${
                                  mundial.equipos
                                }</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">Total de Partidos:</span>
                                <span class="detalle-valor">${
                                  mundial.partidos
                                }</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">Asistencia Total:</span>
                                <span class="detalle-valor">${
                                  mundial.asistencia
                                }</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detalles-estadisticas">
                        <h4>Estadísticas</h4>
                        <div class="estadisticas-grid">
                            <div class="estadistica-detalle">
                                <span class="estadistica-numero">${
                                  mundial.equipos
                                }</span>
                                <span class="estadistica-texto">Equipos</span>
                            </div>
                            <div class="estadistica-detalle">
                                <span class="estadistica-numero">${
                                  mundial.partidos
                                }</span>
                                <span class="estadistica-texto">Partidos</span>
                            </div>
                            <div class="estadistica-detalle">
                                <span class="estadistica-numero">${
                                  mundial.goles
                                }</span>
                                <span class="estadistica-texto">Goles</span>
                            </div>
                            <div class="estadistica-detalle">
                                <span class="estadistica-numero">${
                                  mundial.asistencia.split(" ")[0]
                                }</span>
                                <span class="estadistica-texto">Millones de Asistentes</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="detalles-podium">
                    <h4 class="podium-titulo">Podio del Torneo</h4>
                    <div class="podium-lugares">
                        <div class="podium-lugar oro">
                            <div class="podium-posicion">🥇 Primer Lugar</div>
                            <div class="podium-pais">${mundial.campeon}</div>
                        </div>
                        <div class="podium-lugar plata">
                            <div class="podium-posicion">🥈 Segundo Lugar</div>
                            <div class="podium-pais">${mundial.subcampeon}</div>
                        </div>
                        <div class="podium-lugar bronce">
                            <div class="podium-posicion">🥉 Tercer Lugar</div>
                            <div class="podium-pais">${mundial.tercero}</div>
                        </div>
                    </div>
                </div>
                
                ${
                  mundial.descripcion
                    ? `
                    <div class="detalles-descripcion" style="margin-top: 2rem; padding: 1rem; background: rgba(242,242,242,0.1); border-radius: 8px;">
                        <h4 style="color: var(--secondary-color); margin-bottom: 0.5rem;">Descripción</h4>
                        <p style="color: var(--text-color); line-height: 1.6;">${mundial.descripcion}</p>
                    </div>
                `
                    : ""
                }
            </div>
        </div>
    `;

  // Agregar modal al body si no existe
  if (!document.getElementById("detallesModal")) {
    document.body.appendChild(detallesModal);
  }

  // Mostrar modal
  detallesModal.style.display = "flex";
}

// Cerrar modal de detalles
function cerrarDetallesModal() {
  detallesModal.style.display = "none";
}
