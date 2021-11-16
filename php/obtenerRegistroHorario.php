<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idRegistro"])) {
    exit("No hay id de Registro");
}
$idRegistro = $_GET["idRegistro"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from registrohorario where idRegistro = ?");
$sentencia->execute([$idRegistro]);
$Registro = $sentencia->fetchObject();
echo json_encode($Registro);
?>