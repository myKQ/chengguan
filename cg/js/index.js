$(function() {
	"use strict";
	var cg = {
		$input: $('input'),
		$parent: $('.one-txt-cut'),
		$prev: $('#prev'),
		$next: $('#next'),
		$cgNav: $(".cg-nav"),
		$cgMain: $('.cg-main'),
		$bannerNav: $(".banner-nav"),
		$cgLeft: $(".cg-left"),
		$cgRight: $(".cg-right"),
		$cgBc: $(".cg-bc"),
		$cgJiemu: $(".jiemu"),
		$zaixianNav: $(".zaixian-nav"),
		$xw: $('.xw'),
		$searchBtn: $('.searchBtn')
	};
	var action = {
		// 鼠标移入事件
		mouseOver: function() {
			cg.$cgNav.on('mouseover','.fl',function(){
			  	$(this).addClass("cg-nav-bgc").siblings().removeClass('cg-nav-bgc');
			});
			cg.$bannerNav.on('mouseover','li',function(){
			  	$(this).addClass("cg-banner-bgc").siblings().removeClass('cg-banner-bgc');
			  	$(this).children().css('color','#fff').parent().siblings().children().css('color','#333')
			});
			cg.$cgLeft.on('mouseover','li',function(){
			  	$(this).addClass("help-bd").parent().siblings().children().removeClass('help-bd');
			});
			cg.$cgRight.on('mouseover','.nav li',function(){
			  	$(this).addClass("help-right").siblings().removeClass('help-right');
			});
			cg.$cgBc.on('mouseover','.nav a',function(){
			  	$(this).addClass('banshi-a').parent().siblings().children().removeClass('banshi-a');
			  	$(this).css('backgroundColor','#2aa8d3').parent().siblings().children().css('backgroundColor','#91be54')
			});
			cg.$cgJiemu.on('mouseover','li',function(){
			  	$(this).addClass('b-color').siblings().removeClass('b-color');
			});
			cg.$zaixianNav.on('mouseover','li',function(){
			  	$(this).addClass('fantan-a bgc').siblings().removeClass('fantan-a bgc');
			  	$(this).children().css('color','#fff').parents().siblings().children().css('color','#333');
			});
		},
		// 热点滚动
		hotScroll: function() {
			setInterval(function(){
				var $first = cg.$parent.find('a:first');
			    var height = $first.height();
			    $first.animate({height:0}, 600, function() {
			        $first.css('height', height).appendTo(cg.$parent);
			    });
			}, 2000);
		},
		// 按回车触发点击事件
		focus: function() {
			cg.$input.focus();
			$(document).on("keydown", function (e) {
			    if (event.keyCode==13) {
					cg.$searchBtn.trigger("click");
				}
			})
		    cg.$searchBtn.on('click',function(event) {
		    	
		    })
		},
		// 切换效果
		tabShow: function() {
			$('.qh a:first').tab('show'); 
		    $('.qh a').mouseover(function (e) { 
		        e.preventDefault(); 
		        $(this).tab('show');
		    }) 
		},
		// 监听滚动
		scroll: function() {
			$(window).scroll(function(){
			　　var scrollTop = $(this).scrollTop();
			　　var scrollHeight = $(document).height();
			　　var windowHeight = $(this).height();
			　　if(scrollHeight - scrollTop - windowHeight <= 170){
			    　　cg.$cgMain.css('backgroundAttachment','scroll')
			　　}else{
					cg.$cgMain.css('backgroundAttachment','fixed')
				}
			});
		},
		// 轮播图
		Swiper: function() {
			var mySwiper = new Swiper ('.swiper-container', {
		  		autoplay: {
		  			stopOnLastSlide: true
		  		},
			    direction: 'horizontal',
			    autoplayDisableOnInteraction: false,
			    slideToClickedSlide:true,
			   	centeredSlides : true,
			    loop: true,
			    slidesPerView : 'auto',
				loopedSlides :5,
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
		  	})   
		  	cg.$prev.click(function(){
				mySwiper.slidePrev();
			})
			cg.$next.click(function(){
				mySwiper.slideNext();
			}) 
		},
		// 溢出省略
		textOver: function(e,num) {
	        $(e).each(function(i){
	            $(this).text($(this).text().substring(0,10+num)+'...');
	        });
		},
		init : function() {
			var _this = this;
			_this.mouseOver();
			_this.hotScroll();
			_this.tabShow();
			_this.focus();
			_this.scroll();
			_this.Swiper();
			_this.textOver(cg.$xw,6);
		}
	};
	action.init();
})