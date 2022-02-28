var input = document.getElementById("this");
document.getElementById("tap").addEventListener("click", function () {

    var text = input.value;
    var ol = document.getElementById("setlist");
    var li = document.createElement("li");
    li.setAttribute("class","input-item")
    li.innerHTML = text;
    ol.appendChild(li);
})
