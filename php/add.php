<?php
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$mysqli = new mysqli($servername, $username, $password,"java");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$mdp = password_hash($_POST["password"], PASSWORD_BCRYPT);
$pseudo = $_POST["pseudo"];

/*
echo "Ce que php recoit : ".$_POST["pseudo"]." et ".$_POST["password"]." et le mot de passe crypté est : ".$mdp.

    " Est ce que le mdp est bon ?  ".(password_verify("blablabla",$mdp) == true);*/

$query = "INSERT INTO User (pseudo, password) VALUES ('$pseudo', '$mdp')";


if ($mysqli->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $mysqli->error;
}
mysqli_close($mysqli);

?>