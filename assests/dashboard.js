// Toggle menu
const menuBtn = document.getElementById("menu")
const closeButton = document.getElementById("sidebar-close")
const menuImg = document.getElementById("sidebar-icon")
var sideBar  = document.getElementById("side-bar")
  function openMenu(){
    sideBar.style.display="block";
    sideBar.style.width = "100%";
    menuImg.style.display="none";
    closeButton.style.display = "block";
  }
  function closeMenu(){
    sideBar.style.width = "0%";
  }

menuBtn.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)