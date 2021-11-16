<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonLista = json_decode(file_get_contents("php://input"));
if (!$jsonLista) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("UPDATE listatareas SET descripcion = ?, fecha = ?, nombre = ? WHERE idLista = ?");
$resultado = $sentencia->execute([$jsonLista->descripcion, $jsonLista->fecha, $jsonLista->nombre, $jsonLista->idLista]);
echo json_encode($resultado);
?>