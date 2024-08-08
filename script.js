var add = false;

$(document).ready(function () { 
    

    $("#btn").click(add_the_items_please); 
});

$(document).on("keypress", function(e){
    if(e.key === "Enter"){
        add_the_items_please();
    }
});

function add_the_items_please () { 
    var currentIndex = 0;

    add = true;

    var txt = $("#txtArea").val().trim();
    var items = $("#groceryList ");
    var firstletter = txt.slice(0, 1)
    var secondHalf = txt.slice(1)

    firstletter = firstletter.toUpperCase();

    
    
    if (txt && add === true){
    
        items.append("<li> <input type='checkbox' id='isChecked'/>" + firstletter + secondHalf +"</li>");
        currentIndex = (currentIndex + 1) %items.length;
    
   
}}