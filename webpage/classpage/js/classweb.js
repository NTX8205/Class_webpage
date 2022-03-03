$(document).ready(function(){

   $(function(){
       let w = window.innerWidth;
       let h = window.innerHeight;
       $('#myIframe').height(h);
        $('#myIframe').width(w);
    });

    $("#classpage").click(function(){
        var page = document.getElementById("classpage").value;

        if(page=="csim"){
            document.getElementById("myIframe").src="../classpage/class.html";
        }
        else if(page=="110-1"){
            document.getElementById("myIframe").src ="../classpage/years_pc/110-1.html";
        }
        else if(page=="110-2"){
            document.getElementById("myIframe").src="../classpage/years_pc/110-2.html";
        }
        else{
            document.getElementById("myIframe").src=" ";
        }
    });
});