// simple tooltips, hit me up on twitter @jonasaberg91 if you have any questions :)
$(function() {

	var elDisabled = '<span class="tooltip">This is a tooltip.</span>';

	$('.disabled-element').click(function(e) {
		if ( $('.tooltip').length) {
			$('.tooltip').remove();
		}
		$(this).after(elDisabled);
		e.stopPropagation();
	});

	$('.disabled-element').click(function(e) {
		e.stopPropagation();
	});

	$(document).click(function() {
		$('.disabled-element').next('.tooltip').remove();
	});
});