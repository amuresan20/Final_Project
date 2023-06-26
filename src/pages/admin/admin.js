import { createProductTableRow } from "../../components/productTableRow";
import { getProducts } from "../../api/getProducts";
import { getProductById } from "../../api/getProductById";
import { deleteProductById } from "../../api/deleteProductById";
import { updateProductById } from "../../api/updateProductById";
import { insertProduct } from "../../api/insertProduct";

const tableBody = document.getElementById("products-table-body");
const addButon = document.getElementById("add-new-product");
const formular = document.getElementById("modif-add-form");
const tabel = document.getElementById("administrare");
const salvare = document.getElementById("save-form");
const anulare = document.getElementById("undo-form");

window.addEventListener("DOMContentLoaded", () => {
  let isLoading = true;

  const spinnerHTML = `<div style="padding-left:40vw">
  <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952zqmvf8hi0l60tc39bsamr2i6qhnu5r0918kcglsv&ep=v1_gifs_search&rid=200w.gif&ct=g" />
  </div>
  `;

  getProducts().then((products) => {
    isLoading = false;
    const tableRows = products
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((product) => createProductTableRow(product))
      .join("");
    tableBody.innerHTML = tableRows;
  });

  if (isLoading) {
    tableBody.innerHTML = spinnerHTML;
  }
});

tableBody.addEventListener("click", onClick);
addButon.addEventListener("click", onClick2);
salvare.addEventListener("click", onClick3);
anulare.addEventListener("click", onClick4);

const idProdus = document.getElementById("id-produs");
const numeProdus = document.getElementById("nume-produs");
const imagineProdus = document.getElementById("imagine-produs");
const cantitateProdus = document.getElementById("cantitate-produs");
const pretProdus = document.getElementById("pret-produs");

async function onClick(e) {
  const id = e.target.parentNode.parentNode.id.substring(1);
  //sterge produs
  if (e.target.classList.contains("delete-product")) {
    // id format of the button is p23=p+product.id
    e.target.parentNode.parentNode.remove();
    const response = await deleteProductById(id);
  }
  //apeleaza formularul de modificare produs
  if (e.target.classList.contains("modify-product")) {
    tabel.style.display = "none";

    const product = await getProductById(id);
    idProdus.innerHTML = `#${id}`;
    imagineProdus.value = product.image;
    numeProdus.value = product.name;
    cantitateProdus.value = product.quantity;
    pretProdus.value = product.price;

    document.querySelector("#context-form h2").innerHTML = "Modifica produs";
    formular.style.display = "block";
  }
}

async function onClick2(e) {
  //apeleaza formularul de creare produs nou
  tabel.style.display = "none";

  idProdus.innerHTML = "#";
  imagineProdus.value = "";
  numeProdus.value = "";
  cantitateProdus.value = "";
  pretProdus.value = "";
  document.querySelector("#context-form h2").innerHTML =
    "Introducere produs nou";
  formular.style.display = "block";
}

async function onClick3() {
  //insereaza produs
  if (document.getElementById("id-produs").innerHTML === "#") {
    formular.style.display = "none";

    const response = await insertProduct(
      numeProdus.value,
      imagineProdus.value,
      Number(pretProdus.value),
      cantitateProdus.value,
      pretProdus.value
    );
    tableBody.innerHTML += createProductTableRow(response);
    tabel.style.display = "block";
    console.log(response);
  }
  //actualizeaza produs
  else {
    formular.style.display = "none";
    console.log("aici");

    const response = await updateProductById(
      idProdus.innerHTML.substring(1),
      numeProdus.value,
      imagineProdus.value,
      pretProdus.value,
      cantitateProdus.value
    );
    const liniaCurenta = document.getElementById(
      "p" + idProdus.innerHTML.substring(1)
    );
    liniaCurenta.querySelector(
      "td:nth-of-type(2)"
    ).innerHTML = `<img src=${imagineProdus.value} height="40px"/>`;
    liniaCurenta.querySelector("td:nth-of-type(3)").innerHTML =
      numeProdus.value;
    liniaCurenta.querySelector("td:nth-of-type(4)").innerHTML =
      pretProdus.value + " Lei";
    liniaCurenta.querySelector("td:nth-of-type(5)").innerHTML =
      cantitateProdus.value;

    liniaCurenta.querySelector(
      "td:nth-of-type(6)"
    ).innerHTML = `<button class='modify-product'>Editare</button>`;
    liniaCurenta.querySelector(
      "buton.delete-product"
    ).innerHTML = `<button class='delete-product'>Stergere</button>`;

    idProdus.innerHTML = "#";
    imagineProdus.value = "";
    numeProdus.value = "";
    pretProdus.value = "";
    cantitateProdus.value = "";

    tabel.style.display = "block";
  }
}

async function onClick4() {
  //butonul de cancel
  formular.style.display = "none";
  tabel.style.display = "block";
}
