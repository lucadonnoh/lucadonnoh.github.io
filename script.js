$(document).ready(function(){
	
    $("#moon-toggle").click(function() {
    	$('body').toggleClass('night-mode');
    	return false;
    });
});