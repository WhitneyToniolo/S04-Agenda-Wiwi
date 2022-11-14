const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

// affichage des contacts dans mon agenda
router.get("/",mainController.getHome);
router.get("/contact/:id",mainController.getContact);

// réception du formulaire
router.post("/",mainController.addContact);

module.exports = router;

