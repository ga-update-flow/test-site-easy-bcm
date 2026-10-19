document.addEventListener( 'DOMContentLoaded', function() {
	// Image carousel
	var splide = new Splide( '.splide-images', {
	  	type: 'loop',
		perPage: 4,
		perMove: 1,
		gap: '2em',
		padding: '0',
		focus: 0,
		drag: true,
		pagination: false,
		arrows: true,
		autoplay: true,
		interval: 8000,
		speed: 2000,
		pauseOnHover: true,
		pauseOnFocus: true,
		breakpoints: {
		  1300: {
			perPage: 3,
		  },
		  960: {
			perPage: 2,
		  },
		  580: {
			perPage: 1,
		  },
		},
	} );
    splide.mount();
	
	
	// video carousel
	var videos = new Splide( '.splide-videos', {
	  	type: 'loop',
		perPage: 3,
		perMove: 1,
		gap: '2em',
		padding: '0',
		drag: true,
		pagination: false,
		arrows: true,
		autoplay: false,
		pauseOnHover: true,
		pauseOnFocus: true,
		breakpoints: {
		  1300: {
			perPage: 2,
		  },
		  960: {
			perPage: 1,
		  },
		},
	} );
    videos.mount();
});

Fancybox.bind("[data-fancybox]");