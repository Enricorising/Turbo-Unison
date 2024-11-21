function addToCart(productName) {
    if (productName && typeof productName === 'string') {
        alert(`${productName} has been added to your cart.`);
        
    } else {
        console.error("Invalid product name.");
    }
}

document.getElementById("sign-in-button").addEventListener("click", function () {
    
    window.location.href = "signin.html";
});

document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-input").value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement further functionality here, like redirecting to a search results page.
    } else {
        alert("Please enter a search term.");
    }
});

//sign in second page.

document.getElementById("sign-in-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Successfully signed in!");
        
    } else {
        alert("Please fill in all required fields.");
    }
});
