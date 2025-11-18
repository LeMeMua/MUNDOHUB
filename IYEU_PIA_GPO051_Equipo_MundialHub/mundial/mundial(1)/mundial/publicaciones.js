// ===== FUNCIONALIDAD DE MODALES =====

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Inicializando publicaciones');
    
    // ===== MODALES =====
    const loginBtn = document.getElementById('loginBtn');
    const helpBtn = document.getElementById('helpBtn');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    
    const loginModal = document.getElementById('loginModal');
    const accessibilityModal = document.getElementById('accessibilityModal');
    const mobileSearchModal = document.getElementById('mobileSearchModal');
    
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeAccessibilityModal = document.getElementById('closeAccessibilityModal');
    const closeMobileSearchModal = document.getElementById('closeMobileSearchModal');

    // Abrir modales
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            console.log('Abriendo modal de login');
            loginModal.style.display = 'flex';
        });
    }

    if (helpBtn && accessibilityModal) {
        helpBtn.addEventListener('click', () => {
            console.log('Abriendo modal de accesibilidad');
            accessibilityModal.style.display = 'flex';
        });
    }

    if (mobileSearchBtn && mobileSearchModal) {
        mobileSearchBtn.addEventListener('click', () => {
            console.log('Abriendo modal de búsqueda móvil');
            mobileSearchModal.style.display = 'flex';
        });
    }

    // Cerrar modales
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    if (closeAccessibilityModal) {
        closeAccessibilityModal.addEventListener('click', () => {
            accessibilityModal.style.display = 'none';
        });
    }

    if (closeMobileSearchModal) {
        closeMobileSearchModal.addEventListener('click', () => {
            mobileSearchModal.style.display = 'none';
        });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (loginModal && e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (accessibilityModal && e.target === accessibilityModal) {
            accessibilityModal.style.display = 'none';
        }
        if (mobileSearchModal && e.target === mobileSearchModal) {
            mobileSearchModal.style.display = 'none';
        }
    });

    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Inicio de sesión simulado. En una implementación real, aquí se procesarían las credenciales.');
            loginModal.style.display = 'none';
        });
    }

    // ===== ACCESIBILIDAD =====
    const lightModeToggle = document.getElementById('lightModeToggle');
    if (lightModeToggle) {
        // Verificar preferencia guardada
        if (localStorage.getItem('lightMode') === 'enabled') {
            document.body.classList.add('light-mode');
            lightModeToggle.checked = true;
        }

        lightModeToggle.addEventListener('change', () => {
            if (lightModeToggle.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('lightMode', 'enabled');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('lightMode', 'disabled');
            }
        });
    }

    const textSizeToggle = document.getElementById('textSizeToggle');
    if (textSizeToggle) {
        textSizeToggle.addEventListener('change', () => {
            if (textSizeToggle.checked) {
                document.body.style.fontSize = '1.1rem';
            } else {
                document.body.style.fontSize = '1rem';
            }
        });
    }

    const contrastToggle = document.getElementById('contrastToggle');
    if (contrastToggle) {
        contrastToggle.addEventListener('change', () => {
            if (contrastToggle.checked) {
                document.body.style.filter = 'contrast(1.5)';
            } else {
                document.body.style.filter = 'contrast(1)';
            }
        });
    }

    // ===== NAVEGACIÓN =====
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            console.log('Navegando a inicio');
            window.location.href = 'index.html';
        });
    }

    const worldCupBtn = document.getElementById('worldCupBtn');
    if (worldCupBtn) {
        worldCupBtn.addEventListener('click', () => {
            console.log('Navegando a mundiales');
            window.location.href = 'mundiales.html';
        });
    }

    // ===== PUBLICACIONES =====
    cargarPublicacionesLaterales();
    inicializarBotonesAccion();
    
    console.log('Todas las funcionalidades inicializadas correctamente');
});

// ===== FUNCIONALIDAD DE PUBLICACIONES =====

// Datos de ejemplo para las publicaciones
const publicaciones = [
    {
        id: 1,
        titulo: "Preparativos Avanzados para el Mundial 2026: Estadios y Sedes Confirmadas",
        descripcion: "La FIFA ha confirmado los avances significativos en los preparativos para la Copa del Mundo 2026 que se celebrará conjuntamente en Estados Unidos, Canadá y México. Con un formato expandido a 48 selecciones, este será el torneo más grande de la historia.",
        contenidoCompleto: `
            <p>La FIFA ha confirmado los avances significativos en los preparativos para la Copa del Mundo 2026 que se celebrará conjuntamente en Estados Unidos, Canadá y México. Con un formato expandido a 48 selecciones, este será el torneo más grande de la historia.</p>
            
            <div class="publicacion-destacados">
                <h4>Avances Confirmados:</h4>
                <ul>
                    <li><strong>16 sedes oficiales</strong> distribuidas en 11 ciudades estadounidenses, 2 canadienses y 3 mexicanas</li>
                    <li><strong>Inversión récord</strong> de $5 billones en infraestructura y tecnología</li>
                    <li><strong>Nuevo sistema de transporte</strong> entre ciudades sede para facilitar el movimiento de aficionados</li>
                    <li><strong>Tecnología 5G implementada</strong> en todos los estadios para experiencia inmersiva</li>
                    <li><strong>Programa de sostenibilidad</strong> con certificación LEED para todas las construcciones</li>
                </ul>
            </div>
        `,
        imagen: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        fecha: "15 Mar, 2025",
        vistas: "25.4K",
        likes: "1.2K",
        categoria: "Noticias Oficiales"
    },
    {
        id: 2,
        titulo: "Nueva Generación de Estrellas: Los Jóvenes Talentos que Dominarán el Mundial 2026",
        descripcion: "Conoce a la nueva generación de futbolistas que prometen revolucionar el Mundial 2026. Desde prodigios europeos hasta joyas sudamericanas.",
        contenidoCompleto: `
            <p>El panorama futbolístico mundial está experimentando un cambio generacional sin precedentes. Mientras las leyendas como Messi y Cristiano Ronaldo cierran sus ciclos, una nueva camada de jóvenes talentos se prepara para dominar el escenario mundial.</p>
            
            <div class="publicacion-destacados">
                <h4>Talentos Destacados:</h4>
                <ul>
                    <li><strong>Jude Bellingham</strong> (Inglaterra) - El mediocampista completo que redefine el juego</li>
                    <li><strong>Pedri González</strong> (España) - La elegancia y visión de juego excepcionales</li>
                    <li><strong>Jamal Musiala</strong> (Alemania) - La dribbling y creatividad alemana renovada</li>
                    <li><strong>Gavi</strong> (España) - La intensidad y calidad técnica combinadas</li>
                    <li><strong>Endrick</strong> (Brasil) - El nuevo goleador que promete seguir los pasos de los grandes</li>
                </ul>
            </div>
        `,
        imagen: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        fecha: "12 Mar, 2025",
        vistas: "18.7K",
        likes: "956",
        categoria: "Jugadores"
    },
    {
        id: 3,
        titulo: "Revolución Táctica: Análisis de los Sistemas de Juego que Marcarán el Mundial 2026",
        descripcion: "Los equipos están desarrollando sistemas tácticos innovadores que podrían cambiar el fútbol para siempre. Análisis exclusivo.",
        contenidoCompleto: `
            <p>El fútbol moderno está experimentando una revolución táctica sin precedentes. Los entrenadores más vanguardistas están desarrollando sistemas que combinan tradición con innovación tecnológica.</p>
            
            <div class="publicacion-destacados">
                <h4>Tendencias Tácticas:</h4>
                <ul>
                    <li><strong>Falso nueve colectivo</strong> - Rotaciones constantes en ataque</li>
                    <li><strong>Presión after possession</strong> - Recuperación inmediata tras pérdida</li>
                    <li><strong>Laterales invertidos</strong> - Defensas que juegan en mediocampo</li>
                    <li><strong>Transiciones ultrarrápidas</strong> - De defensa a ataque en 3 segundos</li>
                    <li><strong>Bloques medios flexibles</strong> - Adaptación constante durante el partido</li>
                </ul>
            </div>
        `,
        imagen: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        fecha: "10 Mar, 2025",
        vistas: "15.2K",
        likes: "1.1K",
        categoria: "Análisis Táctico"
    },
    {
        id: 4,
        titulo: "Historia Viva: Recordando los Momentos Más Épicos de los Mundiales",
        descripcion: "Un recorrido emocionante por los momentos que han definido la historia de los Mundiales de Fútbol.",
        contenidoCompleto: `
            <p>Desde el primer Mundial en 1930 hasta la última edición, el torneo ha regalado momentos que permanecen grabados en la memoria colectiva del fútbol mundial.</p>
            
            <div class="publicacion-destacados">
                <h4>Momentos Inolvidables:</h4>
                <ul>
                    <li><strong>El Maracanazo (1950)</strong> - Uruguay sorprende a Brasil en su propio feudo</li>
                    <li><strong>La mano de Dios (1986)</strong> - Maradona y su genialidad controvertida</li>
                    <li><strong>El gol de Zidane (2002)</strong> - Vaselina perfecta en la final</li>
                    <li><strong>El 7-1 de Alemania (2014)</strong> - La goleada histórica a Brasil</li>
                    <li><strong>La consagración de Messi (2022)</strong> - Argentina campeón tras 36 años</li>
                </ul>
            </div>
        `,
        imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        fecha: "8 Mar, 2025",
        vistas: "22.1K",
        likes: "2.3K",
        categoria: "Historia"
    },
    {
        id: 5,
        titulo: "Tecnología de Vanguardia: Cómo el VAR y la IA Transformarán el Fútbol en 2026",
        descripcion: "La tecnología está revolucionando el fútbol. Descubre cómo el VAR mejorado y la inteligencia artificial cambiarán el deporte.",
        contenidoCompleto: `
            <p>El Mundial 2026 será el más tecnológico de la historia. La FIFA ha anunciado implementaciones que cambiarán para siempre cómo se vive y se arbitra el fútbol.</p>
            
            <div class="publicacion-destacados">
                <h4>Innovaciones Tecnológicas:</h4>
                <ul>
                    <li><strong>VAR en tiempo real</strong> - Decisiones en menos de 10 segundos</li>
                    <li><strong>Inteligencia Artificial predictiva</strong> - Análisis de jugadas en milisegundos</li>
                    <li><strong>Realidad aumentada</strong> - Experiencia inmersiva para espectadores</li>
                    <li><strong>Sensorización completa</strong> - Datos en tiempo real de todos los jugadores</li>
                    <li><strong>Transmisión 8K HDR</strong> - Calidad de imagen nunca antes vista</li>
                </ul>
            </div>
        `,
        imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        fecha: "5 Mar, 2025",
        vistas: "14.5K",
        likes: "890",
        categoria: "Tecnología"
    }
];

// Cargar publicaciones en la lista lateral
function cargarPublicacionesLaterales() {
    const lista = document.getElementById('publicacionesLista');
    if (!lista) {
        console.log('No se encontró la lista de publicaciones');
        return;
    }
    
    console.log('Cargando publicaciones laterales');
    
    publicaciones.forEach((publicacion, index) => {
        const publicacionElement = document.createElement('div');
        publicacionElement.className = `publicacion-lateral ${index === 0 ? 'activa' : ''}`;
        publicacionElement.innerHTML = `
            <img src="${publicacion.imagen}" alt="${publicacion.titulo}" class="publicacion-lateral-img">
            <h4 class="publicacion-lateral-titulo">${publicacion.titulo}</h4>
            <div class="publicacion-lateral-meta">
                <span>${publicacion.fecha}</span>
                <span class="publicacion-lateral-categoria">${publicacion.categoria}</span>
            </div>
        `;
        
        publicacionElement.addEventListener('click', () => {
            // Remover clase activa de todas las publicaciones
            document.querySelectorAll('.publicacion-lateral').forEach(p => {
                p.classList.remove('activa');
            });
            
            // Agregar clase activa a la publicación clickeada
            publicacionElement.classList.add('activa');
            
            // Actualizar publicación principal
            actualizarPublicacionPrincipal(publicacion);
        });
        
        lista.appendChild(publicacionElement);
    });
    
    // Cargar la primera publicación como principal por defecto
    if (publicaciones.length > 0) {
        actualizarPublicacionPrincipal(publicaciones[0]);
    }
}

// Actualizar la publicación principal
function actualizarPublicacionPrincipal(publicacion) {
    console.log('Actualizando publicación principal:', publicacion.titulo);
    
    const tituloPrincipal = document.getElementById('tituloPrincipal');
    const descripcionPrincipal = document.getElementById('descripcionPrincipal');
    const imagenPrincipal = document.querySelector('.imagen-principal');
    const metaContainer = document.querySelector('.publicacion-meta');
    
    if (tituloPrincipal) tituloPrincipal.textContent = publicacion.titulo;
    if (descripcionPrincipal) descripcionPrincipal.innerHTML = publicacion.contenidoCompleto;
    if (imagenPrincipal) {
        imagenPrincipal.src = publicacion.imagen;
        imagenPrincipal.alt = publicacion.titulo;
    }
    if (metaContainer) {
        metaContainer.innerHTML = `
            <span class="publicacion-fecha"><i class="far fa-calendar"></i> ${publicacion.fecha}</span>
            <span class="publicacion-vistas"><i class="far fa-eye"></i> ${publicacion.vistas}</span>
            <span class="publicacion-likes"><i class="far fa-thumbs-up"></i> ${publicacion.likes}</span>
            <span class="publicacion-categoria"><i class="fas fa-tag"></i> ${publicacion.categoria}</span>
        `;
    }
    
    // Scroll suave hacia la publicación principal en dispositivos móviles
    if (window.innerWidth <= 1024) {
        const publicacionPrincipal = document.querySelector('.publicacion-principal');
        if (publicacionPrincipal) {
            publicacionPrincipal.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }
}

// Funcionalidad de los botones de acción
function inicializarBotonesAccion() {
    const accionBtns = document.querySelectorAll('.accion-btn');
    console.log('Inicializando botones de acción:', accionBtns.length);
    
    accionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            // Efecto visual al hacer clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simular funcionalidades básicas
            if (text.textContent === 'Me gusta') {
                if (icon.classList.contains('far')) {
                    icon.classList.replace('far', 'fas');
                    this.style.color = 'var(--secondary-color)';
                    // Actualizar contador de likes (simulado)
                    const likesSpan = document.querySelector('.publicacion-likes');
                    if (likesSpan) {
                        const currentLikes = parseInt(likesSpan.textContent);
                        likesSpan.textContent = `${currentLikes + 1}`;
                    }
                } else {
                    icon.classList.replace('fas', 'far');
                    this.style.color = '';
                    // Actualizar contador de likes (simulado)
                    const likesSpan = document.querySelector('.publicacion-likes');
                    if (likesSpan) {
                        const currentLikes = parseInt(likesSpan.textContent);
                        likesSpan.textContent = `${currentLikes - 1}`;
                    }
                }
            } else if (text.textContent === 'Guardar') {
                if (icon.classList.contains('far')) {
                    icon.classList.replace('far', 'fas');
                    this.style.color = 'var(--secondary-color)';
                    alert('Publicación guardada en tus favoritos');
                } else {
                    icon.classList.replace('fas', 'far');
                    this.style.color = '';
                    alert('Publicación removida de tus favoritos');
                }
            } else if (text.textContent === 'Comentar') {
                // Simular apertura de sección de comentarios
                alert('Sección de comentarios - En desarrollo');
            } else if (text.textContent === 'Compartir') {
                // Simular funcionalidad de compartir
                if (navigator.share) {
                    navigator.share({
                        title: document.getElementById('tituloPrincipal').textContent,
                        text: 'Mira esta publicación interesante en MUNDIALHUB',
                        url: window.location.href,
                    })
                    .catch(error => console.log('Error sharing:', error));
                } else {
                    alert('Función de compartir - En desarrollo');
                }
            }
        });
    });
}

// Mejorar la experiencia en móviles
function mejorarExperienciaMovil() {
    // Prevenir zoom en inputs en iOS
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            document.body.style.zoom = "100%";
        }
    });
}

// Inicializar mejoras para móviles
document.addEventListener('DOMContentLoaded', mejorarExperienciaMovil);