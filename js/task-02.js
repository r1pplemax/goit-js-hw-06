const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('ul');

const listIngredients = ingredients.map(ingridient => {
  const newEl = document.createElement('li')
        newEl.textContent = ingridient
        newEl.classList.add('item')
  
  console.log(newEl);
}).join(" ")

mainList.append('li');

