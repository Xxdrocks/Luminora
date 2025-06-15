fetch("./src/components/navbar.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("nav").innerHTML = data));

fetch("./src/components/hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
    const lumi = document.getElementById("lumi");
    const moon = document.getElementById("moon");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      sky.style.transform = "translateY(" + value * 0.4 + "px)";

      let scale = 1 + value * 0.002;
      if (scale > 2.8) scale = 2.8;
      let translateY = value * 0.4;
      moon.style.transform = `translateY(${translateY}px) scale(${scale})`;
      lumi.style.transform = `translateY(${translateY}px) scale(${scale})`;
    });
  });

fetch("./src/components/article.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("article").innerHTML = data;
    const person = document.getElementById("person");
    const quote = document.getElementById("quote");
    const title = document.getElementById("title");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      person.style.transform = `translateX(${value * 0.4}px)`;
      quote.style.transform = `translateX(${value * 0.75}px)`;
      title.style.transform = `translateX(-${value * 0.75}px)`;
    })
  });

  fetch("./src/components/view.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("view").innerHTML = data;
    const grass = document.getElementById("grass");
    const awaken = document.getElementById("awaken");
    const description = document.getElementById("description");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      grass.style.transform = `translateY(${value * 0.4}px)`;
      awaken.style.transform = `translateY(-${value * 0.43}px)`;
      description.style.transform = `translateY(-${value * 0.43}px)`;
    })
  });
