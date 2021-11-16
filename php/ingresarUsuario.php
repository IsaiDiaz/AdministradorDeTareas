<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
if (!$jsonUsuario) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("insert into login(nombre, contrasena, userName) values (?,?,?)");
$resultado = $sentencia->execute([$jsonUsuario->nombre, $jsonUsuario->contrasena, $jsonUsuario->userName]);
echo json_encode([
    "resultado" => $resultado,
]);
?>