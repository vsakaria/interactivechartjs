$(function() {
	$('#key_1').click(function(){
		displayChart( hideData( $(this).html(), $(this) ) );
	});

	$('#key_2').click(function(){
		displayChart( hideData( $(this).html(), $(this) ) );
	});

	$('#key_3').click(function(){
		displayChart( hideData( $(this).html(), $(this) ) );
	});
});