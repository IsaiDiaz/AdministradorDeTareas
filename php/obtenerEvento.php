<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idEvento"])) {
    exit("No hay id de Evento");
}
$idEvento = $_GET["idEvento"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from eventos where idEvento = ?");
$sentencia->execute([$idEvento]);
$Evento = $sentencia->fetchObject();
echo json_encode($Evento);
?>