{
    let navigationBlock = document.getElementById("nav-bar");
    let burgerBarBlock = document.getElementById("burger");

    burgerBarBlock.addEventListener("click", function () {
        navigationBlock.classList.toggle("navActive");
    }); 
}
