$(function(){
    var m_url = 'https://ook.dynu.net:67/github/fun.php';
    
    $(".b01").click(function(){ 
        //alert("b01");
        
        //傳遞 POST 給 ook.dynu.net --------------------
//         var f = document.createElement('form');
//         f.action=m_url;
//         f.method='POST';
//         f.target='_blank';
//         f.enctype="multipart/form-data"
        
//         var k=document.createElement('input');
//         k.type='text';k.name='opt'; k.value='1';
//         f.appendChild(k);
        
//         document.body.appendChild(f);
//         f.submit();
        // ------------------------------------------
        
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
