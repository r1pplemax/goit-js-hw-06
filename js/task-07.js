const input = document.querySelector('input')
const textInput = document.querySelector('#text')

input.addEventListener("input", function (event) {

        textInput.style.fontSize = `${event.currentTarget.value}px`
    })