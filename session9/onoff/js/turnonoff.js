$('.change').click(function(){
	if ($('.change').text() == 'turn on') {
		$('img').attr('src', 'img/pic_bulbon.gif');
		$('.change').text('turn off');}
	else{
		$('img').attr('src', 'img/pic_bulboff.gif');
		$('.change').text('turn on');
	} 
});