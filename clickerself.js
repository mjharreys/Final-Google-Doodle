$("document").ready(function() {			
		$( window ).load(function() {
			$("#chg").show();
			$("#chg2").show();
			$("#chg3").show();
		});
		

		$('#zPos').click(function(){
    		$("#chg").css("zIndex", "4");
		});

		$('#chg').click(function(){
    		$("#chg2").show();
    		$("#chg3").hide();
    		$("#chg").hide();
		});

		$('#chg2').click(function(){
    		$("#chg3").show();
       		$("#chg2").hide();
    		$("#chg").hide();
		});
		$('#chg3').click(function(){
    		$("#chg3").hide();
    		$("#chg").show();
       		$("#chg2").hide();
		});

});
