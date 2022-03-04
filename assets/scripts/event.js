const menu_toggle = document.querySelector(".menu-toggle input");
const navbar = document.querySelector("nav ul");

menu_toggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});

function navProduk() {
  document.getElementById("navDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var navDropdown = document.getElementById("navDropdown");
    if (navDropdown.classList.contains("show")) {
      navDropdown.classList.remove("show");
    }
  }
};
