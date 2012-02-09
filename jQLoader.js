(function($) {
	$.jQLoader = function(options) {
		/*Default Settings*/
		var defaults = {
			functions: new Array(),
			scripts: new Array(),
			styles: new Array()
		};
		
		var plugin = this;
		plugin.settings = {};
		
		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			plugin.getScripts();
			plugin.getStyles();
			plugin.initScripts();
		}		
		plugin.getScripts = function() {
			if(typeof plugin.settings.scripts == 'object') {
				for(Index in plugin.settings.scripts) {
					$('head').append('<script type="text/javascript" src="'+js_url + plugin.settings.scripts[Index] +'"><\/script>');
				}
			}
		}
		plugin.getStyles = function() {
			if(typeof plugin.settings.styles == 'object') {
				for(Index in plugin.settings.styles) {
					$('head').append('<link rel="stylesheet" href="'+css_url+plugin.settings.styles[Index]+'" type="text/css" />');
				}
			}
		}
		plugin.initScripts = function() {
			if(typeof plugin.settings.functions == 'object') {
				for(Index in plugin.settings.functions) {
					plugin.settings.functions[Index]();
				}
			}
		}
		plugin.init();
	}
	
	$.fn.jQLoader = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('jQLoader')) {
				var plugin = new $.jQLoader(this, options);
				$(this).data('jQLoader', plugin);
			}
		});
	}
	$(function() {
		$.jQLoader({
			scripts:(typeof Scripts == 'object') ? Scripts : new Array(), 
			styles:(typeof Styles == 'object') ? Styles : new Array(), 
			functions: (typeof Functions == 'object') ? Functions : new Array()
		});
	});
})(jQuery);