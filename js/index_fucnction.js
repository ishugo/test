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
        axios({
            method: 'post',
            url: 'http://ook.dynu.net:9071/github/function.php',
            data: {
                opt:1
            }.done(function(msg){
                alert(msg);
                $("#editor_m").html(msg);
            })
        });

    })

    $(".b02").click(function(){           
        var http = new XMLHttpRequest();
        var url = "http://ook.dynu.net:9071/github/function.php";
        var params = "opt=1";
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.open("POST", url, true);
        http.send(params);
    })



//	console.log(); //debug
//	alert(); //debug
});