import "./style.css";

export const createProductTableRow = (product) => `
   <tr id="p${product.id}" class="border">
      <td><img src=${product.image} class="admin-image"></td>
      <td class="product-name"> <a href ="">${product.name}</td>
      <td class="product-price">${product.price} </td>
      <td class="product-stock">${product.stock}</td>
      <td><button class='delete-product'>X</button></td>
   </tr>
`;
