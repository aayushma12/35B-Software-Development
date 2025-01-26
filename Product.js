const flowers = [
    { name: 'Rhododendron (Laligurans)', price: 'रु. 1,000.00', points: '10 Pts', imgSrc: 'rhododendron.jpg' },
    { name: 'Marigold (Sayapatri)', price: 'रु. 500.00', points: '5 Pts', imgSrc: 'marigold.jpg' },
    { name: 'Rose (Gulab)', price: 'रु. 1,500.00', points: '15 Pts', imgSrc: 'rose.jpg' },
    { name: 'Jasmine (Chameli)', price: 'रु. 800.00', points: '8 Pts', imgSrc: 'jasmine.jpg' },
    { name: 'Sunflower (Suryamukhi)', price: 'रु. 1,200.00', points: '12 Pts', imgSrc: 'sunflower.jpg' },
    { name: 'Lotus (Kamal)', price: 'रु. 2,000.00', points: '20 Pts', imgSrc: 'lotus.jpg' },
    { name: 'Orchid (Sunakhari)', price: 'रु. 2,500.00', points: '25 Pts', imgSrc: 'orchid.jpg' },
    { name: 'Tulip', price: 'रु. 1,800.00', points: '18 Pts', imgSrc: 'tulip.jpg' },
    { name: 'Lily (Kumudini)', price: 'रु. 2,200.00', points: '22 Pts', imgSrc: 'lily.jpg' },
    { name: 'Carnation', price: 'रु. 1,600.00', points: '16 Pts', imgSrc: 'carnation.jpg' },
    { name: 'Gerbera', price: 'रु. 1,400.00', points: '14 Pts', imgSrc: 'gerbera.jpg' },
    { name: 'Daisy', price: 'रु. 1,100.00', points: '11 Pts', imgSrc: 'daisy.jpg' },
    { name: 'Hibiscus (Rato Jhapra)', price: 'रु. 900.00', points: '9 Pts', imgSrc: 'hibiscus.jpg' },
    { name: 'Chrysanthemum', price: 'रु. 1,300.00', points: '13 Pts', imgSrc: 'chrysanthemum.jpg' },
    { name: 'Peony', price: 'रु. 1,700.00', points: '17 Pts', imgSrc: 'peony.jpg' },
    { name: 'Petunia', price: 'रु. 2,400.00', points: '24 Pts', imgSrc: 'Petunia.jpg' }
];

const cartKey = 'cartItems';

// Display flowers dynamically
function displayFlowers(flowers) {
    const container = document.getElementById('cart-container');
    container.innerHTML = '';
    flowers.forEach((flower, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${flower.imgSrc}" alt="${flower.name}">
            <h3>${flower.name}</h3>
            <div class="price">${flower.price}</div>
            <div class="points">${flower.points}</div>
            <a href="#" class="add-to-cart" data-index="${index}">Add to Cart</a>
            <a href="#" class="buy-now">Buy Now</a>
            <a href="#" class="wishlist">Wishlist</a>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            addToCart(flowers[index]);
        });
    });
}

// Add to cart
function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    cartItems.push(item);
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    alert(`${item.name} has been added to your cart!`);
}

// Filter products based on search input
function filterProducts() {
    const search = document.getElementById('search-bar').value.toLowerCase();
    const filtered = flowers.filter(flower => flower.name.toLowerCase().includes(search));
    displayFlowers(filtered);
}

// Display cart items with delete option
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <h3>${item.name}</h3>
            <div class="price">${item.price}</div>
            <div class="points">${item.points}</div>
            <button class="delete-item" data-index="${index}">Delete</button>
        `;
        cartContainer.appendChild(div);
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

// Remove item from cart
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    cartItems.splice(index, 1);
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    displayCart();  // Refresh cart display
}

displayFlowers(flowers); // Display flowers initially
