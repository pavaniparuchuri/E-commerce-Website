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
  
  function dispimage(inStock,photo,name){
    if(inStock == true){
        var n = name;
        return '<img src="'+photo+'" border=”0” onClick="display(\'' + name + '\')" style=”display:block;”>';
    }
    
    else {
        return `
         <img class="hov" src="${photo}" border=”0” style=”display:block;”>
        `
    }
}

  function productTemplate(product) {
    return `
    <div class="small-container" id="sc">
        <div class="row">
            <div class="col-4">
                ${dispimage(product.inStock,product.photo,product.name)}
                <h4>${product.name}</h4>
                <p>Rs. ${product.price}</p>
            </div>
        </div>
    </div>
    `;
  }

  document.getElementById("add").innerHTML = `
    ${productData.map(productTemplate).join("")}
  `;
  
  function inputFunction() {
    var myobj = document.getElementById("add");
    myobj.remove();
} 

function searchFunction() {
    document.getElementById("addl").innerHTML = `
    ${productData.map(productFilter).join("")}
  `;
}

function productFilter(product) {
    var input = document.getElementById("txt");
    if(input.value == product.type){
    return `
    <div class="small-container" id="sc">
        <div class="row">
            <div class="col-4">
                ${dispimage(product.inStock,product.photo)}
                <h4>${product.name}</h4>
                <p>Rs. ${product.price}</p>
            </div>
        </div>
    </div>
    `;
    }
  }

function filter1000() {
    var myobj = document.getElementById("add");
    myobj.remove();
    document.getElementById("addl").innerHTML = `
    ${productData.map(productDetail1000).join("")}
  `;
}

function filter2000() {
    var myobj = document.getElementById("add");
    myobj.remove();
    document.getElementById("addl").innerHTML = `
    ${productData.map(productDetail2000).join("")}
  `;
}

function filter5000() {
    var myobj = document.getElementById("add");
    myobj.remove();
    document.getElementById("addl").innerHTML = `
    ${productData.map(productDetail5000).join("")}
  `;
}


function productDetail1000(product) {
    if(1000 >= product.price) {
        return `
    <div class="small-container" id="sc">
        <div class="row">
            <div class="col-4">
                ${dispimage(product.inStock,product.photo)}
                <p>Hello</p>
                <h4>${product.name}</h4>
                <p>Rs. ${product.price}</p>
            </div>
        </div>
    </div>
    `;
    } 
}

function productDetail2000(product) {
    if(2000 >= product.price && 1000 <= product.price) {
        return `
    <div class="small-container" id="sc">
        <div class="row">
            <div class="col-4">
                ${dispimage(product.inStock,product.photo)}
                <p>Hello</p>
                <h4>${product.name}</h4>
                <p>Rs. ${product.price}</p>
            </div>
        </div>
    </div>
    `;
    }
}

function productDetail5000(product) {
    if(5000 >= product.price && 2000 <= product.price) {
        return `
    <div class="small-container" id="sc">
        <div class="row">
            <div class="col-4">
                ${dispimage(product.inStock,product.photo)}
                <p>Hello</p>
                <h4>${product.name}</h4>
                <p>Rs. ${product.price}</p>
            </div>
        </div>
    </div>
    `;
    }
}

function display(name) {
    localStorage.setItem('sname',name);
    window.open("product-details.html");

}



