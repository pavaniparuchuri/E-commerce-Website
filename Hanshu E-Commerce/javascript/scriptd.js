const productData = [
  {
    name: "Max Road Sports Shoes",
    type: "shoes",
    price: "250",
    photo: "../images/shoe1.jpeg",
    description: "Synthetic upper, Regular Fit, Lace Fastening, Signature branding",
    inStock: true
  },
  {
    name: "Sports Shoes",
    type: "shoes",
    price: "750",
    photo: "../images/shoe2.jpeg",
    description: "Synthetic upper, Regular Fit, Lace Fastening, Signature branding",
    inStock: true
  },
  {
    name: "Checked Slim Fit Shirt with Checked pocket",
    type: "shirt",
    price: "3100",
    photo: "../images/shirt1.jpeg",
    description: "Cotton Light Weight Shirt Vibrant Colour Shirts",
    inStock: true
  },
  {
    name: "Stan Smith adidas original",
    type: "shoes",
    price: "1100",
    photo: "../images/shoe4.jpeg",
    description: "Synthetic upper, Regular Fit, Lace Fastening, Signature branding",
    inStock: true
  },
  {
    name: "Soft Denim Jeans",
    type: "pant",
    price: "500",
    photo: "../images/jeans2.jpeg",
    description: "98% cotton, 2% elastane Machine wash Mid Rise Solid Fit",
    inStock: true
  },
  {
    name: "Shirt With Button down Collar",
    type: "shirt",
    price: "4500",
    photo: "../images/shirt2.jpeg",
    description: "Cotton Light Weight Shirt Vibrant Colour Shirts",
    inStock: true
  },
  {
    name: "Slim fit chinos with insert pockets",
    type: "pant",
    price: "1700",
    photo: "../images/chinos1.jpeg",
    description: "98% cotton, 2% elastane Machine wash Mid Rise Solid Fit",
    inStock: true
  },
  {
    name: "High Quality Denim Jeans",
    type: "pant",
    price: "3000",
    photo: "../images/jeans3.jpeg",
    description: "98% cotton, 2% elastane Machine wash Mid Rise Solid Fit",
    inStock: false
  },
  {
    name: "Checked Slim Fit Shirt",
    type: "shirt",
    price: "1500",
    photo: "../images/shirt3.jpeg",
    description: "Cotton Light Weight Shirt Vibrant Colour Shirts",
    inStock: false
  }
];

  function productTemplate(product) {

    var storedname = localStorage.getItem('sname');
    if(storedname == product.name) {
          return `
          <div class="small-container single-product">
            <div class="row">
               <div class="col-2">
                   <img src="${product.photo}" width=90%>
                </div> 
                <div class="col-2">
                    <h2 class="col-5">${product.name}<h2>
                    <h4 class="col-5">Rs. ${product.price}<h4>
                    <select>
                        <option>Select Size</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>       
                    <input type="number" value="1">
                    <button class="btn">Add to Cart</button>
                    <h4>Product Details -<h4>
                    <p>${product.description}</p>
                    <button class="buy">Buy Now</button>
                </div>
            </div>
          </div>
          `
    }

  }
  
  document.getElementById("addc").innerHTML = `
    ${productData.map(productTemplate).join("")}
  `;