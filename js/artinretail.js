var $ = jQuery;

var main =
{
    about : function(op) {
        var inp, outp, w;
        
        w    = window.innerWidth;
        inp  = (w > 1000) ? "17.5%" : ((w > 700) ? "7.5%" : "5%");
        outp = (w > 1000) ? "15%"   : ((w > 700) ? "5%"   : "2%");
        
        if (op == "enter") {
            $(".hello-1").css({"margin-left": inp, opacity: 1});
            $(".hello-2").css({"margin-right": inp, opacity: 1});
            $(".hello-3").css({"margin-left": inp, opacity: 1});
        } else if (op == "leave") {
            $(".hello-1").css({"margin-left": outp, opacity: 0});
            $(".hello-2").css({"margin-right": outp, opacity: 0});
            $(".hello-3").css({"margin-left": outp, opacity: 0});
        }
    },
    
    clients : function(op) {
        if (op == "leave") {
            $(".panel-quarter img").each(function(i, e){
                setTimeout(
                    function(){
                        $(e).css({"transform" : "translateY(-40px)", opacity: 0});
                    }, i * 60);
            });  
        } else {
            $(".panel-quarter img").each(function(i, e){
                setTimeout(
                    function(){
                        $(e).css({"transform" : "translateY(0)", opacity: 1});
                    }, i * 60);
            });
        }
    },
    
    services : function(op) {
        if (op == "leave") {
            $(".services-topic").each(function(i, e){
                setTimeout(
                    function(){
                        $(e).css({"transform" : "translateX(-50px)", opacity: 0});
                    }, i * 200);
            });  
        } else {
            $(".services-topic").each(function(i, e){
                setTimeout(
                    function(){
                        $(e).css({"transform" : "translateX(0)", opacity: 1});
                    }, i * 200);
            });
        }   
    },
    
    elementsHint : function() {
        if (!$(".section-elements").height())
            $(".page").css({"transform": "rotate(-0.5deg)"});
    },
    
    elementsHide : function() {
        if (!$(".section-elements").height())
            $(".page").css({"transform": "rotate(0)"});    
    },
    
    toggleElements : function() {
        if ($(".section-elements").height()) {
            $(".section-elements").css({height:0});
            $(".page").css({"transform": "rotate(0)"});
        } else {
            $(".section-elements").css({
                height: $(".section-elements .inner").height()                       
            });
            $(".page").css({"transform": "rotate(-2deg)"});
			$("html, body").animate({scrollTop: $("#anchor-phygital").offset().top}, 800);
			window.location.hash = "phygital_workshops";
        }
    },
    
    elements : function(op) {
        if (op == "leave") {
            $(".elements").css({"opacity": "0", "transform": "translateY(40px)"});
        } else {
            $(".elements").css({"opacity": "1", "transform": "translateY(0)"});
        } 
    },
    
    contact : function(op) {
        if (op == "leave") {
            $(".inner-contact").css({"opacity": "0", "transform": "translateY(40px)"});
        } else {
            $(".inner-contact").css({"opacity": "1", "transform": "translateY(0)"});
        } 
    },
    
    revealJess : function() {
        $(".jess-text").css("opacity", "1");   
        $(".jose-text").css("opacity", "0");
    },
    
    revealJose : function() {
        $(".jess-text").css("opacity", "0");   
        $(".jose-text").css("opacity", "1");   
    },
    
    toggleMenu : function() {
        if ($("#menu").height()) {
            $("#menu").css({"height" : 0});
            $("#menu-button").css({"transform" : "rotate(0deg)"});
            $("#menu .inner").css({"transform" : "translateY(-30px)", "opacity": "0"});
        } else {
            $("#menu").css({"height" : "100%"});
            $("#menu-button").css({"transform" : "rotate(45deg)"});
            $("#menu .inner").css({"transform" : "translateY(0)", "opacity": "1"});
        }
    },
    
    menuClick : function(elem) {
        var $target = $($(elem).data("target"));
        var top = $target.offset().top - window.innerHeight / 2 + $target.height() / 2;
        $(document).scrollTop(top);
        main.toggleMenu();
		window.location.hash = $(elem).html();
    },
    
    scroll : function() {
        var top = $(document).scrollTop();
        
        if ($("#menu").height())
            main.toggleMenu();
        if ($("#logo-corner").css("opacity") == "0" && top > window.innerHeight)
            $("#logo-corner").css("opacity","1");
        else if ($("#logo-corner").css("opacity") == "1" && top <= window.innerHeight)
            $("#logo-corner").css("opacity","0");
        
        // sections
        
        main.about((main.onscreen(top, ".section-about")) ? "enter" : "leave");
        main.clients((main.onscreen(top, ".section-clients")) ? "enter" : "leave");
        main.services((main.onscreen(top, ".section-services")) ? "enter" : "leave");
        main.elements((main.onscreen(top, ".section-elements")) ? "enter" : "leave");
        main.contact((main.onscreen(top, ".section-contact")) ? "enter" : "leave");
    },
    
    onscreen : function(y, id) {
        var elem, top, bottom, up, down;
        
        elem   = $(id);
        top    = elem.offset().top;
        bottom = top + elem.height();
        
        return (top < y + window.innerHeight * 0.5);
    },
    
    home : function() {
        $(document).scrollTop(0);
    },
    
    events: function() {
        // menu
        
        $("#menu-button").click(main.toggleMenu);
        $(".menu-item").click(function(){main.menuClick(this);});
        $("#logo-corner").click(main.home);
        //$(".over").click(function(){main.toggleDropdown(this);});
        
        // contact section
        
        $(".panel-jess").mouseover(main.revealJess);
        $(".panel-jose").mouseover(main.revealJose);
        
        // elements
        
		$("#trend-tours").click(function(){
			window.location.hash = "";
			window.open("http://trendtoursberlin.com/");
		});
        $("#phygital").mouseenter(main.elementsHint);
        $("#phygital").mouseleave(main.elementsHide);
        $("#phygital").click(main.toggleElements);
		
        // scroll
        
        $(document).scroll(main.scroll);
    },
    
    init : function() {
        console.log("Artinretail");
        
        // events
        
        main.events();
        
        // remove loading screen
        
        setTimeout(function(){
            $("#loading-screen").css({opacity:0});
            
			// check page hash and scroll to workshops section
			
			if (window.location.hash == "#phygital_workshops") {
				var top = $("#anchor-phygital").offset().top;
				$(document).scrollTop(top);
				main.toggleElements();
				main.scroll();
			}
			
			setTimeout(function(){
				$("#loading-screen").remove();
			}, 1200);
        }, 500);
    }
};

document.onload = main.init();