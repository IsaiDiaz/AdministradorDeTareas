<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idEvento"])) {
    exit("No hay id de Evento para eliminar");
}
$idEvento = $_GET["idEvento"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("DELETE FROM eventos WHERE idEvento = ?");
$resultado = $sentencia->execute([$idEvento]);
echo json_encode($resultado);
?>