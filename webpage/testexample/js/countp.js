$(document).ready(function () {
   $.getJSON("./other/count_v1.json", function(data){
            console.log(data.count); // Prints: Harry
        }).fail(function(){
            console.log("An error has occurred.");
        }); 
});