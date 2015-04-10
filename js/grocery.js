/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

// $( "tr.item" ).draggable();

// var item_list ={};

// $(".item").draggable({
//         helper: "clone",
//         start: function(event, ui) {
//             item_list.tr = this;
//             item_list.helper = ui.helper;
//         }
// });

// $("#grocery_list tbody").droppable({
//     drop: function(event, ui) {
//         var item = ui.draggable.text();
//         $(this).find("input").val(item);

//         // $(c.tr).remove();
//         // $(c.helper).remove();
//     }
// });
$(".item").draggable({
	helper: "clone",
	start: function(event, ui){
		test = this
	}
});

$("#grocery_list").droppable({
	drop: function(){
		$(test).clone().appendTo("#grocery_list tbody");
		total();
	}
});

var total = function() {
	var listItems = $("#grocery_list tbody").children().length;
	for(item = 0; item < listItems; item ++){
		var test = $("#grocery_list tbody").children()[item];
		console.log($(test))
		// price = $(test.children()[1]).html();
		// console.log(price);
		// total += price
	}
}
