/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */


   $(document).ready(function () {

    $("#store_list tr").draggable({ helper: "clone" });
    var total_price = 0;
    $("#grocery_list").droppable({

      drop: function (event, ui) {

        var itemName = ui.draggable.find("td:nth-child(1)").text();
        var price = ui.draggable.find("td:nth-child(2)").text();
        total_price = parseFloat(total_price)+parseFloat(price);

        $(this).append('<tr><td>'+ itemName +'</td><td>'+ price +'</td></tr>');
        $('#total_cost').text(total_price.toFixed(2));
      }
    })
  })
