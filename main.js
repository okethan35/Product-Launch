const scrollContainer = document.querySelector(".gallery");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

rightBtn.addEventListener("click", function(){
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
leftBtn.addEventListener("click", function(){
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
