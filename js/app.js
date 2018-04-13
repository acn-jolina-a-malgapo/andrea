$(document).ready(function() {
 
	 $('.owl-carousel').owlCarousel({
	    stagePadding: 50,
	    loop:true,
	    margin:20,
    	responsiveClass:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
 
});