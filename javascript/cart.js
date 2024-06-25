let productsInCart = localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products")

if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawcartproducts(item)
}

function drawcartproducts() {
    let y = products.map((item) => {
        return `
        <div class="products_item">
        <img src="${item.imgeUrl}" alt="" class="products_item_img">
        <div class="porducts_item_desc">
          <h2>${item.title}</h2>
          <p>the new iphone form apple is ready for use </p>
          <span>color : ${item.color}</span>
        </div>
        <div class="products_item_action">
          <button class="add_to_cart" onClick="RemoveformCart(${item.id})" >Remove form Cart</button>
        </div>
      </div>
        `
    })
    allproducts.innerHTML = y;
}
  