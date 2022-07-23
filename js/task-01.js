const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

[...categories].forEach(function (element,index)  {
    const nameOfElements = element.querySelector('h2');
    const numberOfElements = element.querySelectorAll('li')
    console.log(`Category: ${nameOfElements.textContent}`)
    console.log(`Elements: ${numberOfElements.length}`
    )
});
