$(document).ready(function(){
	$("#btn_print").click(function(){
		alert('建議用橫式列印');
		if($.browser.msie){
			DoPrint();
		}else{
			window.print();
		}		
	});	
		
 	$(".note_sp").tooltip({
			track: true,
			show: {
			effect: "slideDown",
			delay: 100
		  },
		  hide: {
			delay: 0
		  }	,
		   content: function() {
               return $(this).attr('title');
          }	 
	});
});