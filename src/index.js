// ITERATION 1

function updateSubtotal(product) {
  console.log("Estou fazendo os calculos... Beeep.. Beeepzz...");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let priceValue = price.innerText;
  let quantityValue = quantity.value;
  let subTotalSum = priceValue * quantityValue;
  let subTotalElement = product.querySelector(".subtotal span");
  let totalzao = (subTotalElement.innerText = subTotalSum);
  return totalzao;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");
  let sum = 0;
  products.forEach((p) => (sum += updateSubtotal(p)));
  const totalSection = document.getElementById("Subtotal");
  totalSection.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log(target);
  let parent = target.parentNode.parentNode;
  let subTotal = parent.childNodes[7];
  let subTotalPrice = subTotal.innerText;
  parent.parentNode.removeChild(parent);
  calculateAll() = subTotalPrice -= calculateAll;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeBtn = document.querySelectorAll(".btn-remove ");
  console.log(removeBtn);
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
