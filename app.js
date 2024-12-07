// Placeholder for future interactivity
console.log("FoodieDash App Loaded");

// Example functionality: Alert when clicking a restaurant
document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('h3').textContent} selected!`);
    });
});
