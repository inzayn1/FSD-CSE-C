document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if credentials are correct
    if (username === "aman" && password === "aman") {
        // Hide the login form and show the user list
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".user-list-container").style.display = "block";

        // Populate the list of GitHub users
        populateUserList();
    } else {
        alert("Invalid username or password!");
    }
});

function populateUserList() {
    const userList = [
        "ankit singh",

        "ansh verma",
        "vaishnavi",
        "salil singh",
        "aditya singh",
        "shalini singh",
        "Nana patekar",
        "salman khan ",
        "ramu kaka",
        "tehmaze"
    
    ];

    const ul = document.getElementById("user-list");
    ul.innerHTML = ""; // Clear the list before adding new items

    userList.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        ul.appendChild(li);
    });
}

// Sorting functionality
document.getElementById("sort-btn").addEventListener("click", function() {
    const ul = document.getElementById("user-list");
    const items = Array.from(ul.getElementsByTagName("li"));

    // Sort the items alphabetically
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Remove all current list items
    ul.innerHTML = "";

    // Append the sorted items
    items.forEach(item => ul.appendChild(item));
});
