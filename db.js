'user strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'r00t',
    database: 'trianon'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Conectado ao Banco MySQL');
});

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: 'r00t',
//     database: 'trianon'
// })

// function connection() {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }

//     console.log('Conectado ao Banco MySQL');
//     return pool
// }

// connection.end(function (err) {
//     if (err) {
//         return console.log('error:' + err.message);
//     }
//     console.log('Fechado linha de coneccao com MySQL');
// });

module.exports = connection;