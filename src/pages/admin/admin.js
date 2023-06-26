import { createProductTableRow } from "../../components/productTableRow";
import { getProducts } from "../../api/getProducts";
import { deleteProductById } from "../../api/deleteProductById";

 const image = document.getElementById("image");
  const name = document.getElementById("name");
  const details = document.getElementById("description");
  const stock = document.getElementById("stock");
  const price = document.getElementById("price");

const tableBody = document.getElementById("products-table-body");
let isEditing = false;
let addingNewProduct = false;
let productId = 0;

window.addEventListener("DOMContentLoaded", () => {
  let isLoading = true;

  const spinnerHTML = `<div style="padding-left:40vw">
		<img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
		</div>
		`;

  getProducts().then((products) => {
    isLoading = false;
    const tableRows = products
      .map((product) => createProductTableRow(product))
      .join("");
    tableBody.innerHTML = tableRows;
    const allProductNames = document.querySelectorAll(".product-name");
    allProductNames.forEach((name) => {
      name.addEventListener("click", (event) => {
        event.preventDefault();
        isEditing = true;
        addingNewProduct = false;
        const form = document.querySelector(".form-admin");
        form.style.display = "block";
        const table = document.querySelector(".table-wrapper");
        table.style.display = "none";
        productId = event.target.parentNode.parentNode.id.substring(1);
        const nameValue = event.target.textContent;
        const stockValue =
          event.target.parentElement.parentElement.querySelector(
            ".product-stock"
          ).textContent;
        const imageValue = event.target.parentElement.parentElement
          .querySelector(".admin-image")
          .getAttribute("src");
        const priceValue =
          event.target.parentElement.parentElement.querySelector(
            ".product-price"
          ).textContent;

        const inputName = document.querySelector("#name");
        inputName.value = nameValue;
        const inputPrice = document.querySelector("#price");
        inputPrice.value = priceValue;
        const inputStock = document.querySelector("#stock");
        inputStock.value = stockValue;
        const inputImage = document.querySelector("#image");
        inputImage.value = imageValue;
      });
    });

    if (isLoading) {
      tableBody.innerHTML = spinnerHTML;
    }
  });
});

tableBody.addEventListener("click", onClick);

async function onClick(e) {
  if (e.target.classList.contains("delete-product")) {
    //const id = e.target.parentNode.parentNode.id.substring(1);
    e.target.parentNode.parentNode.remove();
    const response = await deleteProductById(id);
    console.log(response);
  }
}

const addNewProductButton = document.querySelector(".add-new-product");
addNewProductButton.addEventListener("click", () => {
  addingNewProduct = true;
  isEditing = false;
  const form = document.querySelector(".form-admin");
  form.style.display = "block";
  const table = document.querySelector(".table-wrapper");
  table.style.display = "none";
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  

  if (addingNewProduct) {
    const productsData = {
      image,
      name,
      details,
      stock,
      price,
    };

    fetch("https://6490add11e6aa71680cba5af.mockapi.io/produse/", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const form = document.querySelector(".form-admin");
        form.style.display = "none";
        const table = document.querySelector(".table-wrapper");
        table.style.display = "block";

        getProducts().then((products) => {
          const tableRows = products
            .map((product) => createProductTableRow(product))
            .join("");
          tableBody.innerHTML = tableRows;
          const allProductNames = document.querySelectorAll(".product-name");
          allProductNames.forEach((name) => {
            isEditing = true;
            addingNewProduct = false;
            name.addEventListener("click", (event) => {
              event.preventDefault();
              const form = document.querySelector(".form-admin");
              form.style.display = "block";
              const table = document.querySelector(".table-wrapper");
              table.style.display = "none";
            });
          });
        });

        document.getElementById("image").value = "";
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("price").value = "";
      })
      .catch((error) => {
        console.error(error);
      });
    addingNewProduct = false;
  }

  if (isEditing) {
    const updatedMaterialsData = {
      image,
      name,
      details,
      stock,
      price,
    };

    fetch(`https://6490add11e6aa71680cba5af.mockapi.io/produse/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const form = document.querySelector(".form-admin");
        form.style.display = "none";
        const table = document.querySelector(".table-wrapper");
        table.style.display = "block";

        getProducts().then((products) => {
          const tableRows = products
            .map((product) => createProductTableRow(product))
            .join("");
          tableBody.innerHTML = tableRows;
          const allProductNames = document.querySelectorAll(".product-name");
          allProductNames.forEach((name) => {
            name.addEventListener("click", (event) => {
              event.preventDefault();
              isEditing = true;
              addingNewProduct = false;
              const form = document.querySelector(".form-admin");
              form.style.display = "block";
              const table = document.querySelector(".table-wrapper");
              table.style.display = "none";
            });
          });
        });

        document.getElementById("image").value = "";
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("price").value = "";
      })
      .catch((error) => {
        console.error(error);
      });
    isEditing = false;
  }
});
