$(document).ready(function(){
	$.ajax({
			url: "/products",
			method: "get",
			success: function(my){
			console.log(my);
			
				for(i = 0; i < my.length; i++){
					
			$(".appe").append('<div id="'+my[i].id+'" class="jumbotron col-md-8"class="glyphicon glyphicon-remove pull-right"><button class="glyphicon glyphicon-remove pull-right delete"></button><button type="button" class="btn btn-primary productPrice pull-right">'+my[i].price+'</button><h3 class="col-md-6 productName">'+my[i].item+'</h3><h4 class="col-md-6 productDes">'+my[i].des+'</h4></div>');
									
				}
					
			}
			
	});
	$(".add").on("click",function(event){
		event.preventDefault();	
		itemList={
				item: $("input[name = 'item']").val(),
				des: $("input[name = 'des']").val(),
				price: $("input[name = 'price']").val(),
		}	
	
			$.ajax({
					url:"/products",
					type:"post",
					data: itemList,
					dataType:"json",
					success:function(a){
						var newJSON = a;
						$(".appe").append('<div id="'+newJSON.id+'" class="jumbotron col-md-8"class="glyphicon glyphicon-remove pull-right"><button class="glyphicon glyphicon-remove pull-right delete"></button><button type="button" class="btn btn-primary productPrice pull-right">'+newJSON.price+'</button><h3 class="col-md-6 productName">'+newJSON.item+'</h3><h4 class="col-md-6 productDes">'+newJSON.des+'</h4></div>');
									
						}
			});
	});
});
	
	