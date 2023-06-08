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


//////// Close Nav Menu When Menu Item is Clicked///////////////

if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}

// Change Nav Bar Styles on Scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


////////// Testimonials Section (Swiper JS) //////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {
        //When eindow width is >= 600px
        600: {
            slidesPerView: 2,
        },

        //When eindow width is >= 1024px
        1024: {
            slidesPerView: 3,
        },
    },
});
