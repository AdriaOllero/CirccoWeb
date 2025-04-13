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
document.addEventListener("DOMContentLoaded", (event) => {
  ///// SINGLE ANIMATIONS /////
  gsap.registerPlugin(ScrollTrigger);

  // ///// SPLIT TEXT SETUP /////
  // let typeSplit = new SplitType("[animate]", {
  //   types: "lines, words, chars",
  //   tagName: "span",
  // });

  ///// SLIDER GALERIA /////
  let items = gsap.utils.toArray(".proyectos-container"),
    galleryContainer = document.querySelector(".proyectos-main-container"),
    titlePanels = gsap.utils.toArray(".proyectos-title"),
    textContainer = document.querySelector(".proyectos-text-container");

  items.forEach((container, i) => {
    let localItems = container.querySelectorAll(".proyectos-item"),
      distance = () => {
        let lastItemBounds =
            localItems[localItems.length - 1].getBoundingClientRect(),
          containerBounds = container.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
      };

    gsap.to(container, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "-150px top",
        pinnedContainer: galleryContainer,
        end: () => "+=" + distance() + "700px",
        pin: galleryContainer,
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let progress = self.progress * (localItems.length - 1);
          let activeIndex = Math.round(progress);

          localItems.forEach((item, index) => {
            if (index === activeIndex) {
              item.classList.add("proyectos-item-active");
              if (titlePanels[index]) {
                titlePanels[index].classList.add("proyectos-title-active");

                // ANIMACIÓN SOLO PARA TEXTOS ACTIVOS
                // let activeText = titlePanels[index].querySelector("[animate]");
                // if (activeText) {
                //   gsap.from(activeText.querySelectorAll(".char"), {
                //     y: "110%",
                //     opacity: 1,
                //     rotationZ: "0",
                //     duration: 0.35,
                //     ease: "power1.out",
                //     stagger: 0.1,
                //   });
                // }
              }
            } else {
              item.classList.remove("proyectos-item-active");
              if (titlePanels[index]) {
                titlePanels[index].classList.remove("proyectos-title-active");
              }
            }
          });
        },
        onEnter: () => {
          textContainer.classList.remove("proyectos-text-container-inactive");
        },
        onLeaveBack: () => {
          textContainer.classList.add("proyectos-text-container-inactive");
        },
        onEnterBack: () => {
          textContainer.classList.remove("proyectos-text-container-inactive");
        },
      },
    });
  });
});

//// VIDEO ANIMATION ////
const mm = gsap.matchMedia();

mm.add("(max-width: 1480px)", () => {
  gsap.set(".video-container", { scale: 0.4 });

  gsap.to(".video-container", {
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".video-main-container",
      start: "-150 top",
      end: "bottom bottom",
      endTrigger: ".video-main-container",
      scrub: 1,
      pin: ".video-container",
      pinSpacing: false,
      //markers: true,
    },
  });
});

mm.add("(max-width: 1024px)", () => {
  gsap.set(".video-container", { scale: 0.4 });

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
});

mm.add("(max-width: 767px)", () => {
  gsap.set(".video-container", { scale: 0.6 }); // Ajuste para mobile
  gsap.to(".video-container", {
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".video-main-container",
      start: "-100 top", // Ajuste para mobile
      end: "bottom bottom",
      scrub: 1,
      pin: ".video-container",
      pinSpacing: false,
    },
  });
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

///// TEXT ANIMATION /////

///// SERVICE TITLE /////
let typeSplit = new SplitType("[animateTitle]", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from("[animateTitle] .char", {
  y: "110%",
  opacity: 1,
  rotationZ: "0",
  duration: 0.35,
  ease: "power1.out",
  stagger: 0.1,
});

///// SERVICE TITLE /////
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let typeServiceSplit = new SplitType("[animateServiceTitle]", {
    types: "lines, words, chars",
    tagName: "span",
  });

  gsap.from("[animateServiceTitle] .line", {
    y: "110%",
    opacity: 1,
    rotationZ: "0",
    duration: 1,
    ease: "power1.out",
    stagger: 0.1,
  });
}

///// SERVICE TITLE /////
let typeSplitText = new SplitType("[animateText]", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from("[animateText] .word", {
  opacity: 0.3,
  duration: 0.5,
  ease: "sine.inOut",
  stagger: 0.1,

  scrollTrigger: {
    trigger: "[animateText]",
    start: "-200px center",
    scrub: true,
  },
});

///// COLOR BG CHANGING /////
const sections = gsap.utils.toArray(".color-section");

const switchColor = (color) => {
  gsap.to(document.body, {
    duration: 0.3,
    ease: "power1.inOut",
    backgroundColor: color,
  });
};

sections.forEach((section, i) => {
  const color = section.dataset.bgcolor;
  const previousColor = sections[i - 1]
    ? sections[i - 1].dataset.bgcolor
    : "#000000";
  console.log(previousColor);
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => switchColor(color),
    onEnterBack: () => i === sections.length - 1 && switchColor(color),
    onLeave: () => i === sections.length - 1 && switchColor("#000000"),
    onLeaveBack: () => switchColor(previousColor),
    markers: { indent: 150 * i },
    id: i + 1,
  });
});

///// SLIDES PINNING /////
var panels = gsap.utils.toArray(".panel");
panels.pop();

panels.forEach((panel, i) => {
  // Get the element holding the content inside the panel
  let innerpanel = panel.querySelector(".panel-content");

  // Get the Height of the content inside the panel
  let panelHeight = innerpanel.offsetHeight;

  // Get the window height
  let windowHeight = window.innerHeight;

  let difference = panelHeight - windowHeight;

  // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
  let fakeScrollRatio =
    difference > 0 ? difference / (difference + windowHeight) : 0;

  // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
  if (fakeScrollRatio) {
    panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
  }

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "bottom bottom",
      end: () =>
        fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
      pinSpacing: false,
      pin: true,
      scrub: true,
    },
  });

  // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
  if (fakeScrollRatio) {
    tl.to(innerpanel, {
      y: -difference,
      duration: 1 / (1 - fakeScrollRatio) - 1,
      ease: "none",
    });
  }
  tl.fromTo(
    panel,
    { scale: 1, opacity: 1 },
    { scale: 0.5, opacity: 0.5, duration: 0.9 }
  ).to(panel, { opacity: 0, duration: 0.1 });
});
