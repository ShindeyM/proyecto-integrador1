// VENTANA MODAL

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// CARROUSEL

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -25;

    grande.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });

    punto[i].classList.add("activo");
  });
});
