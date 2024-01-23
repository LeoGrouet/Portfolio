// Tableau d'objet comprenant l'ensemble des articles selon leurs ID
const articlesArray = [
  {
    content: document.getElementById("first"),
  },
  {
    content: document.getElementById("second"),
  },
  {
    content: document.getElementById("third"),
  },
  {
    content: document.getElementById("fourth"),
  },
];

// Pour chaque article de ce tableau, lors d'un clic sur
for (const article of articlesArray) {
  article.content.addEventListener("click", (event) => {
    // On isole l'article séléctionné
    const clickedArticle = event.currentTarget;
    // On isole également les div interne a l'article
    const title = clickedArticle.querySelector(".article_overview_title");
    const description = clickedArticle.querySelector(
      ".article_overview_description"
    );

    // Reste du code pour agrandir l'article lorsqu'il est cliqué
    clickedArticle.style.width = "100%";
    clickedArticle.style.borderRadius = "0%";
    clickedArticle.style.transform = "none";
    description.style.display = "flex";
    title.style.height = "91%";

    // On récupere également les autres articles, qu'on va display : none
    articlesArray.forEach(function (otherArticle) {
      if (otherArticle.content !== clickedArticle) {
        const others = otherArticle.content;
        // Vous pouvez ajouter du code ici pour masquer les autres articles si nécessaire
        others.style.display = "none";
      }
    });
  });
}
