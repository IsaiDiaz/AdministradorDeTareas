<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonEvento = json_decode(file_get_contents("php://input"));
if (!$jsonEvento) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into eventos (idUsuario, nombre, descripcion, fecha, hora) values (?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonEvento->idUsuario, $jsonEvento->nombre, $jsonEvento->descripcion,$jsonEvento->fecha, $jsonEvento->hora]);
echo json_encode([
    "resultado" => $resultado,
]);
?>