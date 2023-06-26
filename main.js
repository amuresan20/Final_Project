import './style.css';
import { getProducts } from './src/api/getProducts';
import { createProductCard } from './src/components/productCard';

window.addEventListener('DOMContentLoaded', () => {
	let isLoading = true;

	const spinnerHTML = `<div style="padding-left:40vw">
		<img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
		</div>
		`;

	const productsContainer = document.getElementById('products');
	const searchInput = document.getElementById("search-input");
	let products = [];
  
	const showProducts = () => {
	  const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchInput.value.toLowerCase())
	  );
  
	  //const productHTML = filteredProducts
		//.map((product) => createProductCard(product))
		//.join("");
	  //productsContainer.innerHTML += productHTML;
	constProductHTML=getProducts.map((product)=>{
		productsContainer.innerHTML+=createProductCard(product.id)
	})
	};

  
	getProducts().then((data) => {
	  isLoading = false;
	  products = data;
	  showProducts();
  
	  searchInput.addEventListener("input", showProducts);
	});
  
	if (isLoading) {
	  productsContainer.innerHTML = spinnerHTML;
	}
  });
  console.log(getProducts());
