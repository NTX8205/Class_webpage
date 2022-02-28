var input, title, yourname;
var id = 0;
$(document).ready(function () {
    $("#tap").click(function () {
        input = $("#borad").val();
        title = $("#main").val();
        yourname = $("#myname").val();
        tap();
        $("input").val("");
        $("textarea").val("");
    });
});

function tap() {
    var floor = $("<div class=m-5>");
    id++;
    floor.attr("id", "message");
    floor.append(
        $("<h2>").html(id + "樓"),
        $("<h3>").html("標題: "+title),
        $("<h4>").html("姓名: "+yourname),
        $("<h4>").html("內容: " + input),
        $("<button type=button class='btn btn-danger' >").html("刪除").attr("id", "del")
    );
    $("#messages").append(floor);
    $("#messages").on("click", "#del", function () {
        $(this).parents("#message").remove();
    });
}    


