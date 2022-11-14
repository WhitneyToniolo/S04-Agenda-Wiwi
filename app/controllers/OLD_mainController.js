const client = require("../dbClient");

const mainController = {
    getHome(req,res){
        const queryText = "SELECT * FROM contact;";

        // utilisation d'un callback
        client.query(queryText, (error, result) => {
            if (error) {
                console.log(error.stack)
            } else {

                res.locals.contacts = result.rows;             
                res.render("home");
            }
        });
    },
    getContact(req,res){
        const queryText = `SELECT * FROM contact WHERE id=${req.params.id};`;
        console.log("requête : ",queryText);
        client
        .query(queryText)
        // fonction qui va être appelée quand tout se passe bien
        .then(result => {
            // console.log("result :",result);
            // console.log("result.rows :",result.rows);
            // console.log("result.rows[0] :",result.rows[0]);
            
            // je teste pour voir si j'ai bien un seul résultat
            if(result.rowCount == 1){
                res.locals.contact = result.rows[0];
                res.render("contact");
            }
            else{
                res.status(500).render("500");
            }
            
        })
        // fonction qui va être appelée quand il y a un problème
        .catch(error => console.error(error.stack));
    },
    addContact(req,res){

    },
    deleteContact(req,res){

    }
};

module.exports = mainController;