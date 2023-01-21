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
  const pai = document.querySelectorAll(".product");

  let priceElement = fatherNode.querySelector(".subtotal span");
  let totalElement = document.getElementById("Subtotal");
  console.log(totalElement);
  let priceNumber = Number(priceElement.innerText);
  let totalNumber = Number(totalElement.innerText);
  totalElement.innerText = totalNumber -= priceNumber;
  if (pai.length > 1) {
    fatherNode.parentNode.removeChild(fatherNode);
  }
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById("productName").value;
  const setPriceValue = document.getElementById("setPrice").value;
  const setQty = document.getElementById("quantity").value;
  const tr = document.querySelectorAll(".product");
  const pai = document.getElementById("produtos");
  const newClone = tr[0].cloneNode(true);
  newClone.children[0].innerText = productName;
  newClone.children[1].children[0].innerText = setPriceValue;
  // newClone.children[2].children[0].value = setQty;
  pai.insertAdjacentElement("afterbegin", newClone);
  const removeBtn = newClone.querySelectorAll(".btn-remove");
  removeBtn.forEach((el) => el.addEventListener("click", removeProduct));
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeBtn = document.querySelectorAll(".btn-remove ");
  const createBtn = document.getElementById("create");
  console.log(removeBtn);

  removeBtn.forEach((el) => el.addEventListener("click", removeProduct));
  createBtn.addEventListener("click", createProduct);
});
