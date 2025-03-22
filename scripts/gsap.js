gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

//// SINGLE ANIMATIONS /////
document.addEventListener("DOMContentLoaded", function () {
  // Configurar todos los elementos en su posición inicial
  gsap.set(".services-link", { x: 1500 });

  // Seleccionar todas las secciones de servicios y animarlas con un bucle
  const services = ["estrategia", "branding", "web", "social"];

  services.forEach((service, index) => {
    gsap.to(`.${service}`, {
      scrollTrigger: {
        scrub: 1 + index * 2, // Hace que cada animación tenga un scrub progresivo
        trigger: ".services-main-container",
        start: "-2500 top", // Ajuste para que la animación inicie antes
        end: "bottom top",
        // markers: true, // Descomentar para depuración
      },
      x: 0,
      opacity: 1, // Añadir efecto de aparición gradual
      ease: "power2.out", // Suaviza la animación
      delay: index * 2, // Pequeño retraso entre elementos
    });
  });

  //// TEXTOS ////
  gsap.set(".about-left", {
    x: -100,
  });
  gsap.to(".about-left", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".about-main-container",
      start: "-600 top",
      end: "bottom bottom",
      //markers: true,
    },
    x: 0,
  });

  gsap.set(".about-right", {
    x: 200,
    opacity: 0,
  });
  gsap.to(".about-right", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".about-main-container",
      start: "-600 top",
      end: "bottom bottom",
      //markers: true,
    },
    x: 0,
    opacity: 1,
  });

  //// VIDEO TEX RIGHT

  gsap.set(".video-right", {
    x: 200,
    opacity: 0,
  });
  gsap.to(".video-right", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".video-main-container",
      start: "300 top",
      //end: "bottom bottom",
      //markers: true,
    },
    x: 0,
    opacity: 1,
  });

  /// TESTIMONIOS ////
  gsap.set(".testimonios-left", {
    x: -100,
  });
  gsap.to(".testimonios-left", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".testimonios-section",
      start: "-600 top",
      end: "bottom bottom",
      //markers: true,
    },
    x: 0,
  });

  gsap.set(".testimonios-right", {
    x: 200,
    opacity: 0,
  });
  gsap.to(".testimonios-right", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".testimonios-section",
      start: "-600 top",
      end: "bottom bottom",
      //markers: true,
    },
    x: 0,
    opacity: 1,
  });

  //// SELECCIÓN DE PROYECTOS ////
  gsap.set(".seleccion", {
    x: 1500,
  });
  gsap.to(".seleccion", {
    scrollTrigger: {
      scrub: 4,
      trigger: ".titleProyects-main-container",
      start: "-2000 top",
      // end: "-50 bottom",
      //markers: true,
    },
    x: 0,
  });

  gsap.set(".proyectos", {
    x: -1500,
  });

  gsap.to(".proyectos", {
    scrollTrigger: {
      scrub: 4,
      trigger: ".titleProyects-main-container",
      start: "-2000 top",
      // end: "-50 bottom",
      //   markers: true,
    },
    x: 0,
  });

  ///// TEXT PLUGIN /////
  // gsap.to(".text-change", {
  //   duration: 3,
  //   text: "Consultores, Auditores e Implementadores ISO 27001 de ENS",
  //   ease: "none",
  //   delay: 2,
  // });
});

//// PORTFOLIO SLIDER /////
document.addEventListener("DOMContentLoaded", (event) => {
  ///// SLIDER GALERIA /////
  let items = gsap.utils.toArray(".proyectos-container"),
    galleryContainer = document.querySelector(".proyectos-main-container");

  items.forEach((container, i) => {
    let localItems = container.querySelectorAll(".proyectos-item"),
      distance = () => {
        let lastItemBounds =
            localItems[localItems.length - 1].getBoundingClientRect(),
          containerBounds = container.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
      };
    gsap.to(container, {
      x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "-75px top",
        pinnedContainer: galleryContainer,
        end: () => "+=" + distance(),
        pin: galleryContainer,
        scrub: true,

        invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
      },
    });
  });
});

//// VIDEO ANIMATION ////
gsap.set(".video-container", {
  scale: 0.4,
});

gsap.to(".video-container", {
  scale: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".video-main-container",
    start: "-300 top",
    end: "bottom bottom",
    endTrigger: ".video-main-container",
    scrub: 1,
    pin: ".video-container",
    pinSpacing: false,
    //markers: true,
  },
});

////// FOTER ANIMATION //////
const footer = document.querySelector(".footer-wrapper");
const footerContent = footer.querySelector(".footer-main-container");
const SPEED = 0.2;
const DEPTH = 1 - SPEED;
const footerHeight = footer.getBoundingClientRect().height;

function initFooterAnimation() {
  // Detecta si es un dispositivo mÃ³vil o tablet
  //const isMobileOrTablet = window.innerWidth <= 1024; // 1024px es un lÃ­mite comÃºn para tablets
//
  //if (isMobileOrTablet) {
  //  // No hacer nada en mÃ³vil o tablet
  //  return;
  //}

  //if (ScrollTrigger.isTouch === 1) {
  //  ScrollTrigger.normalizeScroll(true);
  //}

  // Set initial position
  gsap.set(footerContent, {
    y: -footerHeight * DEPTH,
  });

  // Create animation
  gsap.to(footerContent, {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".footer-wrapper",
      start: `top bottom`,
      end: `bottom bottom`,
      scrub: true,
      // markers: true,
    },
  });
}

// Llamada a la funciÃ³n para inicializar la animaciÃ³n
initFooterAnimation();
