const cartKey = 'cartItems';

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    const container = document.getElementById('cart-container');
    container.innerHTML = '';

    if (cartItems.length === 0) {
        container.innerHTML = '<p class="empty-message">Your cart is empty!</p>';
        return;
    }

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
        container.appendChild(div);
    });

    // Add event listeners for the delete buttons
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
    cartItems.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem(cartKey, JSON.stringify(cartItems)); // Update localStorage
    displayCart(); // Refresh the cart display
}

displayCart(); // Initial call to display cart items
