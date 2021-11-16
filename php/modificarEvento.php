<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonEvento = json_decode(file_get_contents("php://input"));
if (!$jsonEvento) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("UPDATE `eventos` SET `nombre`=?,`descripción`=?,`fecha`=?,`hora`=? WHERE `idEvento`= ?");
$resultado = $sentencia->execute([$jsonEvento->nombre, $jsonEvento->descripcion, $jsonEvento->fecha, $jsonEvento->hora, $jsonEvento->idEvento]);
echo json_encode($resultado);
?>