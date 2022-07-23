const inputRange = document.querySelector('#font-size-control')
console.log(inputRange)
const text = document.querySelector('#text')



inputRange.addEventListener('input', function (event)  {
    text.style.fontSize = `${event.currentTarget.value}px`
})
