const themeButton = document.getElementById("theme");
const html = document.querySelector("html");
const themeArray = [
  {
    theme: "sombre",
    svg: "./Image/IcRoundLightMode.svg",
  },
  {
    theme: "clair",
    svg: "./Image/IcRoundDarkMode.svg",
  },
];

function toggleTheme() {
  if (document.documentElement.getAttribute("data-theme") === "clair") {
    // Si le thème actuel est clair, basculez vers le thème sombre
    document.documentElement.setAttribute("data-theme", "sombre");
    themeButton.setAttribute("src", themeArray[0].svg);
    html.style.setProperty("--main-color", "#070000");
    html.style.setProperty("--main-shade", "#3e0000");
    html.style.setProperty("--light-color", "#fbf4f4");
    html.style.setProperty("--light-shade", "#e1a3a3");
    html.style.setProperty("--opac", "#070000cd");
  } else {
    // Sinon, basculez vers le thème clair
    document.documentElement.setAttribute("data-theme", "clair");
    themeButton.setAttribute("src", themeArray[1].svg);
    html.style.setProperty("--main-color", "#fbf4f4");
    html.style.setProperty("--main-shade", "#3e0000");
    html.style.setProperty("--light-color", "#070000");
    html.style.setProperty("--light-shade", "#e1a3a3");
    html.style.setProperty("--opac", "#fbf4f4cd");
  }
}

// Ajouter un gestionnaire d'événements pour le clic sur le bouton
themeButton.addEventListener("click", toggleTheme);

// Définir le thème initial en fonction des préférences du système
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "sombre");
  themeButton.setAttribute("src", themeArray[0].svg);
  html.style.setProperty("--main-color", "#070000");
  html.style.setProperty("--main-shade", "#3e0000");
  html.style.setProperty("--light-color", "#fbf4f4");
  html.style.setProperty("--light-shade", "#e1a3a3");
  html.style.setProperty("--opac", "#070000cd");
} else {
  document.documentElement.setAttribute("data-theme", "clair");
  themeButton.setAttribute("src", themeArray[1].svg);
  html.style.setProperty("--main-color", "#fbf4f4");
  html.style.setProperty("--main-shade", "#3e0000");
  html.style.setProperty("--light-color", "#070000");
  html.style.setProperty("--light-shade", "#e1a3a3");
  html.style.setProperty("--opac", "#fbf4f4cd");
}
