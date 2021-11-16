<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonLista = json_decode(file_get_contents("php://input"));
if (!$jsonLista) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into listatareas(idUsuario, descripcion, fecha, nombre) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonLista->idUsuario, $jsonLista->descripcion, $jsonLista->fecha,
$jsonLista->nombre]);
echo json_encode([
    "resultado" => $resultado,
]);
?>