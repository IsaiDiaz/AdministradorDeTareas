<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonTarea = json_decode(file_get_contents("php://input"));
if (!$jsonTarea) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("UPDATE tareas SET nombre = ?, estado = ?, descripcion = ? WHERE idTarea = ?");
$resultado = $sentencia->execute([$jsonTarea->nombre, $jsonTarea->estado,  $jsonTarea->descripcion,  $jsonTarea->idTarea]);
echo json_encode($resultado);
?>