// Select the side navbar
var sidenav = document.querySelector(".side-navbar");

// Function to show the side navbar
function Show() {
    //sidenav.classList.add("show"); // Add 'show' class to trigger CSS transition
    sidenav.style.left="0"
}

// Function to close the side navbar
function Close() {
    //sidenav.classList.remove("show"); // Remove 'show' class to hide it
    sidenav.style.left="100%"
}
