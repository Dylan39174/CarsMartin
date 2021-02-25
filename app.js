$('.bouton-menu').click(function(){

	if($('.un').css('opacity')==='1'){

		$('.menu').css('top', '0');
		$('.un').css('transform','translateY(-10px)');
		$('.deux').css('transform', 'rotate(45deg)');
		$('.trois').css('transform', 'rotate(-45deg) translate(6px,-6px)');
		$('.un').css('opacity', '0');
		$('.bouton-menu').css('background-color', '#86bc24');
		$('.barre').css('background-color', "white");
		$('.bouton-menu p').css('color', 'white');

	}else if($('.un').css('opacity')==='0'){

		$('.menu').css('top', '-100%');
		$('.un').css('transform','translateY(0)');
		$('.un').css('opacity', '1');
		$('.bouton-menu').css('background-color', 'white');
		$('.barre').css('background-color', "#86bc24");
		$('.bouton-menu p').css('color', '#86bc24');
		$('.deux').css('transform', 'rotate(0)');
		$('.trois').css('transform', 'rotate(0deg) translate(0,0)');

	}

});


$('.bouton-menu').hover(function(){

	if($('.un').css('opacity')==='1'){

		$('.bouton-menu').css('background-color','#86bc24');
		$('.barre').css('background-color','white');
		$('.bouton-menu p').css('color','white');
		$('.bouton-menu').css('cursor','pointer');

		alert($('.rond').scrollbottom() + " px");

	}

},function(){

	if($('.un').css('opacity')==='1'){

		$('.bouton-menu').css('background-color','white');
		$('.barre').css('background-color','#86bc24');
		$('.bouton-menu p').css('color','#86bc24');
		$('.bouton-menu').css('cursor','normal');

	}


});