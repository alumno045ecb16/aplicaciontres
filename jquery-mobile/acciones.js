// JavaScript Document
$(document).redy(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tab beep
		
		$('#vibrar').tap(function(){
			navigator.nofication.vibrate(1000);
		});//tap vibrar
		
		
	},false);//deviceready
})//ready
		