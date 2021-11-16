<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idUsuario"])) {
    exit("No hay datos de Usuario");
}
$idUsuario = $_GET["idUsuario"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select a.descripcion, a.fecha, a.nombre, a.idLista, b.idTarea, b.descripcion, b.nombre, b.estado from listatareas a, tareas b where a.idUsuario = ? and a.idLista=b.idLista");
$sentencia->execute([$idUsuario]);
$Tareas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Tareas);
?>