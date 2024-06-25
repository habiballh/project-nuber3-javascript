let userinfo = document.querySelector("#user_info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")

let aaddedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("producsInCart")) : [];

if(aaddedItem){
    aaddedItem.map(item=>{
        cartproductsdiv.innerHTML+=  `<p>${item.title}</P>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length; 
    
}



if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#log_out")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {
        window.localStorage = "login.html";
    }, 1500);
})
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let allproducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: "iphoen 15 pro",
        color: "selver",
        imgeUrl: "imges/iPhone-15-3.webp"
    },
    {
        id: 2,
        title: "Apple Watch ",
        color: "brown",
        imgeUrl: "imges/Apple-Watch.webp"
    },
    {
        id: 3,
        title: "OLEVS Mens",
        color: "black",
        imgeUrl: "imges/watch3333.jpg"
    },
    {
        id: 4,
        title: "Dell",
        color: "black",
        imgeUrl: "imges/labtop.jpg"
    }
]
function drawItems() {
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
          <button class="add_to_cart" onClick="addtocart(${item.id})" >Add To Cart</button>
          <i class="far fa-heart fav"></i>
        </div>
      </div>
        `
    })
    allproducts.innerHTML = y;
}
drawItems()

let badge = document.querySelector(".badge")

let addedItem = [];

if (localStorage.getItem = ("username"))
    function addtocart(id) {
        let choosenItem = products.find((ite) => ite.id === id);
        cartproductsdiv.innerHTML += `<p>${choosenItem.title}</P>`


        addedItem = [...addedItem,choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        let cartProductslength = document.querySelectorAll(".cart_products div p")
        badge.style.display = "block";
        badge.innerHTML = cartProductslength.length
    }
else
    window.location = "login.html"

let cartproductsdiv = document.querySelector(".cart_products div")


let shoppingcart = document.querySelector(".shopping_cart")
shoppingcart.addEventListener("click", opencart)
let cartProducts = document.querySelector(".cart_products")
function opencart() {
    if (cartproductsdiv.innerHTML != "") {
        if (cartProducts.style.display == "block") {
            cartProducts.style.display = "none "
        }
        else
            cartProducts.style.display = "block"
    }
}   