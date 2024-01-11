const showDiv = document.querySelector(".show_div");

const siteToHover = document.querySelectorAll(".name_site");
const arrayOfSite = [];

for (const site of siteToHover) {
  arrayOfSite.push(site);
}

const projectsData = [
  {
    site: arrayOfSite[0],
    image: "./Image/screenProjects/codeclicker.png",
    position: "center",
  },
  {
    site: arrayOfSite[1],
    image: "./Image/screenProjects/CaenBridge1.png",
    position: "left",
  },
  {
    site: arrayOfSite[2],
    image: "./Image/screenProjects/poke1.png",
    position: "left",
  },
  {
    site: arrayOfSite[3],
    image: "./Image/screenProjects/portfolio1.png",
    position: "left",
  },
  {
    site: arrayOfSite[4],
    image: "./Image/screenProjects/github.png",
    position: "left",
  },
];

projectsData.forEach(({ site, image, position }) => {
  site.addEventListener("mouseover", () => {
    showDiv.style.backgroundImage = `url(${image})`;
    showDiv.style.backgroundSize = "cover";
    showDiv.style.backgroundRepeat = "no-repeat";
    showDiv.style.backgroundPosition = position;
  });
});
