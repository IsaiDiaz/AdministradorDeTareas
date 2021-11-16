<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonHorario = json_decode(file_get_contents("php://input"));
if (!$jsonHorario) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("UPDATE horarios SET dia = ? WHERE idHorario = ?");
$resultado = $sentencia->execute([$jsonHorario->dia,  $jsonHorario->idHorario]);
echo json_encode($resultado);
?>