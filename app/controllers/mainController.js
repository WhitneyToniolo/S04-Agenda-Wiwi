const datamapper = require("../datamapper");

const mainController = {
    async getHome(req, res) {
        const contacts = await datamapper.getAllContacts();

        if (contacts) { // si contact n'est pas null
            //res.locals.contacts = contacts;             
            res.render("home", {
                contacts
            });
        }
        else {
            // 2- communiquer au visiteur du site, qu'il y a eu un soucis
            res.status(500).render("500");
        }


    },
    async getContact(req, res) {
        // 1- je récupère l'id du contact dans les paramètres de la requête
        const contactID = req.params.id;
        // 2- je récupère les données en BDD
        const contact = await datamapper.getContact(contactID);


        if (contact) {
            // 3- j'envoie les données à la vue
            res.render("contact", {
                // "contact":contact
                // contact:contact
                contact // façon la plus rapide d'écrire
            });
        }
        else {
            res.status(500).render("500");
        }
    },
    async addContact(req,res){
        const formData = req.body;
        console.log(formData);
        await datamapper.addContact(formData);
        res.redirect("/");
    }
};

module.exports = mainController;