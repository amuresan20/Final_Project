import "./style.css";

export const createProductDetailsCard = (product) => `
   <div class="card details">
      <p>${product.name}</p>
      <img src=${product.image} />
      <span>${product.price} $</span>
      <button class="add-to-cart-btn">Add To Cart</button>
      <p>${product.details}</p>
   </div>
`;
