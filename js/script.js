function toggleMenu() {
    var menumob = document.getElementById("menumob");
    var toggleButton = false
    if (menumob.style.display === "none") {
      var toggleButton = true
      menumob.style.display = "block";
    } else {
      var toggleButton = true
      menumob.style.display = "none";
    }
  } 

  function toggleLogo() {
    var logomob = document.getElementById("logomob");
    if (logomob.style.opacity === 1) {
      logomob.style.opacity = 0;
    } else {
      logomob.style.opacity = 1;
    }
  } 
