

$(document).ready(function () { 
    var currentIndex = 0;

    //This function called when the button is clicked 
    $("#btn").click(function () { 
        
        // val() method is used to get the values from  
       // textarea and stored in txt variable 
       
       var txt = $("#txtArea").val().trim();
        var items = $("#groceryList .item");
        console.log(txt);
        if (txt){
        if(items.length > 0){
            $(items[currentIndex]).text(txt);
            currentIndex = (currentIndex + 1) %items.length;
        }
       
    }}); 
})