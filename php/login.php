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

$mdpPost = $_POST["password"];
$pseudo = $_POST["pseudo"];
$successfull = false;

/*
echo "Ce que php recoit : ".$_POST["pseudo"]." et ".$_POST["password"]." et le mot de passe crypté est : ".$mdp.

    " Est ce que le mdp est bon ?  ".(password_verify("blablabla",$mdp) == true);*/


$query = "SELECT password FROM User WHERE pseudo = '$pseudo'";
$res = $mysqli->query($query);

$resultat = [];



while ($row = $res->fetch_assoc()) {

    array_push($resultat,$row);



}

if(password_verify($mdpPost,$resultat[0]["password"]))
{

    $successfull = true;
}

$loggedin = [];
$loggedin["loggedin"] = $successfull;


mysqli_close($mysqli);

echo json_encode($successfull);

?>