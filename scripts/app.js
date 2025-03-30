//// ANIMATION MOVIMIENTO ELEMENTOS
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".element").forEach((el) => {
    const speed = el.getAttribute("data-speed");
    const x = (window.innerWidth / 2 - e.clientX) / speed;
    const y = (window.innerHeight / 2 - e.clientY) / speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

//// MENU OPEN
var navbar = document.getElementById("navbar");
var menuToggle = false;

function onMenu() {
  navbar.style.right = menuToggle ? "-1024px" : "0";
  menuToggle = !menuToggle;
}
