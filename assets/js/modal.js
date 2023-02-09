function onModal() {
  const modal = document.querySelector("#modal-contact");
  if (modal) {
    modal.classList.add("display-on");
    modal.addEventListener("click", (event) => {
      if (
        event.target.id == "modal-contact" ||
        event.target.className == "modal-buttom" ||
        event.target.className == "closed"
      ) {
        modal.classList.remove("display-on");
      }
    });
  }
}

const openModal = document.querySelector(".service-btn");
openModal.addEventListener("click", () => {
  onModal();
});

