// ===== FUNCIONALIDAD DE REGISTRO =====

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Inicializando registro');
    
    // ===== MODALES DEL HEADER =====
    inicializarModalesHeader();
    
    // ===== NAVEGACIÓN =====
    const homeBtn = document.getElementById('homeBtn');
    const worldCupBtn = document.getElementById('worldCupBtn');
    const postsBtn = document.getElementById('postsBtn');
    const loginBtn = document.getElementById('loginBtn');

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (worldCupBtn) {
        worldCupBtn.addEventListener('click', () => {
            window.location.href = 'mundiales.html';
        });
    }

    if (postsBtn) {
        postsBtn.addEventListener('click', () => {
            window.location.href = 'publicaciones.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // ===== MODAL DE BENEFICIOS =====
    const benefitsBtn = document.getElementById('benefitsBtn');
    const benefitsModal = document.getElementById('benefitsModal');
    const closeBenefitsModal = document.getElementById('closeBenefitsModal');

    if (benefitsBtn && benefitsModal) {
        benefitsBtn.addEventListener('click', () => {
            benefitsModal.style.display = 'flex';
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBenefitsModal && benefitsModal) {
        closeBenefitsModal.addEventListener('click', () => {
            benefitsModal.style.display = 'none';
            // Restaurar scroll del body
            document.body.style.overflow = '';
        });
    }

    // Cerrar modal de beneficios al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (benefitsModal && e.target === benefitsModal) {
            benefitsModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // ===== VALIDACIÓN DE FORMULARIO =====
    const registroForm = document.getElementById('registroForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Validación de fortaleza de contraseña
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calcularFortalezaPassword(password);
            actualizarIndicadorFortaleza(strength);
        });
    }

    // Validación de coincidencia de contraseñas
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            validarCoincidenciaPassword();
        });
    }

    // Envío del formulario
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                registrarUsuario();
            }
        });
    }

    // ===== FUNCIONALIDADES ADICIONALES =====
    inicializarFechaNacimiento();
});

// ===== FUNCIONALIDADES DEL HEADER =====
function inicializarModalesHeader() {
    // Modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const helpBtn = document.getElementById('helpBtn');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    
    const loginModal = document.getElementById('loginModal');
    const accessibilityModal = document.getElementById('accessibilityModal');
    const mobileSearchModal = document.getElementById('mobileSearchModal');
    
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeAccessibilityModal = document.getElementById('closeAccessibilityModal');
    const closeMobileSearchModal = document.getElementById('closeMobileSearchModal');

    // Función para abrir modales (con fix para alto contraste)
    function abrirModal(modal) {
        modal.style.display = 'flex';
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar modales
    function cerrarModal(modal) {
        modal.style.display = 'none';
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }

    // Abrir modales
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            abrirModal(loginModal);
        });
    }

    if (helpBtn && accessibilityModal) {
        helpBtn.addEventListener('click', () => {
            abrirModal(accessibilityModal);
        });
    }

    if (mobileSearchBtn && mobileSearchModal) {
        mobileSearchBtn.addEventListener('click', () => {
            abrirModal(mobileSearchModal);
        });
    }

    // Cerrar modales
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', () => {
            cerrarModal(loginModal);
        });
    }

    if (closeAccessibilityModal) {
        closeAccessibilityModal.addEventListener('click', () => {
            cerrarModal(accessibilityModal);
        });
    }

    if (closeMobileSearchModal) {
        closeMobileSearchModal.addEventListener('click', () => {
            cerrarModal(mobileSearchModal);
        });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (loginModal && e.target === loginModal) {
            cerrarModal(loginModal);
        }
        if (accessibilityModal && e.target === accessibilityModal) {
            cerrarModal(accessibilityModal);
        }
        if (mobileSearchModal && e.target === mobileSearchModal) {
            cerrarModal(mobileSearchModal);
        }
    });

    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Inicio de sesión simulado. En una implementación real, aquí se procesarían las credenciales.');
            cerrarModal(loginModal);
        });
    }

    // ===== ACCESIBILIDAD =====
    const lightModeToggle = document.getElementById('lightModeToggle');
    if (lightModeToggle) {
        // Check for saved light mode preference
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
        // Check for saved text size preference
        if (localStorage.getItem('textSize') === 'large') {
            document.body.classList.add('large-text');
            textSizeToggle.checked = true;
        }

        textSizeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('large-text');
                localStorage.setItem('textSize', 'large');
            } else {
                document.body.classList.remove('large-text');
                localStorage.setItem('textSize', 'normal');
            }
        });
    }

    const contrastToggle = document.getElementById('contrastToggle');
    if (contrastToggle) {
        // Check for saved contrast preference
        if (localStorage.getItem('contrast') === 'high') {
            document.body.style.filter = 'contrast(1.5)';
            contrastToggle.checked = true;
        }

        contrastToggle.addEventListener('change', () => {
            if (contrastToggle.checked) {
                document.body.style.filter = 'contrast(1.5)';
                localStorage.setItem('contrast', 'high');
                
                // Aplicar fix para modales con alto contraste
                aplicarFixAltoContraste();
            } else {
                document.body.style.filter = 'contrast(1)';
                localStorage.setItem('contrast', 'normal');
                
                // Remover fix cuando se desactiva el alto contraste
                removerFixAltoContraste();
            }
        });
    }
}

// Función para aplicar fix específico para modales con alto contraste
function aplicarFixAltoContraste() {
    // Agregar clase específica al body cuando alto contraste está activado
    document.body.classList.add('high-contrast-active');
    
    // Aplicar estilos específicos a los modales existentes
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        modal.style.backfaceVisibility = 'hidden';
        modal.style.transform = 'translateZ(0)';
    });
}

// Función para remover fix cuando se desactiva el alto contraste
function removerFixAltoContraste() {
    document.body.classList.remove('high-contrast-active');
    
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        modal.style.backfaceVisibility = '';
        modal.style.transform = '';
    });
}

// Calcular fortaleza de la contraseña
function calcularFortalezaPassword(password) {
    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 25;
    
    return strength;
}

// Actualizar indicador visual de fortaleza
function actualizarIndicadorFortaleza(strength) {
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    if (!strengthBar || !strengthText) return;
    
    let color, text;
    
    if (strength < 50) {
        color = '#ff4444';
        text = 'Débil';
    } else if (strength < 75) {
        color = '#ffaa00';
        text = 'Moderada';
    } else {
        color = '#00c851';
        text = 'Fuerte';
    }
    
    strengthBar.style.setProperty('--strength-width', strength + '%');
    strengthBar.style.background = `linear-gradient(90deg, ${color} ${strength}%, rgba(242,242,242,0.2) ${strength}%)`;
    strengthText.textContent = `Seguridad: ${text}`;
    strengthText.style.color = color;
}

// Validar coincidencia de contraseñas
function validarCoincidenciaPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmInput = document.getElementById('confirmPassword');
    
    if (confirmPassword && password !== confirmPassword) {
        confirmInput.style.borderColor = '#ff4444';
        confirmInput.style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.2)';
        return false;
    } else {
        confirmInput.style.borderColor = '';
        confirmInput.style.boxShadow = '';
        return true;
    }
}

// Inicializar fecha de nacimiento (establecer límites)
function inicializarFechaNacimiento() {
    const fechaInput = document.getElementById('fechaNacimiento');
    if (fechaInput) {
        const hoy = new Date();
        const fechaMin = new Date();
        fechaMin.setFullYear(hoy.getFullYear() - 100);
        const fechaMax = new Date();
        fechaMax.setFullYear(hoy.getFullYear() - 13);
        
        fechaInput.min = fechaMin.toISOString().split('T')[0];
        fechaInput.max = fechaMax.toISOString().split('T')[0];
    }
}

// Validar todo el formulario
function validarFormulario() {
    let esValido = true;
    
    const camposRequeridos = document.querySelectorAll('input[required], select[required]');
    camposRequeridos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.style.borderColor = '#ff4444';
            campo.style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.2)';
            esValido = false;
        } else {
            campo.style.borderColor = '';
            campo.style.boxShadow = '';
        }
    });
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        document.getElementById('email').style.borderColor = '#ff4444';
        document.getElementById('email').style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.2)';
        esValido = false;
    }
    
    const usuario = document.getElementById('usuario').value;
    if (usuario && usuario.length < 4) {
        document.getElementById('usuario').style.borderColor = '#ff4444';
        document.getElementById('usuario').style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.2)';
        esValido = false;
    }
    
    if (!validarCoincidenciaPassword()) {
        esValido = false;
    }
    
    const terminos = document.getElementById('terminos');
    if (!terminos.checked) {
        terminos.parentElement.style.color = '#ff4444';
        esValido = false;
    } else {
        terminos.parentElement.style.color = '';
    }
    
    return esValido;
}

// Registrar usuario (simulación)
function registrarUsuario() {
    const submitBtn = document.querySelector('.registro-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando cuenta...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        mostrarMensajeExito();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        
    }, 2000);
}

// Mostrar mensaje de éxito
function mostrarMensajeExito() {
    const mensaje = document.createElement('div');
    mensaje.className = 'mensaje-exito';
    mensaje.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 16px;
            border: 2px solid var(--secondary-color);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            text-align: center;
            z-index: 3000;
            max-width: 400px;
            width: 90%;
        ">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--text-color); margin-bottom: 1rem;">¡Cuenta Creada Exitosamente!</h3>
            <p style="color: var(--text-color); opacity: 0.8;">Serás redirigido al inicio en unos segundos...</p>
        </div>
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 2999;
        "></div>
    `;
    
    document.body.appendChild(mensaje);
}