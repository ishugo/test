function dialog_main(name,msg,title,x,y,width,height){ //指定 dialog name,html,標題,x,y (可設 "auto")
    $('<div class="'+name+'"></div>').appendTo('body').html(msg).dialog({title: title,resizable: false,
      modal: true, zIndex: 10000,autoOpen: true, width: width ,height: height,position: { my: x, at: y },
      show: {effect: "slide"},hide: {effect: "clip"},
       close: function (event, ui) {$(this).remove();}
    });

    $(".ui-widget").css({
        "font-family": "微軟正黑體,Verdana,Arial,sans-serif",
        "font-size": "1.0rem"
    });
}

function dataTable_main(name){ //指定 dataTable name,html
    $("#"+name).DataTable({ //各式表格列表
        //"scrollX": true,
	//"sDom": 'Rfrtlip',
	altEditor: true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "order": [[ 1, 'DESC' ]],
        "language": {
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
        "dom" : 'lBfrtip',
        destroy: true,
		searching: true,

// 		buttons: [
// 			{text: '新增 - 通用必要軟體項',action: function ( e, dt, node, config ) {
// 			    alert();
// 			}},	
// 		]
		
		});
}


$(function(){

sydb('1');

	function sydb(opt){
	    var m_url = 'https://ook.dynu.net:67/github/fun.php';
	    $.ajax({url:m_url,type:"POST",data:{opt:opt},dataType: "html",success: function (msg){
		$(".java_alert").html(msg);
		dataTable_main("example");
	    },error:function(jqXHR, textStatus, errorThrown){

	    }});
	}


	$(".b01").click(function(){       
	sydb('1');
	})

	$(".b02").click(function(){            
	sydb('2');
	})

	$(document).on("click",".b03",function(){  
		//alert("123");
		var html_m = '<div class="row"><div class="col-md-6"><div class="main1" r=""></div></div>'+
		'<div class="col-md-6"><div class="main2"></div></div></div>';
		
		dialog_main("dog",html_m,"測試123","center-200px","top+300px","auto","auto"); 
		
	})

//	console.log(); //debug
//	alert(); //debug
    
});
