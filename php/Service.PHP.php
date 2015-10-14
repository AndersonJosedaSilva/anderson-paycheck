<?php
class Service  {
    public static function  calcular1($valor){
        if (($valor >= 0) && ($valor <= 1399.12)){
            return ($valor * 0.8) /100;    
        }
        
        else if ($valor >= 1399.13 && $valor <= 2331.88){
            return ($valor * 9/100);    
        }
        
        else if ($valor >= 2331.89 && $valor <= 4663.75){
            return ($valor * 11/100);    
        }
        
        else return 523.02;
        
    }
    public static function  calcular2($valor){
        return $valor =  ($valor * 1.8 +32);
    }
    public static function  calcular3($valor){
        return $valor =  ($valor * 1.8 +32);
    }
}

?>