const allItemEl = document.querySelectorAll("li.item");
const amountItem = allItemEl.length;
console.log("Number of categories:", amountItem);

allItemEl.forEach((element) => {
  const titleOfCategory = element.firstElementChild.textContent;
  const amountLi = element.lastElementChild.querySelectorAll("li").length;

  console.log("Category:", titleOfCategory);
  console.log("Elements:", amountLi);
});
