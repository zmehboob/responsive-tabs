define([
//"jquery"
],
function()
{

	var AccordianTabModule = function(){






	};

	AccordianTabModule.prototype = {

		init: function(){
			var self = this;
			self.initEvents();

			//make first tab active;
			$('#tab_nav li').eq(0).trigger('click');
			$('#tabs li').eq(0).addClass('sub_active');
		},

		initEvents: function(){
			var self = this;

			$('#accordianTabModule').on('click', '#tab_nav li', function(evt){
				var index = $(evt.target).index();			
				self.tabSwitch(index);

			});

			$('#accordianTabModule').on('click', '#tabs li>h2', function(evt){
				var index = $(evt.target).parents('li').index();
				self.accordianSwtich(index);

			});

		},

		tabSwitch: function(index){
			var self = this;
			index = Number(index) + 1;
			
			$('#tabs li').removeClass('active').removeClass('sub_active');
			$('#tabs li:nth-child(' + index +')').addClass('active').addClass('sub_active');
			
			$('#tab_nav li').removeClass('active');
			$('#tab_nav li:nth-child(' + index +')').addClass('active');

			$('#tabs li .tab-content').fadeOut();
			$('#tabs li .tab-content').eq(index-1).stop().fadeIn().css('overflow', 'visible');

		},
		accordianSwtich: function(index){
			var self = this;
			index = Number(index) + 1;

			$('#tabs li').removeClass('active');
			$('#tabs li:nth-child(' + index +')').addClass('active');
			
			if($('#tabs li:nth-child(' + index +')').hasClass('sub_active'))
			{
				$('#tabs li:nth-child(' + index +')').removeClass('sub_active').removeClass('active');
			}
			else{
				$('#tabs li:nth-child(' + index +')').addClass('sub_active');
			}

			$('#tab_nav li').removeClass('active');
			$('#tab_nav li:nth-child(' + index +')').addClass('active');

			$('#tabs li:nth-child(' + index +') .tab-content').stop().slideToggle();
			
		}




	};

	var nAccordianTabModule = new AccordianTabModule();

	nAccordianTabModule.init();

	return nAccordianTabModule;

});