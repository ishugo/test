function input_small(name, title,type,m_val){ //輸入欄位 small name, title,type,資料 
    var input_m = '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-sm">'+title+
    '</span></div><input type="'+type+'" name="'+name+'" value="'+m_val+'" class="w_db form-control my_input" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></div>';
    return input_m;
}

function input_m(name, title,type,m_val){ //輸入欄位 small name, title,type
    var input_m = '<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-default">'+title+'</span></div><input type="'+type+'" name="'+name+'" value="'+m_val+'" class="w_db form-control my_input" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>';
    return input_m;
}

function abutton_ui(name, title, src, target){ //輸入按鈕 id, title、src、target
    var button_m = '<a href="'+src+'" id="'+name+'" class="button_m ui-button ui-widget ui-corner-all" target="'+target+'" role="button">'+title+'</a>';
    return button_m;
}

function textarea_m(name, title, row){ //輸入編輯欄位 name, title, row
    var textarea_q = '<div class="mb-3"><div class="form-group"><label for="textarea_m">'+title+'</label><textarea class="w_db form-control" name="'+name+'" id="textarea_m" rows="'+row+'"></textarea></div></div>';
    return textarea_q;
}

function radio_m(name, title, value_m){ //輸入Radio name, title, value_m
    var radio_q = '<div class="input-group mb-3"><div class="form-check"><input type="radio" class="w_db form-check-input radio_m" name="'+name+'" value="'+value_m+'"><label class="form-check-label" for="radio_m">'+title+'</label></div></div>';
    return radio_q;
}

function select_m(name, select_a,value_m){ //輸入Select name, select_a,value_m
    var sel_m = select_a.split(",");
    var val_m = value_m.split(",");
    var select_q = '<div class="input-group mb-3"><select name="'+name+'" class="w_db browser-default custom-select">';
        select_q += '<option selected>請選擇</option>';
        for($i=0;$i<sel_m.length;$i++){
            select_q += '<option value="'+$.trim(val_m[$i])+'">'+$.trim(sel_m[$i])+'</option>';        
        }
        select_q += '</select></div>';
    return select_q;
}

function checkbox_m(name,title,value_m){ //輸入CheckBox name,title,value_m
    var checkbox_q = '<div class="input-group mb-3"><div class="form-check"><input type="checkbox" name="'+name+'" class="w_db form-check-input checkbox_m" value="'+value_m+'"><label class="form-check-label" for="checkbox_m">'+title+'</label></div></div>';
    return checkbox_q;
}

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

function dialog_add(){ //確定
    var main = $(".main1").attr("r");
    //alert(main);
    var arr = new Array();

    $(".w_db").each(function( i, el ) {
        var atype = $(this).attr('type');
        var athis = $(this);
        
        if (athis.is("input")) {
            switch(atype) {
    			case "radio": if($(this).prop("checked") == true){arr.push($(this).val());} break; 
    			case "checkbox": if($(this).prop("checked") == true){arr.push($(this).val());} break; 
    			case "text":arr.push($(this).val()); break;
    			case "password":arr.push($(this).val()); break;
		    }
        } else if (athis.is("select")) {
            arr.push(athis.val());
        } else if (athis.is("textarea")) {
            arr.push(athis.val());
        }
		
    });  
    
    console.log(arr); //debug
    
}

function del_all(){ //全選 // 不全選
	if($(".clickAll").prop("checked")) {
		$("input[name^='active_col']").each(function() {
			$(this).prop("checked", true);
		});
	  } else {
		$("input[name^='active_col']").each(function() {
			$(this).prop("checked", false);
		});           
	}
}


$(function(){

	sydb('1');

	function sydb(opt){
	    var m_url = 'https://ook.dynu.net:67/github/fun.php';
	    $.ajax({url:m_url,type:"POST",data:{opt:opt},dataType: "html",success: function (msg){		    
		$(".java_alert").html(msg);
		    
		var table = $('#example').DataTable({ //各式表格列表 
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
		}});
		    		    
		switch(opt) {  
			case "1": //新增、刪除			
				new $.fn.dataTable.Buttons( table, {
				buttons: [{ 
					text: '新增', action: function ( e, dt, node, conf ) {
						dialog_main("dog1",'<div class="main1"></div>',"新增","","","210","210");
						$(".main1").append(input_m("in01","try1","text","")); 
						$(".main1").append(input_m("in02","try2","text","")); 
						$(".main1").append('<br><span class="d-flex flex-row-reverse">'+abutton_ui("send_a","送出","javascript:;","")+'</span>'); 
						$("#send_a").css("display","block");
					}},{
					text: '刪除', action: function ( e, dt, node, conf ) {
						var del_q = $("input[name^='active_col']:checkbox:checked").map(function() {
						return $(this).attr("name").replace("active_col[","").replace("]","");
						}).get().join(',');
						
						$.ajax(m_url,{type:'POST',data:{opt:"4",del_q:del_q}}).done(function(msg){
							//alert("刪除成功！");
							sydb('1');
							//location.reload();
							//console.log( msg );
						});
						
					}}]
				});
				
				table.buttons( 0, null ).container().prependTo(
				    table.table().container()
				);
			break;
			case "2":
			break;
		}

		    
	    },error:function(jqXHR, textStatus, errorThrown){

	    }});
	}
	
	$(document).on("click","#send_a",function(){ //新增
		var m_url = 'https://ook.dynu.net:67/github/fun.php';
		var try1 = $("input[name='in01']").val();
		var try2 = $("input[name='in02']").val();
		
		$.post( m_url,{opt:3,try1:try1,try2:try2}, function( msg ) {
			//console.log(msg); //debug
			//alert("新增成功！");
			sydb('1');
			$(".dog1").dialog("close");
			//location.reload();
		});
		
	});

	$(".b01").click(function(){ //查尋測試       
		sydb('1');
	})

	$(".b02").click(function(){ //查尋複製網站           
		sydb('2');
	})

	$(document).on("click",".b03",function(){  
		//alert("123");
		var html_m = '<div class="row"><div class="col-md-6"><div class="main1" r="123456"></div></div>'+
		'<div class="col-md-6"><div class="main2"></div></div></div>';
		
		dialog_main("dog",html_m,"測試123","center-200px","top+300px","auto","auto"); 
		
		$(".main1").append(input_m("in01","名稱","text",""));  
		//輸入欄位 small name, title,type
		$(".main1").append(input_m("in02","密碼","password","")); 
		//輸入Select name, select_a,value_m
		$(".main1").append(select_m("sel01","ABC, DEF","aaa, bbb")); 
		//輸入Radio name, title, value_m
		$(".main1").append('<div class="form-inline">'+radio_m("radio1","男","男")+radio_m("radio1","女","女")+'</div>'); 
		//輸入按鈕 id, title、src、target
		$(".main1").append('<span>'+abutton_ui("but1","測試1","http://tw.yahoo.com","_blank")+'</span>'); 
		$(".main1").append('<span>'+abutton_ui("but2","測試2","https://www.spexcourier.com/","_blank")+'</span>'); 


		//輸入編輯欄位 name, title, row
		$(".main2").append(textarea_m("textarea_w","留言","5"));
		//輸入CheckBox name,title,value_m
		$(".main2").append('<div class="form-inline">'+checkbox_m("ck1","台北市","北市")+checkbox_m("ck2","台南市","南市")+'</div>');
		//輸入按鈕 id, title、src、target
		$(".main2").append('<span class="d-flex flex-row-reverse">'+abutton_ui("but6","測試 console.log","javascript:;","")+'</span>'); 
		
	})

	$(document).on("click","#but6",function(){
		//dialog_add();
		$(".dog").dialog("close");
    	});
	
	$(document).on("click",".send_c",function(){ //編輯
		alert("123");
	});

//	console.log(); //debug
//	alert(); //debug
    
});
