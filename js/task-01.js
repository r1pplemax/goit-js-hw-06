const categoryElement = document.querySelectorAll('.item')

console.log(`Number of categories:${categoryElement.length}`);


[...categoryElement].forEach(function (el,index) {
const nameSelector = el.querySelector('h2')
const numberSelector = el.querySelectorAll('li')
console.log(`Category: ${ nameSelector.textContent }`)
console.log(`Elements: ${numberSelector.length}`)
});