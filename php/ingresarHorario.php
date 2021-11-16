<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonHorario = json_decode(file_get_contents("php://input"));
if (!$jsonHorario) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into horarios(idUsuario, dia,(?,?,?)");
$resultado = $sentencia->execute([$jsonHorario->idUsuario, $jsonHorario->dia]);
echo json_encode([
    "resultado" => $resultado,
]);
?>