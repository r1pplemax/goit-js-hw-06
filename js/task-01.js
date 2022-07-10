const categoryElement = document.querySelectorAll('.item')

console.log(`Number of categories:${categoryElement.length}`);

[...categoryElement].forEach(function (el, index) {
    const nameOfCategory = el.querySelector('h2');
    const numberOfCategory = el.querySelectorAll('li');
    console.log(`Category: ${nameOfCategory.textContent}`);
    console.log(`Elements: ${numberOfCategory.length}`);
})