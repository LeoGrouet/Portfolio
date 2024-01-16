const techsArray = [
  {
    name: "Javascript",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/jslogo.png",
  },
  {
    name: "HTML",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/html-5.png",
  },
  {
    name: "CSS",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/css-3.png",
  },
  {
    name: "EJS",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/ejslogo.png",
  },
  {
    name: "MONGO DB",
    context: "Auto-apprentissage",
    image: "./image/logoStacksTechniques/MONGODB.webp",
  },
  {
    name: "NODE.JS",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/node-js.png",
  },
  {
    name: "SQL",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/sqllogo.jpg",
  },
  {
    name: "WHIMSICAL",
    context: "Auto-apprentissage",
    image: "./image/logoStacksTechniques/whimsical.webp",
  },
  {
    name: "Postgres",
    context: "Formation O'Clock",
    image: "./image/logoStacksTechniques/Postgresql_elephant.png",
  },
  {
    name: "Angular",
    context: "Auto-apprentissage en cours",
    image: "./image/logoStacksTechniques/angular.png",
  },
  {
    name: "React",
    context: "Auto-apprentissage en cours",
    image: "./image/logoStacksTechniques/react.png",
  },
];

const cardContainer = document.querySelector(".card-tech-container");

for (const card of techsArray) {
  const cardDiv = document.createElement("div");
  const cardDivContext = document.createElement("p");
  cardDiv.classList.add("card-tech");
  cardDiv.innerHTML = card.name;
  cardDivContext.innerHTML = card.context;
  cardDivContext.style.display = "flex";

  // Créer l'élément img et définir son attribut src
  const imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", card.image);

  // Ajouter les éléments au conteneur
  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(cardDivContext);
  cardContainer.appendChild(cardDiv);
}
