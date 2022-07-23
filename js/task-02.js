const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainList = document.querySelector('ul')

const listOfIngredients = ingredients.map(ingredient => {
  const newEl = document.createElement('li')
  newEl.textContent = ingredient
  newEl.classList.add('item')

  console.log(newEl)
}).join(" ")

mainList.append(listOfIngredients)
