// Le fichier datamapper va être celui dans lequel on va placer toutes nos requêtes à la BDD
const client = require("./dbClient");

const datamapper = {
    async getAllContacts() {
        // je prépare la requête
        const sqlQuery = "SELECT * FROM contact;";

        let result; // result est le retour de ma méthode

        try { // le code a surveillé / ce qui peut planter

            // await va permettre d'attendre la réponse du serveur de BDD avant de continuer
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows;
        }
        catch (error) {
            // comment on a réagi en cas d'erreur

            // 1- Logguer l'erreur
            console.error(error);
        }

        /*
            si tout se passe bien, result est un tableau de contacts
            s'il y a un soucis, result est null
        */
        return result;

    },
    async getContact(id) {
        const sqlQuery = `SELECT * FROM contact WHERE id=${id};`;

        let result;
        try {
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows[0];
        }
        catch (error) {
            console.error(error);
        }

        // console.log("getContact : ", result.rows);
        return result;

        /* par exemple
        result.rows :
            [
                {
                    id: 2,
                    first_name: 'Jason',
                    last_name: 'Statham',
                    phone_number: 'inconnu',
                    group_id: null
                }
            ]

        */
    },
    async addContact(formData){
        const sqlQuery = `INSERT INTO contact (first_name, last_name) VALUES ('${formData.firstName}','${formData.lastName}')`;
        
        try{
            await client.query(sqlQuery);
        } catch (error) {
            console.error(error);
        }

    }
};

module.exports = datamapper;