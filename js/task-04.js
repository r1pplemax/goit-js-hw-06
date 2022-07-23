const decrement = document.querySelector('button[data-action="decrement"]')
console.log(decrement)
const increment = document.querySelector('button[data-action="increment"]')
console.log(increment)
const value = document.querySelector('#value')
let startValue = 0;


decrement.addEventListener("click", () => {
    startValue -= 1;
    value.textContent = startValue;
})
increment.addEventListener('click', () => {
    startValue += 1;
    value.textContent = startValue;
})
