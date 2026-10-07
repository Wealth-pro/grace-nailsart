const menuBtn = document.getElementById("menuBtn");
const mobileMenu= document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function()
{
mobileMenu.classList.toggle("show");

});

//close menu-toggle//

const mobileLinks= document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(function(link){
    link.addEventListener("click",function(){
        mobileMenu.classList.remove("show");
    });
});

//scroll navbar//
window.addEventListener("scroll", function(){
    const navbar= document.querySelector(".navbar");

    if (window.scrollY > 50){
        navbar.Style.boxShadow = "0 5px 25px rgba(0,0,0,0.06)";
    }else{
            navbar.style.boxshadow ="none";
        }
});
