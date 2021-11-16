<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonRegistro = json_decode(file_get_contents("php://input"));
if (!$jsonRegistro) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("UPDATE registrohorario SET descripcion = ?, nombre = ?,  horaInicio = ?, horaFinal = ? WHERE idRegistro = ?");
$resultado = $sentencia->execute([$jsonRegistro->descripcion, $jsonRegistro->nombre, $jsonRegistro->horaInicio, $jsonRegistro->horaFinal, $jsonRegistro->idRegistro]);
echo json_encode($resultado);
?>