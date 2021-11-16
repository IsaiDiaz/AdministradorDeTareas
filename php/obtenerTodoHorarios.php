<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idUsuario"])) {
    exit("No hay datos de Usuario");
}
$idUsuario = $_GET["idUsuario"];
$bd = include_once "conexion.php";
$sentencia = $bd->prepare("select a.dia, a.idHorario, b.idRegistro, b.descripcion, b.nombre, b.horaInicio, b.horaFinal from horarios a, registrohorario b where a.idUsuario = ? and a.idHorario=b.idHorario");
$sentencia->execute([$idUsuario]);
$registroHorario = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($registroHorario);
?>