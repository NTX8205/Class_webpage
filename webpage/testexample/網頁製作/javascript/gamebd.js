$(document).ready(function () {
    var img = ["../picture/剪刀.jpg", "../picture/石頭.jpg", "../picture/布.jpg"];
function random_determine() {
    computer = (parseInt(Math.random() * 3));
    $("#computer").attr("src", img[computer]);
    return computer;
    }
  function result(user,computer) {
        var result = user - computer;
        if (result === -1 || result === 2) {
            $("#result").html("輸!");
        }
        else if (result === 1 || result === -2) {
            $("#result").html ("贏!");
        }
        else  {
            $("#result").html("平手!");
        }
}    

$("#scissors").on('click', function () {
    $("#user").attr("src", img[0]);
    result(0, random_determine());
    });
    $("#stone").on('click', function () {
        $("#user").attr("src", img[1]);
        result(1, random_determine());
    });
    $("#paper").on('click', function () {
        $("#user").attr("src", img[2]);
        result(2, random_determine());
    });

  
})