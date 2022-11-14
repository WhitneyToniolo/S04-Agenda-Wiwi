const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: "agenda",
    user: 'admin_agenda',
    password: 'agenda',
});
client.connect();

const queryText = "SELECT * FROM contact;";

client.query(queryText, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
});

client
  .query(queryText)
  .then(res => console.log(res.rows[0]))
  .catch(err => console.error(err.stack));

// sur une ligne :
// client.query(queryText).then(res => console.log(res.rows[0])).catch(e => console.error(e.stack))

const text = "INSERT INTO contact (first_name,last_name) VALUES ('Chuck','Norris');"
client
  .query(text)
  .then(res => console.log(res.rows[0]))
  .catch(err => console.error(err.stack));