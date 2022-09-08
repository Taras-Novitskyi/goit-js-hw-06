const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeItemColection = ingredients => {

 return ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});
};

const elements = makeItemColection(ingredients);
listEl.append(...elements);


// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   arrItem.push(itemEl);
// }


