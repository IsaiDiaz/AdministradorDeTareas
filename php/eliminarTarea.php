<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idTarea"])) {
    exit("No hay id de tarea para eliminar");
}
$idTarea = $_GET["idTarea"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("DELETE FROM tareas WHERE idTarea = ?");
$resultado = $sentencia->execute([$idTarea]);
echo json_encode($resultado);
?>