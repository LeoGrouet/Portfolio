// Créez une seule newDiv à l'extérieur de l'événement
const newDiv = document.createElement("div");
newDiv.style.height = "4vh";
newDiv.style.width = "4vh";
newDiv.style.border = "solid white";
newDiv.style.borderRadius = "15px";
newDiv.style.position = "absolute";
newDiv.style.transform = "translateX(-50%), translateY(-50%)";
newDiv.style.transition = "ease-in";
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
