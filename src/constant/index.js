fetch("./src/components/navbar.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("nav").innerHTML = data));
fetch("./src/components/hero.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("hero").innerHTML = data));