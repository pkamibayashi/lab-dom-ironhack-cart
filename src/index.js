// ITERATION 1

let total = [];

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const amount = price.innerText * quantity.value;
  total.push(amount);
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = amount;

  const full = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const TotalValue = document.getElementById("Subtotal");
  TotalValue.innerText = full;

  return amount;
}

function calculateAll() {
  const produtos = document.querySelectorAll(".product");
  for (let i = 0; i < produtos.length; i++) {
    updateSubtotal(produtos[i]);
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
