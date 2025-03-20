gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

//// SINGLE ANIMATIONS /////
document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".services-link", {
    x: 1500,
  });

  gsap.to(".estrategia", {
    scrollTrigger: {
      scrub: 1,
      trigger: ".services-main-container",
      start: "-2600 top",
      //markers: true,
    },
    x: 0,
  });
  gsap.to(".branding", {
    scrollTrigger: {
      scrub: 2,
      delay: 2000,
      trigger: ".services-main-container",
      start: "-2400 top",
    //   markers: true,
    },
    x: 0,
  });
  gsap.to(".web", {
    scrollTrigger: {
      scrub: 3,
      trigger: ".services-main-container",
      start: "-2200 top",
    //   markers: true,
    },
    x: 0,
  });
  gsap.to(".social", {
    scrollTrigger: {
      scrub: 4,
      trigger: ".services-main-container",
      start: "-2000 top",
    //   markers: true,
    },
    x: 0,
  });

  ///// TEXT PLUGIN /////
  gsap.to(".text-change", {
    duration: 3,
    text: "Consultores, Auditores e Implementadores ISO 27001 de ENS",
    ease: "none",
    delay: 2,
  });
});
