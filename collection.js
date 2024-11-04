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

var productContainer =document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count++){
        var productname=productlist[count].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
             productlist[count].style.display="block"
        }
    }
})