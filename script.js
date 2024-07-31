// Step 1: Select the button element
const darkModeToggle = document.getElementById('darkModeToggle');

// Step 2: Add an event listener to the button
darkModeToggle.addEventListener('click', function() {
    // Step 3: Toggle a class on the body when the button is clicked
    document.body.classList.toggle('dark-mode');
});