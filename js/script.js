function toggleMenu() {
    var x = document.getElementById("menumob");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

  function toggleLogo() {
    var x = document.getElementById("logomob");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
    } else {
      x.style.opacity = "1";
    }
  } 
