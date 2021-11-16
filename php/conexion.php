<?php
$contrasena="";
$usuario="root";
$base_de_datos="admtareas";
try{
    return new PDO('mysql:host=localhost;dbname='.$base_de_datos,$usuario,$contrasena);
} catch (Exception $e){
    echo "Ocurrio algo con la base de datos: ". $e->getMessage();
}
?>