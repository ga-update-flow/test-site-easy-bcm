(function($) {
    var emergency = localStorage.getItem('snackbar-closed') || '';
    var year = new Date().setFullYear(new Date().getFullYear() + 1);
 
    if (emergency < new Date()) {
		$('.snackbar').addClass('show-snackbar');
		localStorage.removeItem('snackbar-closed');
    }
 
	$('#close-snackbar').click(function() {
        localStorage.setItem('snackbar-closed', year);
    });
})(jQuery);