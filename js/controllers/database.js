var mysql = require('mysql');
var con = mysql.createConnection({
//host: "root",
user: "root",
password: "",
//database: "java",
//dest:'./data.sql'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS BD", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    });

    con = mysql.createConnection({
    //host: "root",
    user: "root",
    password: "",
    database: "BD",
    //dest:'./data.sql'
    });

    con.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20) )", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table users created"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS users_Student (id INT AUTO_INCREMENT PRIMARY KEY,FOREIGN KEY (id) REFERENCES users(id),name VARCHAR(20))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created users_Student"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS users_Professor (id INT AUTO_INCREMENT PRIMARY KEY,FOREIGN KEY (id) REFERENCES users(id),name VARCHAR(20))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created users_Professor"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS reservations (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),type VARCHAR(20))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created reservations"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS stands (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),nameUsers VARCHAR(20),type VARCHAR(20),typeDeReseravation VARCHAR(20),emplacement VARCHAR(20),dateDeReservation VARCHAR(20),horaires VARCHAR(20), FOREIGN KEY(id) REFERENCES reservations(id))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created stands"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS amphis (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),nameUsers VARCHAR(20),type VARCHAR(20),typeDeReseravation VARCHAR(20),dateDeReservation VARCHAR(20),horaires VARCHAR(20), FOREIGN KEY(id) REFERENCES reservations(id))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created amphis"); //log
    });
    con.query("CREATE TABLE IF NOT EXISTS salles (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),nameUsers VARCHAR(20),type VARCHAR(20),typeDeReseravation VARCHAR(20),dateDeReservation VARCHAR(20),horaires VARCHAR(20), FOREIGN KEY(id) REFERENCES reservations(id))", function (err, result) {    //CREATION DE LA table
      if (err) throw err;   //erreur
      console.log("Table created salles"); //log
    });
    con.end();
    //  con.end();
});

var mysqldump = require('mysqldump');

var con2 = mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'BD',
    },
    dumpToFile: './db/BD.sql',
});





/*//Une autre connexion avec la base de données
var con1 = mysql.createConnection({
//host: "root",
user: "root",
password: "",
database: "javatest13"
});

con1.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
  //con1.query("CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))", function (err, result) {    //CREATION DE LA table
  //  if (err) throw err;   //erreur
  //  console.log("Table created"); //log
  //con1.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result) {  //Insertion
  //  if (err) throw err;   //erreurIgnoring invalid configuration option passed to Connection: dumpToFile. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection

    //console.log("1 record inserted");//log
  //});

//  });






/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))", function (err, result) {    //CREATION DE LA table
    if (err) throw err;   //erreur
    console.log("Table created"); //log
  con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result) {  //Insertion
    if (err) throw err;   //erreur
    console.log("1 record inserted");//log
  });
  });
  con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
    con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    });
  con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
    con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    });
  con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
    con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
});
});
});

var mysqldump = require('mysqldump');

var con = mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'javatest',
    },
    dumpToFile: './db/javatest.sql',
});

*/




///opt/lampp/var/mysql/
