$(document).ready(function(){
    
    if(matchMedia('(prefers-color-scheme: dark)').matches) {
        $('body').addClass('night-mode');
    }

    if(matchMedia('(prefers-color-scheme: light)').matches) {
        $('body').addClass('light-mode');
    }
 
    $("#moon-toggle").click(function() {
        $('body').toggleClass('night-mode');
        $('body').toggleClass('light-mode');
    	return false;
    });

    
});