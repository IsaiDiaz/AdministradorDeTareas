<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonRegistro = json_decode(file_get_contents("php://input"));
if (!$jsonRegistro) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into registrohorario(idHorario, descripcion, nombre, horaInicio, horaFinal) values (?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonRegistro->idHorario, $jsonRegistro->descripcion, $jsonRegistro->nombre, $jsonRegistro->horaInicio, $jsonRegistro->horaFinal]);
echo json_encode([
    "resultado" => $resultado,
]);
?>