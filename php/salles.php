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


$query = " SELECT * FROM salle";
$res = $mysqli->query($query);


//echo "Connected successfully \n";
//echo"<br><br>";

$resultat = [];
while ($row = $res->fetch_assoc()) {

    array_push($resultat,$row);
    //print($row["password"]);
    //echo"<br><br>";
}


//var_dump($resultat);


mysqli_close($mysqli);

echo json_encode($resultat);

?>