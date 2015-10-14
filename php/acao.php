<?php
require 'Service.PHP.php';

 $valor = $_GET['valor'];
 $result1 = 0.0;
 $result2 = 0.0;
 $result3 = 0.0;
 
 if(is_numeric($valor)){
     $result1 = Service:: calcular1($valor);
   if(is_numeric($valor)){
     $result2 = Service:: calcular2($valor);
   }
     $result3 = Service:: calcular3($valor);
 }
  echo $result1;
  echo $result2;
  echo $result3;

?>