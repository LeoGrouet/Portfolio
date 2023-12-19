const showDiv = document.querySelector(".show_div");

const siteToHover = document.querySelectorAll(".name_site");
const arrayOfSite = [];

for (const site of siteToHover) {
  arrayOfSite.push(site);
}

// Comportement pour le premier objet du tableau arrayOfSite = Code Clicker

arrayOfSite[0].addEventListener("mouseover", (e) => {
  showDiv.style.backgroundImage = "url(./Image/screenProjects/CaenBridge1.png)";
  showDiv.style.backgroundSize = "cover";
  showDiv.style.backgroundRepeat = "no-repeat";
  showDiv.style.backgroundPosition = "left";
});

// Comportement pour le deuxieme objet du tableau arrayOfSite = CaenBridge

arrayOfSite[1].addEventListener("mouseover", (e) => {
  showDiv.style.backgroundImage = "url(./Image/screenProjects/CaenBridge1.png)";
  showDiv.style.backgroundSize = "cover";
  showDiv.style.backgroundRepeat = "no-repeat";
  showDiv.style.backgroundPosition = "left";
});
