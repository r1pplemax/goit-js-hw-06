const decrementBtn = document.querySelector('button[data-action="decrement"')
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"')
console.log(incrementBtn);
const value = document.querySelector('#value');
console.log(value.textContent);
let startValue = 0;

decrementBtn.addEventListener('click', (event) => {
    startValue -= 1;
    value.textContent = startValue;
})
incrementBtn.addEventListener('click', (event) => {
    startValue += 1;
    value.textContent = startValue;
})



