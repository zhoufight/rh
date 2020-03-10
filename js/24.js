$(document).ready(function () { 
  var contentSections = $('.section'),
		navigationItems = $('.cd-vertical-nav a');
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	
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

 })