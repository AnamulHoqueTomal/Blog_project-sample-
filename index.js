// const menuIcon = document.getElementById("menu-icon2");
// const menu = document.getElementById("menu-icon");


// menuIcon?.addEventListener("click", () => {
//     if(menu-icon?.className === "hidden"){
//         menu.classList.remove("hidden");
//     }
//     else{
//         menu.classList.add("hidden");
//     }
// });

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon?.addEventListener("click", () => {
  if (menu?.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});