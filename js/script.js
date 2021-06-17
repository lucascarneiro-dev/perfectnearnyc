
function toggleMenu() {
    var menu = document.getElementById("menu");
    var style = menu.style.display;
    if (style != "flex") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
    
  } 
