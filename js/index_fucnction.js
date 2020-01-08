$(function(){
    var m_url = 'https://ook.dynu.net:9070/github/fun.php';
    $(".b01").click(function(){ 
        alert("b01");
        
        $.ajax({url:m_url,type:"POST",data:{opt:1},dataType: "html",success: function (msg){
            alert(msg);
            $(".java_alert").html(msg);
        },error:function(){
            console.log("ERROR");
        }});
    })

    $(".b02").click(function(){           
        alert("b02");
    })

//	console.log(); //debug
//	alert(); //debug
    
});
