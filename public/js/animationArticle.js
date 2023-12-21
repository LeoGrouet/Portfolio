const articles = document.querySelectorAll(".article_overview");

articles.forEach((article) => {
  article.addEventListener("click", articleExtend);

  function articleExtend(event) {
    // Récupère l'élément spécifique qui a été cliqué
    const clickedArticle = event.currentTarget;
    const textElement = clickedArticle.querySelector(".article_overview_title");
    const textTitle = clickedArticle.querySelector(
      ".article_overview_title_text"
    );
    const descriptionDiv = clickedArticle.querySelector(
      ".article_overview_description"
    );

    // Vérifie si l'article est déjà étendu
    const isExpanded = clickedArticle.style.width === "100%";

    // Parcours tous les articles
    articles.forEach((article) => {
      if (article === clickedArticle) {
        if (isExpanded) {
          // Rétablir l'état initial
          article.style.width = "15%";
          textElement.style.position = "absolute";
          article.style.transition = "0.4s";
          textElement.style.height = "10%";
          article.classList.add("anim");
          descriptionDiv.style.display = "none";
          textTitle.style.padding = "5px 5px 5px 5px";
          article.style.borderRadius = "50% 50% 50% 50% / 15% 15% 15% 15%";
        } else {
          // Augmente la largeur de l'article sélectionné
          article.style.width = "100%";
          article.style.borderRadius = "0";
          article.style.transition = "1s";
          article.classList.remove("anim");
          textTitle.style.padding = "38px 5px 5px 5px";
          if (clickedArticle.id != "third") {
            descriptionDiv.style.display = "block";
          } else {
            descriptionDiv.style.display = "flex";
          }
          textElement.style.position = "absolute";
          textElement.style.left = "0";
          textElement.style.bottom = "0"; // Ajustez la position pour rester en bas
          textElement.style.width = "100%";
          textElement.style.height = "95%";
          textElement.style.zIndex = "2"; // Assurez-vous que le texte est au-dessus de l'image de fond
        }
      } else {
        // Cache les articles non sélectionnés
        article.style.display = isExpanded ? "block" : "none";
      }
    });
  }
});
