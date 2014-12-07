$.fn.blink = function(fun) {
	var i = 0;
	function dong(){
		fun.find('.big').hide();
		fun.eq(i++).find('.big').css({
			'display':'block'
		});
		if(i==13)
		{
			i=0;
		}
	}
	setInterval(dong,500);
}