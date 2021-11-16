<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idRegistro"])) {
    exit("No hay id de Registro para eliminar");
}
$idRegistro = $_GET["idRegistro"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("DELETE FROM registrohorario WHERE idRegistro = ?");
$resultado = $sentencia->execute([$idRegistro]);
echo json_encode($resultado);
?>