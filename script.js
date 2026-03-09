const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, () => {
    const top = getRandomNumber(window.innerHeight - button.offsetHeight);
    const left = getRandomNumber(window.innerWidth - button.offsetWidth);

    animateMove(button, "left", left).play();
    animateMove(button, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

function f() {
  alert("i know reee I LOVE YOU TOOOOOOO 💕💕");
}
