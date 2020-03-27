$(function(){
    var m_url = 'https://ook.dynu.net:67/github/fun.php';
    
    $.ajax({url:m_url,type:"POST",data:{opt:1},dataType: "html",success: function (msg){
        $(".java_alert").html(msg);
    },error:function(jqXHR, textStatus, errorThrown){

    }});

    $(".b01").click(function(){       
        
        $.ajax({url:m_url,type:"POST",data:{opt:1},dataType: "html",success: function (msg){
            //alert(msg);
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
