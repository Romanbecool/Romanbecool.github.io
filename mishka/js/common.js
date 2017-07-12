$(function() {

	

	$(".animate-top").animated("fadeInUp");

	$("body").append('<div class="top" title="Наверх"><i class="fa fa-angle-double-up" aria-hidden="true"></i>');

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	$(document).ready(function() {
		$('.carousel-imgs-item').magnificPopup({
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled:true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});
		



	$('.carousel-event .event-tizer-wrap').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.carousel-author .author-tizer-wrap').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});



	$('.carousel-imgs').owlCarousel({
		loop:true,
		margin:1,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
				0:{
						items:1
				},
				545:{
						items:2
				},
				660:{
						items:3
				},
				1000:{
						items:4
				},
				1200:{
						items:5
				}
		}
	})

	$('.carousel-event, .carousel-author').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText: ["<i class='fa fa-circle'></i>","<i class='fa fa-circle'></i>"]
	})


	function heightDetect() {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect()
	function heightDetect2() {
		$(".wrapper, .wrapper .table").css("height", $(".main-head").height() - $(".mnu-line").height());
	};
	heightDetect2()
	
	$(window).resize(function() {
		heightDetect();
		heightDetect2();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}

	});


	// to top right away
	if ( window.location.hash ) scroll(0,0);
	// void some browsers issue
	setTimeout( function() { scroll(0,0); }, 1);

	$(function() {

	    // your current click function
	    $('.main-head nav li a').on('click', function(e) {
	        e.preventDefault();
	        $('html, body').animate({
	            scrollTop: $($(this).attr('href')).offset().top + 'px'
	        }, 1000, 'swing');
	    });

	    // *only* if we have anchor on the url
	    if(window.location.hash) {

	        // smooth scroll to the anchor id
	        $('html, body').animate({
	            scrollTop: $(window.location.hash).offset().top + 'px'
	        }, 1000, 'swing');
	    }

	});

});

$(document).ready(function() {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
})

