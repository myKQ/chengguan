$(function() {
	"use strict";
	$('.wenzhang-left').on('mouseover','li',function(){
	  	$(this).css('backgroundColor','#fff').siblings('li').css('backgroundColor','#f8f8f8');
	});
})