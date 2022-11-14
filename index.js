// je viens analyser le fichier .env via cette ligne et les valeurs du fichier sont placées dans process.env
require("dotenv").config();

const express = require("express");
const router = require("./app/router");

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

// cette ligne vient paramétrer mon serveur pour qu'il puisse recesoir des informations d'un formulaire (POST)
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Mon serveur est démarré sur http://localhost:${PORT}`);
});