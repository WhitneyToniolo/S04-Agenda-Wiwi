const { Client } = require('pg');
const client = new Client({
    // host: 'localhost', // valeur par défaut
    // port: 5432, // valeur par défaut
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
});
client.connect();

module.exports = client;