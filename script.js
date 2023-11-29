const burgers = {
  amabigburger: 7.5,
  bigwhopper: 8.5,
  samburger: 6.5,
  cheeseburger: 7.5,
};

const fries = {
  normalfries: 3,
  bigfries: 5,
  potatoes: 6,
};

const dippi = {
  mayonnaise: 2.5,
  garlicdippi: 2,
  sweetcheesedippi: 3,
};

const drinks = {
  cocacola: 4.5,
  fanta: 4,
  sprite: 5,
  orangejuice: 6,
  jaffa: 3.5,
};

// an array containing all objects...
const productLists = [burgers, fries, dippi, drinks];
const visitedProductLists = [];

const orderedItems = {};

// function loops through the array of objects and displays the properties and values of the current object...
function displayProductLists(listItems) {
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] === visitedProductLists[i]) continue;
    visitedProductLists.push(listItems[i]);

    return listItems[i];
  }
}

const checkItems = function (items) {
  const choice = prompt(`choose item: `).toLowerCase();
  const quantity = prompt(`Enter quanity/number:`);
  for (let key of Object.keys(items)) {
    if (key === choice) {
      orderedItems[`${quantity}x ${key}`] = items[key] * quantity;
      console.log(orderedItems);
    }
  }
};

console.log(`Welcome to the fast food order program: `);
const beginOrdering = prompt(`Type begin to start ordering: `).toLowerCase();
if (beginOrdering === "begin") {
  let currentProductList = displayProductLists(productLists);
  console.log(currentProductList);
  checkItems(currentProductList);
  let stillOrdering = true;

  while (stillOrdering) {
    let progress = prompt(
      `Type CONFIRM to finish ordering or CONTINUE to keep ordering`
    ).toLowerCase();
    if (progress === "continue") {
      let currentProductList = displayProductLists(productLists);
      console.log(currentProductList);
      checkItems(currentProductList);
    } else if (progress === "confirm") {
      stillOrdering = false;
    }
  }
}

let finalOrderedItems = orderedItems;
let sum = 0;

for (let key of Object.keys(finalOrderedItems)) {
  console.log(`${key} : ${finalOrderedItems[key]}$`);
  sum += finalOrderedItems[key];
}
console.log(`Total : ${sum}$`);
