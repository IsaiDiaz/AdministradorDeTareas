<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idHorario"])) {
    exit("No hay id de Horario");
}
$idHorario = $_GET["idHorario"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from registrohorario where idHorario = ?");
$sentencia->execute([$idHorario]);
$Registro = $sentencia->fetchObject();
echo json_encode($Registro);
?>