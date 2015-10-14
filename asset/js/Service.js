var Service = {
    
    calcular: function(valor,callback,callback1,callback2){
    $.ajax({
       url:'php/acao.php',
       data : {'valor':valor},
       success: function(result1,result2,result3){
           alert("valor" + valor);
           callback(parseFloat(result1));
           callback1(parseFloat(result2));
           callback2(parseFloat(result3));
           
       },
       error:function(){
           callback(null);
       }
        
    });
    }
    
};
