$(document).ready(function(){

   $(function(){
        var _h = $(document).height();//取得網頁高度
        var _w = $(document).width();
        parent.postMessage({ h: _h}, '*');//將高度值，傳到父層
        parent.postMessage({ w: _w}, '*');
    });
    $(function(){
    function receiveMessageFromIframePage (event) {
        var height = ('receiveMessageFromIframePage',event.data.h);
        var width = ('receiveMessageFromIframePage',event.data.w);
        console.log(height);//接收source.html頁面所回傳的高度值
        console.log(width);
        $('#myIframe').height(height);//將取得的高度，變更myIframe高度
        $('#myIframe').width(width);

    }
    window.addEventListener("message", receiveMessageFromIframePage, false);//監聽receiveMessageFromIframePage
    });

    $("#classpage").click(function(){
        var page =document.getElementById("classpage").value;
        if(page=="110-1"){
            document.getElementById("myIframe").src="../classpage/years/110-1.html"
        }
        else if(page=="110-2"){
             document.getElementById("myIframe").src="../classpage/years/110-2.html"
        }
        else{
            document.getElementById("myIframe").src=" "
        }
    });
});