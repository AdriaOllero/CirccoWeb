// Cursor

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

// Array de URLs de las imágenes
// var imagenes = [
//   "/assets/svg/logo-pacap-white.svg",
//   "/assets/svg/logo-pastor-white.svg",
//   "/assets/svg/deco-p.svg",
// ];

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.borderRadius = "50%";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "50px");
      cursorBorder.style.display = "initial";
      cursorBorder.style.backgroundImage = "initial";
    }

    if (item.dataset.cursor === "videoPointer") {
      cursorBorder.style.mixBlendMode = "initial";
      cursorBorder.style.backgroundColor = "transparent";
      cursorBorder.style.borderRadius = "initial";
      cursorBorder.style.setProperty("--size", "200px");
      cursorBorder.style.backgroundRepeat = "no-repeat";
      cursorBorder.style.display = "flex";
      cursorBorder.style.backgroundImage = "url(/assets/svg/play-button.svg)";
      //cursorBorder.style.boxShadow = "none";
      //cursorBorder.style.backgroundSize = "cover";

    }

    if (item.dataset.cursor === "none") {
      cursorBorder.style.display = "none";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "30px");
    }
  });

  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.mixBlendMode = "difference";
    cursorBorder.style.backgroundColor = "white";
    cursorBorder.style.borderRadius = "50%";
    cursorBorder.style.backgroundImage = "none";
    cursorBorder.style.setProperty("--size", "15px");
  });
});
