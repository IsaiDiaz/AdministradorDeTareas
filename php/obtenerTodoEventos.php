<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idUsuario"])) {
    exit("No hay datos de Usuario");
}
$idUsuario = $_GET["idUsuario"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from eventos where idUsuario = ?");
$sentencia->execute([$idUsuario]);
$Evento = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Evento);
?>