import { getProductById } from "../../api/getProductById";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  getProductQuantityFromLocalStorage,
  isProductAlreadyInCart,
  calculateUpdatedSum,
} from "../../utils/cart";

const showProducts = async () => {
  const cart = localStorage.getItem("cart");
  const products = JSON.parse(cart);
  document.getElementById("cart").innerHTML = "";
  let sum = 0;

  products.forEach(async (product) => {
    const productInfo = await getProductById(product.id);
    document.getElementById(
      "cart"
    ).innerHTML += `<div id="p${product.id}" class='product-details'>
      <img src=${productInfo.image} />
      <span class="product-name">${productInfo.name}</span>
      <span>${productInfo.price} $</span>
      <div class="buttons">
        <button id=${product.id} class="decrement-quantity">-</button>
        <span class="quantity">${product.quantity}</span>
        <button id=${product.id} class="increment-quantity">+</button>
      </div>
    </div>`;

    const sumProduct = +product.quantity * +productInfo.price;
    sum += +sumProduct;
    document.getElementById("sum").innerHTML = `Total: ${sum} $`;
  });
};

window.addEventListener("load", showProducts);

document.getElementById("cart").addEventListener("click", async (e) => {
  const cartArray = JSON.parse(localStorage.getItem("cart"));
  const productId = e.target.id;

  if (e.target.classList.contains("decrement-quantity")) {
    decrementProductQuantity(productId, cartArray);
    calculateUpdatedSum(cartArray);
  } else if (e.target.classList.contains("increment-quantity")) {
    incrementProductQuantity(productId, cartArray);
    calculateUpdatedSum(cartArray);
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));

  if (!isProductAlreadyInCart(productId, cartArray)) {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .remove();
  } else {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .querySelector(".quantity").innerHTML =
      getProductQuantityFromLocalStorage(productId, cartArray);
  }
});
