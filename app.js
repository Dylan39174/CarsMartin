const ratio = .2;
var position = $(window).scrollTop();

const options = {

	root: null,
	rootMargin: '0px',
	threshold: ratio
}

const handleIntersect = function(entries, observer){
	entries.forEach(function (entry){
		if (entry.intersectionRatio > ratio && direction == 1){
			entry.target.classList.add('app-prog-visible')
		}else if(entry.intersectionRatio < ratio && direction == -1){
			entry.target.classList.remove('app-prog-visible')
			observer.observe(entry.target)
		}
	})
}

const observer = new IntersectionObserver(handleIntersect,options);
document.querySelectorAll('.app-prog').forEach(function (r) {

	observer.observe(r)

})


var position = $(window).scrollTop(); 
var direction = 0;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
      
        direction = 1


    } else {
         console.log('scrollUp');

         direction = -1
     
    }
    position = scroll;
});


const fonctiontest = function(entries, test){
	entries.forEach(function (entry){
		if (entry.intersectionRatio > ratio && direction == 1){
			entry.target.classList.add('deplacement-visible')
			test.observe(entry.target)

			if($('body').width() > 575 && $('body').width() < 992){

				$('.N3').addClass('deplacement-1')
				$('.N3').removeClass('deplacement-3')
				$('.N5').addClass('deplacement-1')
				$('.N5').removeClass('deplacement-2')
				$('.N9').addClass('deplacement-1')
				$('.N9').removeClass('deplacement-3')

				$('.N4').addClass('deplacement-2')
				$('.N4').removeClass('deplacement-1')

				$('.N6').addClass('deplacement-2')
				$('.N6').removeClass('deplacement-3')

			}else{

				$('.N3').addClass('deplacement-3')
				$('.N3').removeClass('deplacement-1')
				$('.N5').addClass('deplacement-2')
				$('.N5').removeClass('deplacement-1')
				$('.N9').addClass('deplacement-3')
				$('.N9').removeClass('deplacement-1')

				$('.N4').addClass('deplacement-1')
				$('.N4').removeClass('deplacement-2')

				$('.N6').addClass('deplacement-3')
				$('.N6').removeClass('deplacement-2')

			};

		}else if(entry.intersectionRatio < ratio && direction == -1){
			entry.target.classList.remove('deplacement-visible')
			test.observe(entry.target)
		}
	})
}

const test = new IntersectionObserver(fonctiontest,options);
document.querySelectorAll('[class*="deplacement-"]').forEach(function (r) {

	test.observe(r)

})

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

	}

},function(){

	if($('.un').css('opacity')==='1'){

		$('.bouton-menu').css('background-color','white');
		$('.barre').css('background-color','#86bc24');
		$('.bouton-menu p').css('color','#86bc24');
		$('.bouton-menu').css('cursor','normal');
	}

});


