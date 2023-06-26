import { getProductById } from "../../api/getProductById";
import { createProductDetailsCard } from "../../components/productDetailsCard";
import { addProductToCart } from "../../utils/cart";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");
let productPrice = 0;

if (productId === null) {
  document.getElementById("details").innerHTML = "";
} else
  window.addEventListener("load", async () => {
    const product = await getProductById(productId);
    productPrice = +product.price;
    document.getElementById("details").innerHTML =
      createProductDetailsCard(product);
  });

document.getElementById("details").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    addProductToCart(productId, productPrice);
    setTimeout(function () {
      window.location.href = "/index.html";
    }, 2000);
  }
});
