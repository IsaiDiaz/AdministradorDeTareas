<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idHorario"])) {
    exit("No hay id de Horario para eliminar");
}
$idHorario = $_GET["idHorario"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("DELETE FROM horarios WHERE idHorario = ?");
$resultado = $sentencia->execute([$idHorario]);
echo json_encode($resultado);
?>