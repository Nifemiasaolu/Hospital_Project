const navItems = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav_btn");
const closeNavBtn = document.querySelector("#close_nav_btn");

openNavBtn.addEventListener("click", function () {
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
});

const closeNav = function () {
    navItems.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);
