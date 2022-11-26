$(function(){
    var city = '';
    function datas(city){
        $("ul li").remove();
        $.ajax({
            type:"get",
            url:"http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz",
            data:{city:city},
            success:function(res){
                $.each(res.data,function(key,el){
                        var a = '<label>'+el.wea+'</label>';
                        var b = '<span>最高'+el.tem1 + '~最低' + el.tem2 +'</span>';
                        var c = '<p>'+el.day+'</p>';  
                        var li = "<li>"+a+b+c+"</li>";
                        $(".bottom ul").append(li); 
                });
				$(".bottom-a h2").text(res.city);
				$(".acenter .left p").text(res.data[0].tem+"°C");
				$(".acenter .left-a span:first").text(res.data[0].tem1+"°C");
				$(".acenter .left-a span:last").text(res.data[0].tem2+"°C");
				$(".acenter .right p:first").text("湿度:"+res.data[0].humidity);
				$(".acenter .right p:eq(1)").text("风速:"+res.data[0].win_meter);
				$(".acenter .right p:last").text("能见度:"+res.data[0].visibility);
				$(".bottom-a .xia p").text(res.data[0].wea+"."+res.data[0].day);
                console.log(res);//所有
				console.log(res.aqi.air);
            }
        });
    }
	//给搜索按钮添加点击事件
    $("#search").click(function(){   
        city = $(".center input").val().trim();
        console.log(city);
        datas(city);
    });
	//给a标签添加点击事件
    $(".biaoqian a").click(function(){
        city = $(this).text().trim();
        $(".center input").val(city);
        console.log($(this).text());
        datas(city);
    });
    //键盘回车事件
    $(".center input").keyup(function(event){
        if(event.keyCode == 13){
            city = $(".center input").val().trim();
            console.log(city);
            datas(city);
        }
    })
})