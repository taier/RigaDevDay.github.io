$(document).ready(function() {
	$('#countdown').flipcountdown({
			size:'lg',
			beforeDateTime:'09/15/2014 00:00:00',
			speedFlip:60
			/*tick:function(){
				var nol = function(h){
					return h>9?h:'0'+h;
				}
				var	range  	= NY-Math.round((new Date()).getTime()/1000),
					secday = 86400, sechour = 3600,
					days 	= parseInt(range/secday),
					hours	= parseInt((range%secday)/sechour),
					min		= parseInt(((range%secday)%sechour)/60),
					sec		= ((range%secday)%sechour)%60;
				return nol(days)+' '+nol(hours)+' '+nol(min)+' '+nol(sec);
			}*/
		});
	$(".header").positionSticky();
	$(".header").css("width", "100%");
	
	$("#gdg-riga").click(function() {
		window.location.href = "http://gdgriga.lv";
	});
	
	$("#jug").click(function() {
		window.location.href = "http://jug.lv";
	});
	
	$("#lvoug").click(function() {
		window.location.href = "http://lvoug.lv";
	});
});