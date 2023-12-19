const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

// Définir le répertoire statique avec express.static
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server listening on "localhost:${port}"`);
});
