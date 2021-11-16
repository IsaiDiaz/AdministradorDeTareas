<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonTarea = json_decode(file_get_contents("php://input"));
if (!$jsonTarea) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into tareas(idLista, nombre, estado, descripcion) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonTarea->idLista, $jsonTarea->nombre, $jsonTarea->estado, $jsontarea->descripcion]);
echo json_encode([
    "resultado" => $resultado,
]);
?>