const target = document.querySelectorAll("[data-animated]");

function animation() {
  const animationClass = "animate";
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener("scroll", () => {
    animation();
  });
}
