$(document).ready(function () {

    $.getJSON("./other/count_v1.json", function(data){

        var new_count=data.count+1;
        $("#count").html(new_count);
        console.log(data.count); // Prints: Harry
    }).fail(function(){
        console.log("An error has occurred.");
    }); 
});