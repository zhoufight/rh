$(document).ready(function () { 
  var contentSections = $('.section'),
		navigationItems = $('.cd-vertical-nav a');
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	navigationItems.on('click', function(event){
			event.preventDefault();
			smoothScroll($(this.hash));
	});

	$(".brands p").hover(function(){
		$(this).addClass("fontStyle");
	},function(){
		$(this).removeClass("fontStyle");
	})
	
	function updateNavigation() {
    
		contentSections.each(function(){
			$this = $(this);
      var activeSection = $('.cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('active');
			}else {
				navigationItems.eq(activeSection).removeClass('active');
			}
		});
	}
	function smoothScroll(target) {
			$('body,html').animate(
				{'scrollTop':target.offset().top-125},
				600
			);
	}
 })