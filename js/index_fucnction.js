$(function(){
    $(".b01").click(function(){
        $.ajax('http://hugo.qov.tw/github/function.php',{  
            type:'POST'
            ,data:{	
                opt:1
            }
            }).done(function(msg){
                $("#editor_m").html(msg);
                 //$(".alert_java").html(msg);
                 //if(msg==''){location.reload();}else{alert(msg);}
            });
    })
//	console.log(); //debug
//	alert(); //debug
});