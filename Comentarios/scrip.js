$(document).ready(function(){
    
    $("#single").click(function(){
        nombre= $('#nombre').val();
        comentario=$('#comentario').val();
        $(".tablas").append('<i class="jumbotron">'+'<li>'+nombre+'</li>'+'<li>'+comentario+'</li>'+'</li>');
        $('#nombre').val("")
        $('#comentario').val("")
        
   }); 
});

$(document).ready(function(){
    
    $("#single").click(function(){
        nombre= $('#nombre').val();
        comentario=$('#comentario').val();
        $(".tablas1").append('<i class="jumbotron">'+'<li>'+nombre+'</li>'+'<li>'+comentario+'</li>'+'</li>');
        $('#nombre').val("")
        $('#comentario').val("")
        
   }); 
});

$(document).ready(function(){
    
    $("#single").click(function(){
        nombre= $('#nombre').val();
        comentario=$('#comentario').val();
        $(".tablas2").append('<i class="jumbotron">'+'<li>'+nombre+'</li>'+'<li>'+comentario+'</li>'+'</li>');
        $('#nombre').val("")
        $('#comentario').val("")
        
   }); 
});