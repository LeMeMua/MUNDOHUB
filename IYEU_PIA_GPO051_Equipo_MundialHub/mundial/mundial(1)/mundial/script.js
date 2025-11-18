// Carousel functionality
const carousel = document.getElementById("newsCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

if (carousel && prevBtn && nextBtn) {
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 2;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < 2 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Auto-advance carousel
  setInterval(() => {
    currentIndex = currentIndex < 2 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
}

// Modal functionality
const loginBtn = document.getElementById("loginBtn");
const helpBtn = document.getElementById("helpBtn");
const homeBtn = document.getElementById("homeBtn");
const tutorialBtn = document.getElementById("tutorialBtn");
const adminBtn = document.getElementById("adminBtn");
const usuarioBtn = document.getElementById("usuarioBtn");
const mobileSearchBtn = document.getElementById("mobileSearchBtn");

const loginModal = document.getElementById("loginModal");
const tutorialModal = document.getElementById("tutorialModal");
const accessibilityModal = document.getElementById("accessibilityModal");
const mobileSearchModal = document.getElementById("mobileSearchModal");

const closeLoginModal = document.getElementById("closeLoginModal");
const closeTutorialModal = document.getElementById("closeTutorialModal");
const closeAccessibilityModal = document.getElementById(
  "closeAccessibilityModal"
);
const closeMobileSearchModal = document.getElementById(
  "closeMobileSearchModal"
);

// Funcionalidad de modales
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
  document.body.classList.add("modal-open");
});

helpBtn.addEventListener("click", () => {
  accessibilityModal.style.display = "flex";
  document.body.classList.add("modal-open");
});

tutorialBtn.addEventListener("click", () => {
  tutorialModal.style.display = "flex";
  document.body.classList.add("modal-open");
});

mobileSearchBtn.addEventListener("click", () => {
  mobileSearchModal.style.display = "flex";
  document.body.classList.add("modal-open");
});

closeLoginModal.addEventListener("click", () => {
  loginModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

closeTutorialModal.addEventListener("click", () => {
  tutorialModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

closeAccessibilityModal.addEventListener("click", () => {
  accessibilityModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

closeMobileSearchModal.addEventListener("click", () => {
  mobileSearchModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  if (e.target === tutorialModal) {
    tutorialModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  if (e.target === accessibilityModal) {
    accessibilityModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  if (e.target === mobileSearchModal) {
    mobileSearchModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

// Form submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
  loginModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Navigation buttons - Redirección a páginas
document.getElementById("worldCupBtn").addEventListener("click", () => {
  window.location.href = "mundiales.html";
});

document.getElementById("postsBtn").addEventListener("click", () => {
  window.location.href = "publicaciones.html";
});

if (adminBtn) {
  adminBtn.addEventListener("click", () => {
    window.location.href = "admin.html";
  });
}

if (usuarioBtn) {
  usuarioBtn.addEventListener("click", () => {
    window.location.href = "usuario.html";
  });
}

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// ===== FUNCIONALIDADES DE ACCESIBILIDAD MEJORADAS =====

// Elementos de accesibilidad
const lightModeToggle = document.getElementById("lightModeToggle");
const textSizeToggle = document.getElementById("textSizeToggle");
const contrastToggle = document.getElementById("contrastToggle");
const languageSelect = document.getElementById("languageSelect");
const startReader = document.getElementById("startReader");
const stopReader = document.getElementById("stopReader");
const blueLightToggle = document.getElementById("blueLightToggle");
const colorblindSelect = document.getElementById("colorblindSelect");
const resetAccessibility = document.getElementById("resetAccessibility");
const resetAccessibilityFull = document.getElementById(
  "resetAccessibilityFull"
);

let speechSynthesis = null;

// Light mode functionality
if (lightModeToggle) {
  // Check for saved light mode preference
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

// Text size functionality
if (textSizeToggle) {
  // Check for saved text size preference
  if (localStorage.getItem("largeText") === "enabled") {
    document.body.classList.add("large-text");
    textSizeToggle.checked = true;
  }

  textSizeToggle.addEventListener("change", () => {
    if (textSizeToggle.checked) {
      document.body.classList.add("large-text");
      localStorage.setItem("largeText", "enabled");
    } else {
      document.body.classList.remove("large-text");
      localStorage.setItem("largeText", "disabled");
    }
  });
}

// ===== FUNCIÓN MEJORADA PARA APLICAR FILTROS =====

function applyAccessibilityFilters() {
  let filters = [];

  // Remover todas las clases de filtros primero
  document.body.classList.remove(
    "blue-light-filter",
    "colorblind-protanopia",
    "colorblind-deuteranopia",
    "colorblind-tritanopia",
    "high-contrast-active"
  );

  // Alto contraste - aplicar via clase CSS
  if (contrastToggle && contrastToggle.checked) {
    document.body.classList.add("high-contrast-active");
  }

  // Luz azul - aplicar via clase CSS
  if (blueLightToggle && blueLightToggle.checked) {
    document.body.classList.add("blue-light-filter");
  }

  // Daltonismo - aplicar via clase CSS
  const colorblindMode = colorblindSelect ? colorblindSelect.value : "none";
  if (colorblindMode !== "none") {
    document.body.classList.add(`colorblind-${colorblindMode}`);
  }

  // Para combinaciones complejas, usar filter CSS directamente
  const activeFilters = [];

  if (contrastToggle && contrastToggle.checked) {
    activeFilters.push("contrast(1.8) brightness(1.2)");
  }

  if (blueLightToggle && blueLightToggle.checked) {
    activeFilters.push("sepia(0.4) hue-rotate(200deg) brightness(1.1)");
  }

  // Aplicar filtros combinados solo si hay múltiples filtros activos
  if (activeFilters.length > 1) {
    document.body.style.filter = activeFilters.join(" ");
  } else if (activeFilters.length === 1) {
    document.body.style.filter = activeFilters[0];
  } else {
    document.body.style.filter = "none";
  }
}

// Corregir evento del filtro de luz azul
if (blueLightToggle) {
  blueLightToggle.addEventListener("change", function () {
    applyAccessibilityFilters();
    localStorage.setItem("blueLightFilter", this.checked);
  });
}

// Corregir evento de alto contraste
if (contrastToggle) {
  contrastToggle.addEventListener("change", function () {
    applyAccessibilityFilters();
    localStorage.setItem("highContrast", this.checked);
  });
}

// Corregir evento de daltonismo
if (colorblindSelect) {
  colorblindSelect.addEventListener("change", function () {
    applyAccessibilityFilters();
    localStorage.setItem("colorblindMode", this.value);
  });
}

// ===== CORRECCIÓN PARA EL CAMBIO DE IDIOMA =====

// Cambio de Idioma - VERSIÓN CORREGIDA
if (languageSelect) {
  // Cargar idioma guardado al inicio
  const savedLanguage = localStorage.getItem("preferredLanguage") || "es";
  languageSelect.value = savedLanguage;

  // Aplicar el idioma guardado inmediatamente
  changeLanguage(savedLanguage);

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("preferredLanguage", selectedLanguage);
    changeLanguage(selectedLanguage);

    // Forzar actualización del lector de pantalla
    if (startReader) startReader.disabled = false;
    if (stopReader) stopReader.disabled = true;
  });
}

// Función mejorada de cambio de idioma
function changeLanguage(lang) {
  console.log("Cambiando idioma a:", lang); // Para debug

  const translations = {
    es: {
      // Títulos y textos principales
      title: "MUNDIALHUB - Tu portal de fútbol mundial",
      siteName: "MUNDIALHUB",
      ultimasNoticias: "Últimas Noticias",

      // Navegación
      mundiales: "Mundiales",
      publicaciones: "Publicaciones",
      buscarPlaceholder: "Buscar en MUNDIALHUB...",

      // Botones de tutorial
      usuario: "Usuario",
      tutorial: "Tutorial",
      admin: "Admin",

      // Modal de Login
      iniciarSesion: "Iniciar Sesión",
      usuarioEmail: "Usuario o Email",
      contraseña: "Contraseña",
      ingresarUsuario: "Ingresa tu usuario o email",
      ingresarContraseña: "Ingresa tu contraseña",
      iniciarSesionBtn: "Iniciar Sesión",
      noCuenta: "¿No tienes cuenta?",
      registrate: "Regístrate aquí",

      // Modal de Tutorial
      tutorialTitle: "Cómo usar MUNDIALHUB",
      navegaMundiales: "Navega por los mundiales",
      navegaMundialesDesc:
        'Usa el botón "Mundiales" en la parte superior para explorar información sobre todas las ediciones de la Copa del Mundo.',
      leePublicaciones: "Lee las publicaciones",
      leePublicacionesDesc:
        'Accede a artículos y noticias recientes haciendo clic en el botón "Publicaciones".',
      buscaContenido: "Busca contenido específico",
      buscaContenidoDesc:
        "Utiliza la barra de búsqueda en la parte superior derecha para encontrar información sobre equipos, jugadores o eventos específicos.",
      iniciaSesion: "Inicia sesión",
      iniciaSesionDesc:
        "Haz clic en el icono de usuario para acceder a tu cuenta y personalizar tu experiencia.",

      // Modal de Accesibilidad
      accesibilidadTitle: "Opciones de Accesibilidad",
      modoClaro: "Modo Claro",
      modoClaroDesc: "Cambia entre modo oscuro y claro para mejor visibilidad",
      textoGrande: "Texto más grande",
      textoGrandeDesc: "Aumenta el tamaño del texto para mejor legibilidad",
      altoContraste: "Alto contraste",
      altoContrasteDesc:
        "Mejora el contraste de colores para mejor visibilidad",
      idioma: "Idioma",
      idiomaDesc: "Selecciona el idioma de la interfaz",
      lectorPantalla: "Lector de pantalla",
      lectorPantallaDesc: "Activa la lectura en voz alta del contenido",
      filtroLuzAzul: "Filtro luz azul",
      filtroLuzAzulDesc: "Reduce la luz azul para mayor comodidad visual",
      modoDaltonismo: "Modo daltonismo",
      modoDaltonismoDesc:
        "Ajusta los colores para diferentes tipos de daltonismo",
      restablecer: "Restablecer",
      restablecerDesc: "Vuelve a la configuración original del sitio",
      restablecerTodo: "Restablecer toda la configuración",

      // Modal de Búsqueda
      buscarTitle: "Buscar en MUNDIALHUB",
      escribirBusqueda: "Escribe lo que buscas...",
      buscarBtn: "Buscar",

      // Footer
      footerText1: "MUNDIALHUB © 2025",
      footerText2:
        "Tu portal de referencia para todo sobre los mundiales de fútbol",

      // Contenido del carrusel
      preparativosMundial: "Preparativos para el próximo Mundial",
      preparativosDesc:
        "Conoce todos los detalles de la próxima sede del torneo más importante del fútbol mundial.",
      nuevosEstadios: "Nuevos estadios de última generación",
      nuevosEstadiosDesc:
        "Descubre las innovaciones tecnológicas en los estadios para la próxima edición.",
      estrellasTorneo: "Las estrellas que brillarán en el próximo torneo",
      estrellasDesc:
        "Un análisis de los jugadores que serán protagonistas en la próxima Copa del Mundo.",
    },

    en: {
      // Main titles and texts
      title: "MUNDIALHUB - Your world football portal",
      siteName: "MUNDIALHUB",
      ultimasNoticias: "Latest News",

      // Navigation
      mundiales: "World Cups",
      publicaciones: "Publications",
      buscarPlaceholder: "Search in MUNDIALHUB...",

      // Tutorial buttons
      usuario: "User",
      tutorial: "Tutorial",
      admin: "Admin",

      // Login Modal
      iniciarSesion: "Login",
      usuarioEmail: "Username or Email",
      contraseña: "Password",
      ingresarUsuario: "Enter your username or email",
      ingresarContraseña: "Enter your password",
      iniciarSesionBtn: "Login",
      noCuenta: "Don't have an account?",
      registrate: "Register here",

      // Tutorial Modal
      tutorialTitle: "How to use MUNDIALHUB",
      navegaMundiales: "Browse World Cups",
      navegaMundialesDesc:
        "Use the 'World Cups' button at the top to explore information about all World Cup editions.",
      leePublicaciones: "Read publications",
      leePublicacionesDesc:
        "Access recent articles and news by clicking the 'Publications' button.",
      buscaContenido: "Search for specific content",
      buscaContenidoDesc:
        "Use the search bar in the top right to find information about specific teams, players or events.",
      iniciaSesion: "Login",
      iniciaSesionDesc:
        "Click on the user icon to access your account and customize your experience.",

      // Accessibility Modal
      accesibilidadTitle: "Accessibility Options",
      modoClaro: "Light Mode",
      modoClaroDesc: "Switch between dark and light mode for better visibility",
      textoGrande: "Larger Text",
      textoGrandeDesc: "Increase text size for better readability",
      altoContraste: "High Contrast",
      altoContrasteDesc: "Improve color contrast for better visibility",
      idioma: "Language",
      idiomaDesc: "Select the interface language",
      lectorPantalla: "Screen Reader",
      lectorPantallaDesc: "Activate text-to-speech for content reading",
      filtroLuzAzul: "Blue Light Filter",
      filtroLuzAzulDesc: "Reduce blue light for better visual comfort",
      modoDaltonismo: "Colorblind Mode",
      modoDaltonismoDesc:
        "Adjust colors for different types of color blindness",
      restablecer: "Reset",
      restablecerDesc: "Return to the original site configuration",
      restablecerTodo: "Reset All Settings",

      // Search Modal
      buscarTitle: "Search in MUNDIALHUB",
      escribirBusqueda: "Type what you're looking for...",
      buscarBtn: "Search",

      // Footer
      footerText1: "MUNDIALHUB © 2025",
      footerText2:
        "Your reference portal for everything about football World Cups",

      // Carousel content
      preparativosMundial: "Preparations for the next World Cup",
      preparativosDesc:
        "Learn all the details about the next host of the most important football tournament in the world.",
      nuevosEstadios: "New state-of-the-art stadiums",
      nuevosEstadiosDesc:
        "Discover technological innovations in stadiums for the next edition.",
      estrellasTorneo: "Stars who will shine in the next tournament",
      estrellasDesc:
        "An analysis of the players who will be protagonists in the next World Cup.",
    },

    pt: {
      // Títulos e textos principais
      title: "MUNDIALHUB - Seu portal de futebol mundial",
      siteName: "MUNDIALHUB",
      ultimasNoticias: "Últimas Notícias",

      // Navegação
      mundiales: "Copas do Mundo",
      publicaciones: "Publicações",
      buscarPlaceholder: "Pesquisar no MUNDIALHUB...",

      // Botões de tutorial
      usuario: "Usuário",
      tutorial: "Tutorial",
      admin: "Admin",

      // Modal de Login
      iniciarSesion: "Iniciar Sessão",
      usuarioEmail: "Usuário ou Email",
      contraseña: "Senha",
      ingresarUsuario: "Digite seu usuário ou email",
      ingresarContraseña: "Digite sua senha",
      iniciarSesionBtn: "Iniciar Sessão",
      noCuenta: "Não tem uma conta?",
      registrate: "Registre-se aqui",

      // Modal de Tutorial
      tutorialTitle: "Como usar o MUNDIALHUB",
      navegaMundiales: "Navegar pelas Copas do Mundo",
      navegaMundialesDesc:
        "Use o botão 'Copas do Mundo' no topo para explorar informações sobre todas as edições da Copa do Mundo.",
      leePublicaciones: "Ler publicações",
      leePublicacionesDesc:
        "Acesse artigos e notícias recentes clicando no botão 'Publicações'.",
      buscaContenido: "Buscar conteúdo específico",
      buscaContenidoDesc:
        "Use a barra de pesquisa no canto superior direito para encontrar informações sobre times, jogadores ou eventos específicos.",
      iniciaSesion: "Iniciar sessão",
      iniciaSesionDesc:
        "Clique no ícone de usuário para acessar sua conta e personalizar sua experiência.",

      // Modal de Acessibilidade
      accesibilidadTitle: "Opções de Acessibilidade",
      modoClaro: "Modo Claro",
      modoClaroDesc:
        "Alterne entre modo escuro e claro para melhor visibilidade",
      textoGrande: "Texto Maior",
      textoGrandeDesc: "Aumente o tamanho do texto para melhor legibilidade",
      altoContraste: "Alto Contraste",
      altoContrasteDesc:
        "Melhore o contraste de cores para melhor visibilidade",
      idioma: "Idioma",
      idiomaDesc: "Selecione o idioma da interface",
      lectorPantalla: "Leitor de Tela",
      lectorPantallaDesc: "Ative a leitura em voz alta do conteúdo",
      filtroLuzAzul: "Filtro de Luz Azul",
      filtroLuzAzulDesc: "Reduza a luz azul para maior conforto visual",
      modoDaltonismo: "Modo Daltonismo",
      modoDaltonismoDesc: "Ajuste as cores para diferentes tipos de daltonismo",
      restablecer: "Restabelecer",
      restablecerDesc: "Volte à configuração original do site",
      restablecerTodo: "Restabelecer Todas as Configurações",

      // Modal de Pesquisa
      buscarTitle: "Pesquisar no MUNDIALHUB",
      escribirBusqueda: "Digite o que você procura...",
      buscarBtn: "Pesquisar",

      // Footer
      footerText1: "MUNDIALHUB © 2025",
      footerText2:
        "Seu portal de referência para tudo sobre Copas do Mundo de futebol",

      // Conteúdo do carrossel
      preparativosMundial: "Preparativos para a próxima Copa do Mundo",
      preparativosDesc:
        "Conheça todos os detalhes da próxima sede do torneio mais importante do futebol mundial.",
      nuevosEstadios: "Novos estádios de última geração",
      nuevosEstadiosDesc:
        "Descubra as inovações tecnológicas nos estádios para a próxima edição.",
      estrellasTorneo: "As estrelas que brilharão no próximo torneio",
      estrellasDesc:
        "Uma análise dos jogadores que serão protagonistas na próxima Copa do Mundo.",
    },

    fr: {
      // Titres et textes principaux
      title: "MUNDIALHUB - Votre portail de football mondial",
      siteName: "MUNDIALHUB",
      ultimasNoticias: "Dernières Nouvelles",

      // Navigation
      mundiales: "Coupes du Monde",
      publicaciones: "Publications",
      buscarPlaceholder: "Rechercher dans MUNDIALHUB...",

      // Boutons de tutoriel
      usuario: "Utilisateur",
      tutorial: "Tutoriel",
      admin: "Admin",

      // Modal de Connexion
      iniciarSesion: "Connexion",
      usuarioEmail: "Nom d'utilisateur ou Email",
      contraseña: "Mot de passe",
      ingresarUsuario: "Entrez votre nom d'utilisateur ou email",
      ingresarContraseña: "Entrez votre mot de passe",
      iniciarSesionBtn: "Connexion",
      noCuenta: "Vous n'avez pas de compte ?",
      registrate: "Inscrivez-vous ici",

      // Modal de Tutoriel
      tutorialTitle: "Comment utiliser MUNDIALHUB",
      navegaMundiales: "Parcourir les Coupes du Monde",
      navegaMundialesDesc:
        "Utilisez le bouton 'Coupes du Monde' en haut pour explorer les informations sur toutes les éditions de la Coupe du Monde.",
      leePublicaciones: "Lire les publications",
      leePublicacionesDesc:
        "Accédez aux articles et actualités récentes en cliquant sur le bouton 'Publications'.",
      buscaContenido: "Rechercher du contenu spécifique",
      buscaContenidoDesc:
        "Utilisez la barre de recherche en haut à droite pour trouver des informations sur des équipes, joueurs ou événements spécifiques.",
      iniciaSesion: "Se connecter",
      iniciaSesionDesc:
        "Cliquez sur l'icône utilisateur pour accéder à votre compte et personnaliser votre expérience.",

      // Modal d'Accessibilité
      accesibilidadTitle: "Options d'Accessibilité",
      modoClaro: "Mode Clair",
      modoClaroDesc:
        "Basculer entre le mode sombre et clair pour une meilleure visibilité",
      textoGrande: "Texte Plus Grand",
      textoGrandeDesc: "Augmentez la taille du texto para mejor lisibilité",
      altoContraste: "Haut Contraste",
      altoContrasteDesc:
        "Améliorez le contraste des couleurs pour une meilleure visibilité",
      idioma: "Langue",
      idiomaDesc: "Sélectionnez la langue de l'interface",
      lectorPantalla: "Lecteur d'écran",
      lectorPantallaDesc: "Activez la lecture vocale du contenu",
      filtroLuzAzul: "Filtre Lumière Bleue",
      filtroLuzAzulDesc:
        "Réduisez la lumière bleue pour un meilleur confort visuel",
      modoDaltonismo: "Mode Daltonien",
      modoDaltonismoDesc:
        "Ajustez les couleurs pour différents types de daltonisme",
      restablecer: "Réinitialiser",
      restablecerDesc: "Revenir à la configuration originale du site",
      restablecerTodo: "Réinitialiser Tous les Paramètres",

      // Modal de Recherche
      buscarTitle: "Rechercher dans MUNDIALHUB",
      escribirBusqueda: "Tapez ce que vous cherchez...",
      buscarBtn: "Rechercher",

      // Footer
      footerText1: "MUNDIALHUB © 2025",
      footerText2:
        "Votre portail de référence pour tout sur les Coupes du Monde de football",

      // Contenu du carrousel
      preparativosMundial: "Préparatifs pour la prochaine Coupe du Monde",
      preparativosDesc:
        "Découvrez tous les détails du prochain hôte du tournoi de football le plus important au monde.",
      nuevosEstadios: "Nouveaux stades de dernière génération",
      nuevosEstadiosDesc:
        "Découvrez les innovations technologiques dans les stades pour la prochaine édition.",
      estrellasTorneo: "Les stars qui brilleront dans le prochain tournoi",
      estrellasDesc:
        "Une analyse des joueurs qui seront protagonistes dans la prochaine Coupe du Monde.",
    },
  };

  const t = translations[lang] || translations.es;

  console.log("Aplicando traducciones para:", lang); // Para debug

  // ===== ACTUALIZAR TODOS LOS TEXTOS DE LA PÁGINA =====

  try {
    // 1. Título de la página
    document.title = t.title;

    // 2. Header y navegación
    const siteName = document.querySelector(".site-name");
    if (siteName) siteName.textContent = t.siteName;

    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle) sectionTitle.textContent = t.ultimasNoticias;

    // 3. Botones de navegación
    const mundialBtn = document.getElementById("worldCupBtn");
    const postsBtn = document.getElementById("postsBtn");

    if (mundialBtn) {
      const span = mundialBtn.querySelector("span");
      if (span) span.textContent = t.mundiales;
    }

    if (postsBtn) {
      const span = postsBtn.querySelector("span");
      if (span) span.textContent = t.publicaciones;
    }

    // 4. Botones de tutorial
    const usuarioBtn = document.getElementById("usuarioBtn");
    const tutorialBtnElement = document.getElementById("tutorialBtn");
    const adminBtn = document.getElementById("adminBtn");

    if (usuarioBtn) {
      const span = usuarioBtn.querySelector("span");
      if (span) span.textContent = t.usuario;
    }

    if (tutorialBtnElement) {
      const span = tutorialBtnElement.querySelector("span");
      if (span) span.textContent = t.tutorial;
    }

    if (adminBtn) {
      const span = adminBtn.querySelector("span");
      if (span) span.textContent = t.admin;
    }

    // 5. Modal de Login
    const loginModalTitle = document.querySelector("#loginModal .modal-title");
    if (loginModalTitle) loginModalTitle.textContent = t.iniciarSesion;

    const usernameLabel = document.querySelector('label[for="username"]');
    if (usernameLabel) usernameLabel.textContent = t.usuarioEmail;

    const passwordLabel = document.querySelector('label[for="password"]');
    if (passwordLabel) passwordLabel.textContent = t.contraseña;

    const usernameInput = document.getElementById("username");
    if (usernameInput) usernameInput.placeholder = t.ingresarUsuario;

    const passwordInput = document.getElementById("password");
    if (passwordInput) passwordInput.placeholder = t.ingresarContraseña;

    const submitBtn = document.querySelector("#loginForm .submit-btn");
    if (submitBtn) submitBtn.textContent = t.iniciarSesionBtn;

    const noCuentaText = document.querySelector("#loginModal p");
    if (noCuentaText) {
      noCuentaText.innerHTML = `${t.noCuenta} <a href="registro.html" style="color: var(--secondary-color); font-weight: 600">${t.registrate}</a>`;
    }

    // 6. Modal de Tutorial
    const tutorialModalTitle = document.querySelector(
      "#tutorialModal .modal-title"
    );
    if (tutorialModalTitle) tutorialModalTitle.textContent = t.tutorialTitle;

    // Actualizar pasos del tutorial
    const tutorialSteps = document.querySelectorAll(".tutorial-step");
    if (tutorialSteps.length >= 4) {
      // Paso 1
      const step1Title = tutorialSteps[0].querySelector("h4");
      const step1Desc = tutorialSteps[0].querySelector("p");
      if (step1Title) step1Title.textContent = t.navegaMundiales;
      if (step1Desc) step1Desc.textContent = t.navegaMundialesDesc;

      // Paso 2
      const step2Title = tutorialSteps[1].querySelector("h4");
      const step2Desc = tutorialSteps[1].querySelector("p");
      if (step2Title) step2Title.textContent = t.leePublicaciones;
      if (step2Desc) step2Desc.textContent = t.leePublicacionesDesc;

      // Paso 3
      const step3Title = tutorialSteps[2].querySelector("h4");
      const step3Desc = tutorialSteps[2].querySelector("p");
      if (step3Title) step3Title.textContent = t.buscaContenido;
      if (step3Desc) step3Desc.textContent = t.buscaContenidoDesc;

      // Paso 4
      const step4Title = tutorialSteps[3].querySelector("h4");
      const step4Desc = tutorialSteps[3].querySelector("p");
      if (step4Title) step4Title.textContent = t.iniciaSesion;
      if (step4Desc) step4Desc.textContent = t.iniciaSesionDesc;
    }

    // 7. Modal de Accesibilidad
    const accessibilityModalTitle = document.querySelector(
      "#accessibilityModal .modal-title"
    );
    if (accessibilityModalTitle)
      accessibilityModalTitle.textContent = t.accesibilidadTitle;

    // Actualizar todas las opciones de accesibilidad
    const optionGroups = document.querySelectorAll(".option-group");
    optionGroups.forEach((group, index) => {
      const optionLabel = group.querySelector(".option-label");
      const optionDesc = group.querySelector(".option-description");

      if (optionLabel && optionDesc) {
        switch (index) {
          case 0: // Modo Claro
            optionLabel.innerHTML = `<i class="fas fa-sun"></i> ${t.modoClaro}`;
            optionDesc.textContent = t.modoClaroDesc;
            break;
          case 1: // Texto Grande
            optionLabel.innerHTML = `<i class="fas fa-text-height"></i> ${t.textoGrande}`;
            optionDesc.textContent = t.textoGrandeDesc;
            break;
          case 2: // Alto Contraste
            optionLabel.innerHTML = `<i class="fas fa-adjust"></i> ${t.altoContraste}`;
            optionDesc.textContent = t.altoContrasteDesc;
            break;
          case 3: // Idioma
            optionLabel.innerHTML = `<i class="fas fa-language"></i> ${t.idioma}`;
            optionDesc.textContent = t.idiomaDesc;
            break;
          case 4: // Lector de pantalla
            optionLabel.innerHTML = `<i class="fas fa-volume-up"></i> ${t.lectorPantalla}`;
            optionDesc.textContent = t.lectorPantallaDesc;
            break;
          case 5: // Filtro luz azul
            optionLabel.innerHTML = `<i class="fas fa-moon"></i> ${t.filtroLuzAzul}`;
            optionDesc.textContent = t.filtroLuzAzulDesc;
            break;
          case 6: // Modo daltonismo
            optionLabel.innerHTML = `<i class="fas fa-palette"></i> ${t.modoDaltonismo}`;
            optionDesc.textContent = t.modoDaltonismoDesc;
            break;
          case 7: // Restablecer
            optionLabel.innerHTML = `<i class="fas fa-undo"></i> ${t.restablecer}`;
            optionDesc.textContent = t.restablecerDesc;
            break;
        }
      }
    });

    // Botón de restablecer completo
    const resetFullBtn = document.getElementById("resetAccessibilityFull");
    if (resetFullBtn) {
      resetFullBtn.innerHTML = `<i class="fas fa-undo"></i> ${t.restablecerTodo}`;
    }

    // 8. Modal de Búsqueda
    const searchModalTitle = document.querySelector(
      "#mobileSearchModal .modal-title"
    );
    if (searchModalTitle) searchModalTitle.textContent = t.buscarTitle;

    const searchInput = document.querySelector(
      "#mobileSearchModal .form-input"
    );
    if (searchInput) searchInput.placeholder = t.escribirBusqueda;

    const searchBtn = document.querySelector("#mobileSearchModal .submit-btn");
    if (searchBtn) searchBtn.textContent = t.buscarBtn;

    // 9. Footer
    const footerParagraphs = document.querySelectorAll("footer p");
    if (footerParagraphs.length >= 2) {
      footerParagraphs[0].textContent = t.footerText1;
      footerParagraphs[1].textContent = t.footerText2;
    }

    // 10. Contenido del carrusel
    const carouselItems = document.querySelectorAll(".carousel-item");
    if (carouselItems.length >= 3) {
      // Primer slide
      const title1 = carouselItems[0].querySelector(".carousel-title");
      const desc1 = carouselItems[0].querySelector("p");
      if (title1) title1.textContent = t.preparativosMundial;
      if (desc1) desc1.textContent = t.preparativosDesc;

      // Segundo slide
      const title2 = carouselItems[1].querySelector(".carousel-title");
      const desc2 = carouselItems[1].querySelector("p");
      if (title2) title2.textContent = t.nuevosEstadios;
      if (desc2) desc2.textContent = t.nuevosEstadiosDesc;

      // Tercer slide
      const title3 = carouselItems[2].querySelector(".carousel-title");
      const desc3 = carouselItems[2].querySelector("p");
      if (title3) title3.textContent = t.estrellasTorneo;
      if (desc3) desc3.textContent = t.estrellasDesc;
    }

    console.log("Traducción aplicada correctamente"); // Para debug
  } catch (error) {
    console.error("Error al aplicar traducción:", error);
  }
}

// Lector de Pantalla
if (startReader && stopReader) {
  startReader.addEventListener("click", () => {
    if ("speechSynthesis" in window) {
      stopCurrentSpeech();

      speechSynthesis = new SpeechSynthesisUtterance();
      speechSynthesis.text = getPageContentForReading();
      speechSynthesis.lang = getSpeechLanguage();
      speechSynthesis.rate = 0.8;
      speechSynthesis.pitch = 1;
      speechSynthesis.volume = 1;

      window.speechSynthesis.speak(speechSynthesis);

      // Actualizar estado de botones
      startReader.disabled = true;
      stopReader.disabled = false;

      speechSynthesis.onend = () => {
        startReader.disabled = false;
        stopReader.disabled = true;
      };

      speechSynthesis.onerror = () => {
        startReader.disabled = false;
        stopReader.disabled = true;
        alert("Error al reproducir el audio. Por favor, intenta nuevamente.");
      };
    } else {
      alert("Tu navegador no soporta la función de lectura en voz alta.");
    }
  });

  stopReader.addEventListener("click", () => {
    stopCurrentSpeech();
    startReader.disabled = false;
    stopReader.disabled = true;
  });
}

function stopCurrentSpeech() {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
}

function getSpeechLanguage() {
  const langMap = {
    es: "es-ES",
    en: "en-US",
    pt: "pt-BR",
    fr: "fr-FR",
  };
  const selectedLang = languageSelect ? languageSelect.value : "es";
  return langMap[selectedLang] || "es-ES";
}

function getPageContentForReading() {
  const mainContent = document.querySelector("main");
  const title = document.querySelector(".section-title")?.textContent || "";
  const carouselItems = document.querySelectorAll(".carousel-caption");

  let content = `${title}. `;

  carouselItems.forEach((item, index) => {
    const itemTitle = item.querySelector(".carousel-title")?.textContent || "";
    const itemText = item.querySelector("p")?.textContent || "";
    content += `Noticia ${index + 1}: ${itemTitle}. ${itemText}. `;
  });

  // Agregar información de navegación
  content += `Para navegar por el sitio, use los botones de Mundiales para ver información sobre copas del mundo, o Publicaciones para leer artículos recientes. `;

  return content;
}

// Botón de reset
if (resetAccessibility) {
  resetAccessibility.addEventListener("click", () => {
    // Desmarcar toggles
    const allToggles = document.querySelectorAll(".toggle-switch input");
    allToggles.forEach((toggle) => {
      toggle.checked = false;
    });

    // Resetear selects
    if (languageSelect) languageSelect.value = "es";
    if (colorblindSelect) colorblindSelect.value = "none";

    // Remover todas las clases de accesibilidad
    document.body.classList.remove(
      "light-mode",
      "large-text",
      "blue-light-filter",
      "colorblind-protanopia",
      "colorblind-deuteranopia",
      "colorblind-tritanopia"
    );

    // Resetear filtros CSS
    document.body.style.filter = "none";
    document.body.classList.remove("high-contrast-active");

    // Detener lectura
    stopCurrentSpeech();
    if (startReader) startReader.disabled = false;
    if (stopReader) stopReader.disabled = true;

    // Restaurar idioma
    changeLanguage("es");

    // Limpiar localStorage
    const keysToRemove = [
      "lightMode",
      "largeText",
      "highContrast",
      "blueLightFilter",
      "colorblindMode",
      "preferredLanguage",
    ];

    keysToRemove.forEach((key) => localStorage.removeItem(key));

    alert("Configuración de accesibilidad restablecida");
  });
}

// Botón de reset completo
if (resetAccessibilityFull) {
  resetAccessibilityFull.addEventListener("click", function () {
    // Resetear todos los toggles
    const allToggles = document.querySelectorAll(
      '.toggle-switch input[type="checkbox"]'
    );
    allToggles.forEach((toggle) => {
      toggle.checked = false;
    });

    // Resetear selects
    if (languageSelect) languageSelect.value = "es";
    if (colorblindSelect) colorblindSelect.value = "none";

    // Remover todas las clases de accesibilidad
    document.body.classList.remove(
      "light-mode",
      "large-text",
      "high-contrast-active",
      "blue-light-filter",
      "colorblind-protanopia",
      "colorblind-deuteranopia",
      "colorblind-tritanopia"
    );

    // Resetear filtros
    document.body.style.filter = "none";

    // Detener lectura
    stopCurrentSpeech();
    if (startReader) startReader.disabled = false;
    if (stopReader) stopReader.disabled = true;

    // Restaurar idioma
    changeLanguage("es");

    // Limpiar localStorage
    const keysToRemove = [
      "lightMode",
      "largeText",
      "highContrast",
      "blueLightFilter",
      "colorblindMode",
      "preferredLanguage",
    ];

    keysToRemove.forEach((key) => localStorage.removeItem(key));

    alert("Toda la configuración de accesibilidad ha sido restablecida");
  });
}

// Cargar preferencias corregidas al iniciar
document.addEventListener("DOMContentLoaded", function () {
  // Configuraciones existentes
  if (localStorage.getItem("lightMode") === "enabled") {
    document.body.classList.add("light-mode");
    if (lightModeToggle) lightModeToggle.checked = true;
  }

  if (localStorage.getItem("largeText") === "enabled") {
    document.body.classList.add("large-text");
    if (textSizeToggle) textSizeToggle.checked = true;
  }

  // Nuevas configuraciones corregidas
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && languageSelect) {
    languageSelect.value = savedLanguage;
    // El cambio de idioma ya se aplica automáticamente arriba
  }

  // Aplicar filtros correctamente
  setTimeout(() => {
    if (localStorage.getItem("highContrast") === "true" && contrastToggle) {
      contrastToggle.checked = true;
      document.body.classList.add("high-contrast-active");
    }

    if (localStorage.getItem("blueLightFilter") === "true" && blueLightToggle) {
      blueLightToggle.checked = true;
      document.body.classList.add("blue-light-filter");
    }

    const savedColorblindMode = localStorage.getItem("colorblindMode");
    if (savedColorblindMode && colorblindSelect) {
      colorblindSelect.value = savedColorblindMode;
      if (savedColorblindMode !== "none") {
        document.body.classList.add(`colorblind-${savedColorblindMode}`);
      }
    }

    // Aplicar filtros combinados
    applyAccessibilityFilters();
  }, 100);

  // Configurar estado inicial del lector
  if (startReader) startReader.disabled = false;
  if (stopReader) stopReader.disabled = true;
});

// Prevenir problemas de rendimiento
window.addEventListener("beforeunload", function () {
  stopCurrentSpeech();
});
