/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

subtotal = 0
$(".item").draggable({
	helper: "clone",
	start: function(event, ui){
		test = this
	}
});

$("#grocery_list").droppable({
	drop: function(){
		$(test).clone().appendTo("#grocery_list tbody");
		total(test);
	}
});

var total = function(item) {
	console.log(item);
	var price = +$(item).find(".item_price").text();
	subtotal += price;
	$("#total_cost").html(subtotal);
}
