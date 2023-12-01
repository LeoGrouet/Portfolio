const content = document.querySelector(".content");
const container = document.querySelector(".loader-container");
const button = document.querySelector(".learn-more");

button.addEventListener("click", () => {
  container.classList.add("fade-out");
  content.classList.add("fade-in");

  // Utilisez setTimeout pour définir le nouveau contenu après l'animation
  setTimeout(() => {
    content.style.display = "block";
    container.style.display = "none";

    // Supprimez les classes d'animation pour les réutiliser lors de futurs changements
    container.classList.remove("fade-out");
    content.classList.remove("fade-in");
  }, 500); // Utilisez la même durée que celle définie dans la transition (0.5s dans cet exemple)
});
