$(document).ready(function(){
	$(".appe").on("click","button",function(){
		$(this).parent('div').remove(),
			$.ajax({
				url:"/products/" + this.id,
				type:"delete",
				success: function(data){
					$(this).parent('div').remove();
				}
			});
	});
		$.ajax({
			url: "/products",
			type: "get",
			success: function(my){
				for(i = 0; i < my.length; i++){
					$(".appe").append('<div class="jumbotron col-md-8"><button id="'+my[i].id+'" class="delete glyphicon glyphicon-remove pull-right"></button><span class="btn btn-primary productPrice pull-right">'+my[i].price+'</span><h3 class="col-md-6 productName">'+my[i].item+'</h3><h4 class="col-md-6 productDes">'+my[i].des+'</h4></div>');
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
							$(".appe").append('<div class="jumbotron col-md-8"><button id="'+newJSON.id+'" class=" delete glyphicon glyphicon-remove pull-right delete"></button><span class="btn btn-primary productPrice pull-right">'+newJSON.price+'</span><h3 class="col-md-6 productName">'+newJSON.item+'</h3><h4 class="col-md-6 productDes">'+newJSON.des+'</h4></div>');
						}
					});
			});
});
	
	