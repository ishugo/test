$(function(){
    var m_url = 'http://ook.dynu.net:9070/github/fun.php';
    
    $(".b01").click(function(){ 
        alert("b01");
        
        $.ajax({url:m_url,type:"POST",data:{opt:1},dataType: "html",success: function (msg){
            alert(msg);
            $(".java_alert").html(msg);
        },error:function(jqXHR, textStatus, errorThrown){
            console.log("responseText:"+jqXHR.responseText);
            console.log("status:"+jqXHR.status);
            console.log("readyState:"+jqXHR.readyState);
            console.log("statusText:"+jqXHR.statusText);
            console.log("textStatus:"+textStatus);
            console.log("errorThrown:"+errorThrown);
        }});
    })

    $(".b02").click(function(){           
        alert("b02");
    })

//	console.log(); //debug
//	alert(); //debug
    
});
