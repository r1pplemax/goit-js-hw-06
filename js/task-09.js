function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const body = document.querySelector('body')

const btn = document.querySelector('button')

const color = document.querySelector('.color')

btn.addEventListener('click', changeColor);

function changeColor() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
}