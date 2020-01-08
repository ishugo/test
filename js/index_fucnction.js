$(function(){
    $(".b01").click(function(){ 
        //http://ook.dynu.net:9071/github/function.php
        //https://hugo.qov.tw/github/function.php
        // $.ajax('http://ook.dynu.net:9071/github/function.php',{  
        //     type:'POST'
        //     ,data:{	
        //         opt:1
        //     }
        //     }).done(function(msg){
        //         alert(msg);
        //         $("#editor_m").html(msg);
        //          //$(".alert_java").html(msg);
        //          //if(msg==''){location.reload();}else{alert(msg);}
        // });
        //alert();

        $.ajax({
            //url:"http://hugo.qov.tw/github/function.php",
            url:"https://ook.dynu.net:9070/github/fun.php",
            type:"POST",
            data:{
                opt:1
            },
            //dataType: "html",
            beforeSend:function(){
            },
            success: function (response){
                alert(response);
                $(".java_alert").html(response);
            },
        error:function(){
            console.log("ERROR");
        }
    });


    })

    $(".b02").click(function(){           
        alert();
    })



//	console.log(); //debug
//	alert(); //debug
});
