const techsArray = [
  {
    name: "Javascript",
    image: "./image/jslogo.png",
  },
  {
    name: "HTML",
    image: "./image/html-5.png",
  },
  {
    name: "CSS",
    image: "./image/css-3.png",
  },
  {
    name: "EJS",
    image: "./image/ejslogo.png",
  },
  {
    name: "MONGO DB",
    image: "./image/MONGODB.webp",
  },
  {
    name: "NODE.JS",
    image: "./image/node-js.png",
  },
  {
    name: "SQITCH",
    image: "./image/sqitchlogo.png",
  },
  {
    name: "SQL",
    image: "./image/sqllogo.jpg",
  },
  {
    name: "WHIMSICAL",
    image: "./image/whimsical.webp",
  },
];

const cardContainer = document.querySelector(".card-tech-container");

for (const card of techsArray) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-tech");
  cardDiv.innerHTML = card.name;

  // Créer l'élément img et définir son attribut src
  const imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", card.image);

  // Ajouter les éléments au conteneur
  cardDiv.appendChild(imgDiv);
  cardContainer.appendChild(cardDiv);
}
