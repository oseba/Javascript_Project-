const sqlite3 = require('sqlite3')

const createTable = () => {
  //Par défaut sur sqlite c'est off
  db.run("PRAGMA foreign_keys = ON;");
  //Création des entités
  console.log("create database table contacts");
  db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT)",  insertData);
  db.run("CREATE TABLE IF NOT EXISTS users_Student(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,FOREIGN KEY(id) REFERENCES users(id))");
  db.run("CREATE TABLE IF NOT EXISTS users_Professor(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,FOREIGN KEY(id) REFERENCES users(id))");
  db.run("CREATE TABLE IF NOT EXISTS reservations(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,type TEXT)");
  //db.run("CREATE TABLE IF NOT EXISTS evenements(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, FOREIGN KEY(id) REFERENCES reservations(id))");
  //db.run("CREATE TABLE IF NOT EXISTS divers(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, FOREIGN KEY(id) REFERENCES reservations(id))");
  db.run("CREATE TABLE IF NOT EXISTS stands(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,nomUtilisateur TEXT,type TEXT,typeDeReseravation TEXT,emplacement TEXT,dateDeReservation TEXT,horaires TEXT, FOREIGN KEY(id) REFERENCES reservations(id))");
  db.run("CREATE TABLE IF NOT EXISTS amphis(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,nomUtilisateur TEXT,typeDeReseravation TEXT,dateDeReservation TEXT,horaires TEXT, FOREIGN KEY(id) REFERENCES reservations(id))");
  db.run("CREATE TABLE IF NOT EXISTS salles(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT,nomUtilisateur TEXT,type TEXT,typeDeReseravation TEXT, dateDeReservation TEXT,horaires TEXT, FOREIGN KEY(id) REFERENCES reservations(id))");
  //db.run("CREATE TABLE IF NOT EXISTS horaires(id INTEGER PRIMARY KEY AUTOINCREMENT, )");

  //db.each("SELECT id, name FROM users", function(err, row) {
  //  console.log("User id : "+row.id, row.name);
  //});
  //db.run("SELECT name FROM users_Student INNER JOIN users ON users.id = users_Student.id");
}
const insertData = () =>{

    console.log("Insert data")
     //db.run('INSERT INTO users (name) VALUES (?)', ["admin"]);
     //db.run('INSERT INTO users_Student (name,id) VALUES ("Axel",1)');
}
//Création de la base de données
let db = new sqlite3.Database("./db/mydb.sqlite3", (err) => {
    if (err) {
        console.log('Error when creating the database', err)
    } else {
        console.log('Database created!')
        //Fonction de la création de la bd
        createTable()
    }
})
