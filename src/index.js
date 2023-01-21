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
  let fatherNode = target.parentNode.parentNode;

  let priceElement = fatherNode.querySelector(".subtotal span");
  let totalElement = document.getElementById("Subtotal");
  console.log(totalElement);
  let priceNumber = Number(priceElement.innerText);
  let totalNumber = Number(totalElement.innerText);
  totalElement.innerText = totalNumber -= priceNumber;
  fatherNode.parentNode.removeChild(fatherNode);
}

// ITERATION 5

function createProduct() {
  // let productNameField = document.getElementById('productName').value
  // const setPrice = document.getElementById('setPrice').value
  // const productsRoll = document.querySelector('.product')
  // const clone = productsRoll.cloneNode(true)
  // console.log(clone)
  // const newProductPrice = document.querySelector('.price span')
  // const newProductName = document.querySelector('.name span')
  // newProductName.innerText = productNameField
  // newProductPrice.innerText= setPrice
  // const tbody = document.getElementById('produtos')
  // tbody.insertAdjacentElement("beforeend", clone)
}

window.addEventListener("load", () => {
  createProduct();
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeBtn = document.querySelectorAll(".btn-remove ");
  const createBtn = document.getElementById("create");
  console.log(removeBtn);
  createBtn.addEventListener("click", createProduct);
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
