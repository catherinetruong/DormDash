// Placeholder for future interactivity
console.log("FoodieDash App Loaded");

// Example functionality: Alert when clicking a restaurant
document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('h3').textContent} selected!`);
    });
});

// Example functionality: Alert when clicking a menu item
document.querySelectorAll('.menu-item').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('strong').textContent} selected!`);
    });
});

// Example functionality: Alert when adding to cart
document.querySelectorAll('.add-to-cart-section').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('h3').textContent} selected!`);
    });
});

// Example functionality: Alert when confirming order
document.querySelectorAll('.confirm-order').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('h3').textContent} selected!`);
    });
});