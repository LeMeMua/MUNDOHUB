document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página del Mundial cargada correctamente.");

  // ======== BOTONES DE NAVEGACIÓN ========
  const worldCupBtn = document.getElementById("worldCupBtn");
  const postsBtn = document.getElementById("postsBtn");

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

  // ======== CARRUSEL DE NOTICIAS ========
  const track = document.getElementById("newscarrusel");
  const prevBtn = document.getElementById("prevbutton");
  const nextBtn = document.getElementById("sigbutton");

  if (track && prevBtn && nextBtn) {
    const items = Array.from(track.children);
    let currentIndex = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 33.3}%)`;
    };

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    // Auto-slide cada 6 segundos
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 6000);
  }

  const matchTrack = document.getElementById("matchCarruselTrack");
  const prevMatchBtn = document.getElementById("prevMatchBtn");
  const nextMatchBtn = document.getElementById("nextMatchBtn");

  if (matchTrack && prevMatchBtn && nextMatchBtn) {
    const matchSlides = Array.from(matchTrack.children);
    const totalSlides = matchSlides.length; // Si tienes 64 partidos, esto será 16
    let currentMatchIndex = 0;

    matchTrack.style.width = `${totalSlides * 100}%`;

    const updateMatchCarousel = () => {
      // Mueve el track por el índice actual * 100% / total de slides
      // (Ej: Slide 1 = 1 * 100 / 16 = 6.25% de desplazamiento)
      matchTrack.style.transform = `translateX(-${
        (currentMatchIndex * 100) / totalSlides
      }%)`;
    };

    prevMatchBtn.addEventListener("click", () => {
      currentMatchIndex = (currentMatchIndex - 1 + totalSlides) % totalSlides;
      updateMatchCarousel();
    });

    nextMatchBtn.addEventListener("click", () => {
      currentMatchIndex = (currentMatchIndex + 1) % totalSlides;
      updateMatchCarousel();
    });

    // Opcional: Si quieres auto-slide en los partidos
    // setInterval(() => {
    //     currentMatchIndex = (currentMatchIndex + 1) % totalSlides;
    //     updateMatchCarousel();
    // }, 10000);
  }

  const teamStats = {
    Argentina: {
      goleador: "Lionel Messi (7)",
      asistidor: "Lionel Messi (3)",
      mvp: "Lionel Messi (5)",
    },
    Francia: {
      goleador: "Kylian Mbappé (8)",
      asistidor: "Antoine Griezmann (3)",
      mvp: "Kylian Mbappé (3)",
    },
    Croacia: {
      goleador: "Andrej Kramarić (2)",
      asistidor: "Ivan Perišić (2)",
      mvp: "Luka Modrić (4)",
    },
    Marruecos: {
      goleador: "Youssef En-Nesyri (2)",
      asistidor: "Achraf Hakimi (1)",
      mvp: "Achraf Hakimi (1)",
    },
    "Países Bajos": {
      goleador: "Cody Gakpo (3)",
      asistidor: "Denzel Dumfries (2)",
      mvp: "Denzel Dumfries (1)",
    },
    Inglaterra: {
      goleador: "Marcus Rashford (3)",
      asistidor: "Harry Kane (3)",
      mvp: "Jude Bellingham (1)",
    },
    Brasil: {
      goleador: "Richarlison (3)",
      asistidor: "Vinícius Júnior (2)",
      mvp: "Casemiro (1)",
    },
    Portugal: {
      goleador: "Gonçalo Ramos (3)",
      asistidor: "Bruno Fernandes (3)",
      mvp: "Bruno Fernandes (2)",
    },
  };

  const statsModal = document.getElementById("statsModal");
  const closeModalBtn = document.querySelector(".cerrar-modal-stats");
  const clasificacionItems = document.querySelectorAll(".clasificacion-item");

  const modalTitle = document.getElementById("modalStatsTitle");
  const goleadorStat = document.getElementById("goleadorStat");
  const asistidorStat = document.getElementById("asistidorStat");
  const mvpStat = document.getElementById("mvpStat");

  clasificacionItems.forEach((item) => {
    item.addEventListener("click", () => {
      // 1. Obtener el nombre del país del botón (asumiendo que es el texto del span.pais)
      const paisSpan = item.querySelector(".pais");
      if (!paisSpan) return; // Salir si no encuentra el país

      const pais = paisSpan.textContent.trim();
      const stats = teamStats[pais];

      if (stats) {
        // 2. Llenar el modal con los datos
        modalTitle.textContent = `Estadísticas de ${pais}`;
        goleadorStat.textContent = stats.goleador;
        asistidorStat.textContent = stats.asistidor;
        mvpStat.textContent = stats.mvp;

        // 3. Mostrar el modal (cambiar a 'flex' para centrar)
        statsModal.style.display = "flex";
      }
    });
  });

  // Lógica para cerrar el modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      statsModal.style.display = "none";
    });
  }

  // Cierra el modal si se hace clic fuera de la caja de contenido
  window.addEventListener("click", (e) => {
    if (e.target === statsModal) {
      statsModal.style.display = "none";
    }
  });
  // ======== MODALES (Login / Ayuda / Búsqueda Móvil) ========
  const loginBtn = document.getElementById("loginBtn");
  const helpBtn = document.getElementById("helpBtn");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");

  const modales = {
    login: document.getElementById("loginModal"),
    help: document.getElementById("helpModal"),
    search: document.getElementById("mobileSearchModal"),
  };

  const abrirModal = (modal) => {
    if (modal) modal.style.display = "flex";
  };

  const cerrarModal = (modal) => {
    if (modal) modal.style.display = "none";
  };

  if (loginBtn)
    loginBtn.addEventListener("click", () => abrirModal(modales.login));
  if (helpBtn)
    helpBtn.addEventListener("click", () => abrirModal(modales.help));
  if (mobileSearchBtn)
    mobileSearchBtn.addEventListener("click", () => abrirModal(modales.search));

  window.addEventListener("click", (e) => {
    Object.values(modales).forEach((modal) => {
      if (modal && e.target === modal) cerrarModal(modal);
    });
  });

  // ======== MODO CLARO / OSCURO ========
  const toggleTheme = document.createElement("button");
  toggleTheme.className = "theme-toggle";
  toggleTheme.innerHTML = '<i class="fas fa-sun"></i>';
  document.body.appendChild(toggleTheme);

  const aplicarTema = (modo) => {
    if (modo === "claro") {
      document.body.classList.add("light-mode");
      toggleTheme.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      document.body.classList.remove("light-mode");
      toggleTheme.innerHTML = '<i class="fas fa-sun"></i>';
    }
  };

  // Cargar tema guardado
  const temaGuardado = localStorage.getItem("modo");
  aplicarTema(temaGuardado || "oscuro");

  toggleTheme.addEventListener("click", () => {
    const modoActual = document.body.classList.contains("light-mode")
      ? "claro"
      : "oscuro";
    const nuevoModo = modoActual === "claro" ? "oscuro" : "claro";
    aplicarTema(nuevoModo);
    localStorage.setItem("modo", nuevoModo);
  });

  // ======== EFECTO EN TARJETAS ========
  const tarjetas = document.querySelectorAll(".tarjeta-item");
  const observarTarjetas = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  tarjetas.forEach((tarjeta) => observarTarjetas.observe(tarjeta));

  // ======== TORNEO: CAMBIO DE GRUPO ========
  const grupoBtns = document.querySelectorAll(".grupo-btn");
  const tablas = document.querySelectorAll(".grupo-tabla");

  grupoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const grupo = btn.getAttribute("data-grupo");

      grupoBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tablas.forEach((tabla) => {
        if (tabla.dataset.grupo === grupo) {
          tabla.classList.add("active-tabla");
        } else {
          tabla.classList.remove("active-tabla");
        }
      });
    });
  });

  // ======== PUBLICACIONES LATERALES ========
  const publicaciones = document.querySelectorAll(".publicacion-lateral");
  publicaciones.forEach((pub) => {
    pub.addEventListener("click", () => {
      publicaciones.forEach((p) => p.classList.remove("activa"));
      pub.classList.add("activa");
    });
  });

  const grupoDropdownBtn = document.getElementById("grupoDropdownBtn");
  const grupoDropdownMenu = document.getElementById("grupoDropdownMenu");

  if (grupoDropdownBtn && grupoDropdownMenu) {
    grupoDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita cerrar al hacer click dentro
      grupoDropdownMenu.classList.toggle("show");
    });

    // Cierra el menú si haces click fuera
    window.addEventListener("click", () => {
      grupoDropdownMenu.classList.remove("show");
    });

    // Al seleccionar un grupo
    grupoDropdownMenu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const grupo = btn.getAttribute("data-grupo");

        // Actualiza texto del botón
        grupoDropdownBtn.textContent = `Grupo ${grupo} ▾`;

        // Oculta todas las tablas
        tablas.forEach((tabla) => {
          tabla.classList.toggle("active-tabla", tabla.dataset.grupo === grupo);
        });

        // Cierra menú
        grupoDropdownMenu.classList.remove("show");
      });
    });
  }
});
