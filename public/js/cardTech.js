const techsArray = [
  {
    name: "Javascript",
    image: "./image/logoStacksTechniques/jslogo.png",
  },
  {
    name: "HTML",
    image: "./image/logoStacksTechniques/html-5.png",
  },
  {
    name: "CSS",
    image: "./image/logoStacksTechniques/css-3.png",
  },
  {
    name: "EJS",
    image: "./image/logoStacksTechniques/ejslogo.png",
  },
  {
    name: "MONGO DB",
    image: "./image/logoStacksTechniques/MONGODB.webp",
  },
  {
    name: "NODE.JS",
    image: "./image/logoStacksTechniques/node-js.png",
  },
  {
    name: "SQL",
    image: "./image/logoStacksTechniques/sqllogo.jpg",
  },
  {
    name: "WHIMSICAL",
    image: "./image/logoStacksTechniques/whimsical.webp",
  },
  {
    name: "Postgres",
    image: "./image/logoStacksTechniques/Postgresql_elephant.png",
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
