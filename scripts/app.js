//// ANIMATION MOVIMIENTO ELEMENTOS
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".element").forEach((el) => {
    const speed = el.getAttribute("data-speed");
    const x = (window.innerWidth / 2 - e.clientX) / speed;
    const y = (window.innerHeight / 2 - e.clientY) / speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});
