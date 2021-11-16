<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["userName"]) || empty($_GET["contrasena"])) {
    exit("No hay datos de Usuario");
}
$userName = $_GET["userName"];
$contrasena= $_GET["contrasena"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from login where userName = ? and contrasena= ?");
$sentencia->execute([$userName,$contrasena]);
$Usuario = $sentencia->fetchObject();
echo json_encode($Usuario);
?>