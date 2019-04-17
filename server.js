const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 1337;

const cors = require('cors');

var corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'x-access-token'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

  

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'r00t',
    database: 'mydb'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
