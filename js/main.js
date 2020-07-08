$(function(){
	$('.slider').slick({
		nextArrow: '<botton class="slick-arrow slick-next"><img src="..//start/images/slider/next.svg" alt="slick-next"></botton>',
		prevArrow: '<botton class="slick-arrow slick-prev"><img src="..//start/images/slider/prev.svg" alt="slick-prev"></botton>',
		fade:true,
		responsive: [
		{
			breakpoint:768,
			settings:{
				arrows:false
			}
		}]
	});
});

