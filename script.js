const products = [
    { id: 1, name: "Mic", price: 49.99, image: "mic.jpg" },
    { id: 2, name: "redme", price: 29.99, image: "redme.jpg" },
    { id: 3, name: "headphones", price: 19.99, image: "headphones.jpg" },
    { id: 4, name: "headphones2", price: 39.99, image: "heaphones2.jpg" },
    { id: 5, name: "iphone", price: 24.99, image: "iphone.jpg" },
  ];

  const basket = [];
  const basketContainer = document.getElementById('basket');
  const basketItems = document.getElementById('basket-items');
  const basketTotal = document.getElementById('basket-total');

  // Render products in shop section
  const shopRow = document.querySelector('.shop-section .row');
  const productTemplate = document.getElementById('product-template');
  products.forEach(product => {
    const productCard = productTemplate.cloneNode(true);
    productCard.style.display = 'block';
    productCard.id = '';
    productCard.querySelector('.product-image').src = product.image;
    productCard.querySelector('.product-title').textContent = product.name;
    productCard.querySelector('.product-price').textContent = `$${product.price.toFixed(2)}`;
    productCard.querySelector('.product-image').addEventListener('click', () => addToBasket(product));
    shopRow.appendChild(productCard);
  });

  // Add product to basket
  function addToBasket(product) {
    basket.push(product);
    renderBasket();
  }

  // Render basket items
  function renderBasket() {
    basketItems.innerHTML = '';
    let total = 0;
    basket.forEach(item => {
      const basketItem = document.createElement('div');
      basketItem.className = 'basket-item';
      basketItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>${item.name}</div>
        <div>$${item.price.toFixed(2)}</div>
      `;
      basketItems.appendChild(basketItem);
      total += item.price;
    });
    basketTotal.textContent = total.toFixed(2);
    basketContainer.style.display = basket.length ? 'block' : 'none';
  }