$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Change style of navbar on scroll
function isScrolledIntoView(ele) {
	var flap = document.getElementById(ele).offsetTop;
	var ff = flap + document.getElementById(ele).clientHeight;
	var aa = document.body.scrollTop;
	return (aa >= flap && aa <= ff);
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace("w3-card-2 w3-animate-top w3-white", " w3-text-white");
    }
	
	if(isScrolledIntoView('flappy'))
    {
        document.getElementById("aflappy").style.backgroundColor = "#009688";
		document.getElementById("acontact").style.backgroundColor = "";
		document.getElementById("ahome").style.backgroundColor = "";
    }
	else    
    if(isScrolledIntoView('home'))
    {
        document.getElementById("ahome").style.backgroundColor = "#009688";
		document.getElementById("acontact").style.backgroundColor = "";
		document.getElementById("aflappy").style.backgroundColor = "";
    }
	else	
    if(isScrolledIntoView('contact'))
    {
        document.getElementById("acontact").style.backgroundColor = "#009688";
		document.getElementById("aflappy").style.backgroundColor = "";
		document.getElementById("ahome").style.backgroundColor = "";
    }
};