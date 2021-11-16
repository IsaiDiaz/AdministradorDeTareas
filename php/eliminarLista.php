<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idLista"])) {
    exit("No hay id de Lista para eliminar");
}
$idLista = $_GET["idLista"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("DELETE FROM listatareas WHERE idLista = ?");
$resultado = $sentencia->execute([$idLista]);
echo json_encode($resultado);
?>