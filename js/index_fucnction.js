$(function(){
    var m_url = 'https://ook.dynu.net:67/github/fun.php';
    
    $.ajax({url:m_url,type:"POST",data:{opt:1},dataType: "html",success: function (msg){
        $(".java_alert").html(msg);
	$("#example").DataTable({ //各式表格列表
		//"scrollX": true,
		//"sDom": 'Rfrtlip',
		//altEditor: true,
		lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
		order: [[ 1, 'DESC' ]],
		language: {
		    "lengthMenu": "每頁 _MENU_ 筆",
		    "zeroRecords": "抱歉，沒有找到！！！",
		    "info": "總資料 _MAX_ 筆，_START_ 筆至 _END_ 筆，_PAGE_ 至 _PAGES_ 頁",
		    "infoEmpty": "沒有可用的記錄",
		    "infoFiltered": "(搜尋 _TOTAL_ 筆，總資料 _MAX_ 筆)",
		    "loadingRecords": "載入中...",
		    "processing":     "處理中...",
		    "search":"搜尋",
		    "paginate": {
			"first":      "第一頁",
			"last":       "最後一頁",
			"next":       "下一頁",
			"previous":   "上一頁"
		    },
		    "aria": {
			"sortAscending":  ": 按升序對列進行排序",
			"sortDescending": ": 按降序對列進行排序"
		    }
		},
		dom: 'lBfrtip',
		destroy: true,
		searching: true

	// 	buttons: [
	// 		{text: '新增 - 通用必要軟體項',action: function ( e, dt, node, config ) {
	// 			alert();
	// 		}},	
	// 	]
		
    	});	
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
