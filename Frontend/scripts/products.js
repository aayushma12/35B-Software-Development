const flowers = [
    { name: 'Rhododendron (Laligurans)', price: 'रु. 1,000.00', points: '10 Pts', imgSrc: '../assets/rhododendron.jpg' },
    { name: 'Marigold (Sayapatri)', price: 'रु. 500.00', points: '5 Pts', imgSrc: '../assets/marigold.jpg' },
    { name: 'Rose (Gulab)', price: 'रु. 1,500.00', points: '15 Pts', imgSrc: '../assets/rose.jpg' },
    { name: 'Jasmine (Chameli)', price: 'रु. 800.00', points: '8 Pts', imgSrc: '../assets/jasmine.jpg' },
    { name: 'Sunflower (Suryamukhi)', price: 'रु. 1,200.00', points: '12 Pts', imgSrc: '../assets/sunflower.jpg' },
    { name: 'Lotus (Kamal)', price: 'रु. 2,000.00', points: '20 Pts', imgSrc: '../assets/lotus.jpg' },
    { name: 'Orchid (Sunakhari)', price: 'रु. 2,500.00', points: '25 Pts', imgSrc: '../assets/orchid.jpg' },
    { name: 'Tulip', price: 'रु. 1,800.00', points: '18 Pts', imgSrc: '../assets/tulip.jpg' },
    { name: 'Lily (Kumudini)', price: 'रु. 2,200.00', points: '22 Pts', imgSrc: '../assets/lily.jpg' },
    { name: 'Carnation', price: 'रु. 1,600.00', points: '16 Pts', imgSrc: '../assets/carnation.jpg' },
    { name: 'Gerbera', price: 'रु. 1,400.00', points: '14 Pts', imgSrc: '../assets/gerbera.jpg' },
    { name: 'Daisy', price: 'रु. 1,100.00', points: '11 Pts', imgSrc: '../assets/daisy.jpg' },
    { name: 'Hibiscus (Rato Jhapra)', price: 'रु. 900.00', points: '9 Pts', imgSrc: '../assets/hibiscus.jpg' },
    { name: 'Chrysanthemum', price: 'रु. 1,300.00', points: '13 Pts', imgSrc: '../assets/chrysanthemum.jpg' },
    { name: 'Peony', price: 'रु. 1,700.00', points: '17 Pts', imgSrc: '../assets/peony.jpg' },
    { name: 'Petunia', price: 'रु. 2,400.00', points: '24 Pts', imgSrc: '../assets/Petunia.jpg' }
];

function displayFlowers(flowers) {
    const container = document.getElementById('cart-container');
    container.innerHTML = '';
    flowers.forEach(flower => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${flower.imgSrc}" alt="${flower.name}">
            <h3>${flower.name}</h3>
            <div class="price">${flower.price}</div>
            <div class="points">${flower.points}</div>
            <a href="#" class="add-to-cart">Add to Cart</a>
            <a href="#" class="buy-now">Buy Now</a>
            <a href="#" class="wishlist">Add to Wishlist</a>
        `;
        container.appendChild(div);
    });
}

function filterProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredFlowers = flowers.filter(flower => flower.name.toLowerCase().includes(searchQuery));
    displayFlowers(filteredFlowers);
}

displayFlowers(flowers);

document.getElementById('logout-btn').addEventListener('click', function () {
    const userConfirmed = confirm("Are you sure you want to log out?");

    if (userConfirmed) {
        window.location.href = "HomePage.html";
    }
});
