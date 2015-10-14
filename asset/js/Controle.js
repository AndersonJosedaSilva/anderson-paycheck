var Controle = {
    init:function(){
        Controle.setForm();
    },
    
    setForm:function(){
        var form = document.querySelector('form');
        form.addEventListener("submit",function(event){
            Controle.Calculadora(form);
            
            event.preventDefault()
        });
    },
    
    Calculadora:function(form){
        var 
        valor = parseFloat(form.valor.value),
        result1 = 0.0,
        result2 = 0.0,
        result3 = 0.0;
        
    
    var callback = function(result1){
        Controle.apresentarResultado(result1);
    
    }
      var callback1 = function(result1){
        Controle.apresentarResultado(result1);
    
    }
    
      var callback2 = function(result1){
        Controle.apresentarResultado(result1);
    }
    
    
     Service.calcular(valor,callback,callback1,callback2);
    

},
    apresentarResultado: function(result1,result2,result3){
        var apresResultado1 = document.querySelector(".result1");
        apresResultado1.innerHTML = result1.toFixed(2);
           
           var apresResultado2 = document.querySelector(".result2");
        apresResultado2.innerHTML = result2.toFixed(2);
        
           var apresResultado3 = document.querySelector(".result3");
        apresResultado3.innerHTML = result3.toFixed(2);
    },

    
};
Controle.init();