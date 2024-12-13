// Placeholder for future interactivity
console.log("DormDash App Loaded");

// Updates menu item style on click
document.querySelectorAll('.menu-item').forEach(card => {
    card.addEventListener('click', () => {
        //alert(`${card.querySelector('strong').textContent} selected!`);
        card.classList.contains('menu-item-click') ? card.classList.remove('menu-item-click') : card.classList.add('menu-item-click');
    });
});