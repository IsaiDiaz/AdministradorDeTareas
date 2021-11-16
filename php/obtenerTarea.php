<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idTarea"])) {
    exit("No hay id de Tarea");
}
$idTarea = $_GET["idTarea"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select * from tareas where idTarea = ?");
$sentencia->execute([$idTarea]);
$Tarea = $sentencia->fetchObject();
echo json_encode($Tarea);
?>