$(document).ready(function(){
	$(".add").on("click",function(event){
		event.preventDefault();	
		itemList={
				item: $("input[name = 'item']").val(),
				des: $("input[name = 'des']").val(),
				price: $("input[name = 'price']").val(),
		}	
	
			$.ajax({
					url:"/users",
					type:"post",
					data: itemList,
					dataType:"json",
					success:function(a){
						var newJSON = a;
						$(".appe").append('<div class="jumbotron col-md-8" id='+newJSON.id +'class="glyphicon glyphicon-remove pull-right"><button class="glyphicon glyphicon-remove pull-right delete"></button><button type="button" class="btn btn-primary productPrice pull-right">'+newJSON.price+'</button><h3 class="col-md-6 productName">'+newJSON.item+'</h3><h4 class="col-md-6 productDes">'+newJSON.des+'</h4></div>');
									
						}
			});
	});
});
	
	