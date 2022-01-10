
const $menu = document.querySelector("ul")
const $button = document.querySelector(".hamburguer");


$button.addEventListener("click",()=>{
    $menu.classList.toggle("menu-active");
})