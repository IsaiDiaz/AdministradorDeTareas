<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idLista"])) {
    exit("No hay id de Lista");
}
$idLista = $_GET["idLista"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from listatareas where idLista = ?");
$sentencia->execute([$idLista]);
$Lista = $sentencia->fetchObject();
echo json_encode($Lista);
?>