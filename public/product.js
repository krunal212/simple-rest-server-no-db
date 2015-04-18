$(document).ready(function(){
	$(".add").on("click",function(event){
		event.preventDefault();	
		var item = $("input[name = 'item']").val();
		var des =  $("input[name = 'des']").val();
		var price = $("input[name = 'price']").val();
	
			$.ajax({
					url:"/users",
					type:"post",
					data:{
						item,
						des,
						price,
						},
							success:function(data){
								$(".item1").append(data.item);
								$(".des1").append(data.des);
								$(".price").append(data.price);
								}
					});
	});
	
})