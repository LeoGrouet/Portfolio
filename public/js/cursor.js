// Créez une seule newDiv à l'extérieur de l'événement
const newDiv = document.createElement("div");
newDiv.classList.add("pointer-circle");
newDiv.style.height = "3vh";
newDiv.style.width = "3vh";
newDiv.style.border = "solid #e1a3a3";
newDiv.style.borderRadius = "15px";
newDiv.style.position = "absolute";
newDiv.style.transform = "translateX(-50%), translateY(-50%)";
newDiv.style.transition = "height 0.2s ease-in, width 0.2s ease-in";
newDiv.style.pointerEvents = "none";
newDiv.style.zIndex = "20";
document.body.appendChild(newDiv);

document.addEventListener("mousemove", (e) => {
  // Récupère les coordonnées de la souris
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Met à jour l'emplacement de la newDiv en fonction de la souris
  newDiv.style.top = `${mouseY - 12}px`;
  newDiv.style.left = `${mouseX - 12}px`;
});

const clickableObject = document.querySelectorAll(".isClickable");
const curseur = document.querySelector(".pointer-circle");

// Gestion de l'augmentation de la taille du curseur lors d'un passage au dessus d'un élément cliquable
for (const object of clickableObject) {
  object.addEventListener("mouseover", () => {
    curseur.style.height = "4vh";
    curseur.style.width = "4vh";
  });
  object.addEventListener("mouseout", () => {
    curseur.style.height = "3vh";
    curseur.style.width = "3vh";
  });
}
