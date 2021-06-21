// For this task we have 2 classes: Product and Basket.//
// Add as many products as you want: each product should have a name, price and quantity.//
// 1.   Display the available products in the html - include at least the name and the quantity. DONE
// 2.   When the user clicks on one product, you should add the product to the basked (Hint: create a method in the
//      Basket class that pushes the product into the products array).
// 3.   When a user adds a product to the basket, the total quantity of this product should decrease (should this
//      be a method of the Basket or of the Product class?)????
// 4.   Everytime a user adds something in its basket, show the content of the basket in the html and show the
//      decreased amount of the product.?????
// 5.   If a product goes to 0, show that is sold out and don't let anyone clicking on it.????
// 6.   Show the total price of the basket (when a user adds something in the basket, the total should be updated).//
// 7.   Apply some discount: if a user buys 4 products of the same kind, one is free.//
// 8.   Add as many features as you want//

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
  }
  status() {
    return "Product: " + this.name + ", " + this.price + ", " + this.quantity;
  }
  fullBasket() {
    this.quantity -= 1;
  }
}

class Basket {
  constructor() {
    this.products = [];
    this.total_price = 0;
    this.no_discount_price = 0;
    this.discount = 0;
    }
    addItem(product) {
        this.products.push(product);
    }
    quantity() {
        let half = Math.round((this.total_price.price * 50) / 100);
        (this.products.length >= 5) ? (this.total_price -= half ) : this.total_price = this.no_discount_price;
    }
    statusStat(product) {
        return product.name+"-price:"+product.price
    }
}

let myProducts = [
 new Product("apples", 40, 2),
 new Product("lemons", 32, 38),
 new Product("mangos", 44, 67),
 new Product("pineapples", 32, 88),
];
let basket = new Basket([]);
window.onload = () => {
    displayMyProducts(myProducts);
    displayBasket(basket);
};
const displayMyProducts = (myProducts) => {
  myProducts.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("card");
    let name = document.createElement("h1");
    name.innerHTML = product.name;
    card.appendChild(name);
    let quantity = document.createElement("h1")
    quantity.innerHTML = product.quantity;
    card.appendChild(quantity);
    let buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = "add to your basket";
    buttonAdd.addEventListener("click", () =>
      addNextItem(product)); product.fullBasket; 
    card.appendChild(buttonAdd );
    let container = document.querySelector("#container");
    container.appendChild(card);
  })
}
const displayBasket = (basket) => {
  const basketProducts = document.getElementById("basket-products");
  basketProducts.innerHTML = "";
  //const basketPrice = document.getElementById("basket-price");
}
basket.products.forEach((product) => {
  let li = document.createElement("li");
  li.innerHTML = basket.statusStat(product)
  ul.appendChild(li)
})
let addNextItem = (product) => {
  basket.addItem(product)
  displayBasket()
}