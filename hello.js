var products = [
    { name: "T-shirt", price: 10 },
    { name: "Jeans", price: 25 },
    { name: "Shoes", price: 40 }
  ];

  var productList = document.getElementById("productList");
  var cartItems = document.getElementById("cartItems");
  var totalEl = document.getElementById("total");
  var total = 0;

  products.forEach(function(item, index) {
    var div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price}</p>`;
    var btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.onclick = function() {
      var cartItem = document.createElement("p");
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(cartItem);
      total += item.price;
      totalEl.textContent = total;
    };
    div.appendChild(btn);
    productList.appendChild(div);
  });