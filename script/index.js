// menu 
const btnMenu = document.getElementById("btn-menu")
btnMenu.addEventListener("click", ()=>{
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display==="flex"? "none" : "flex"
})