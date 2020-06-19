const body = document.querySelector("body");

const IMG_NUMBER = 3;

init();

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}