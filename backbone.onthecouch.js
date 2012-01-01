/* 
	Copyright (c) 2012 Tom Philip, http://tomphilip.me
	Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
*/

Backbone.OnTheCouch = (function(Backbone){
	
	var KeyEvent = function(key, ev)
	{
		var eventName = ev;
		var keyCode = key;
		
		var triggerEvent = function(on){
			on.trigger(eventName);
		};
		
		return {
			trigger: triggerEvent,
			key: keyCode
		};
	};
	
	var KeyMapper = function(keyMaps){
		
		var getKeyToEventMap = function(keyCode)
		{
			var map = _(keyMaps).detect(function(keyMap){ return keyMap.key == keyCode; });

			if(map)
				return map
			else
				return { trigger: function(on){}};	
		};
							
		return { getMap: getKeyToEventMap }
	};
	
	var KeyboardEventsView = Backbone.View.extend({
		
		initialize: function(options)
		{
			var keyMaps = (options && options.keyMaps) || [
							new KeyEvent(13, "key:enter"),
							new KeyEvent(32, "key:space"),
							new KeyEvent(37, "key:left"),
							new KeyEvent(39, "key:right"),
							new KeyEvent(38, "key:up"),
							new KeyEvent(40, "key:down"),
							new KeyEvent(27, "key:escape")
						];
			
			this.mapper = new KeyMapper(keyMaps);
			this.triggerOn = (options && options.triggerOn) || this						
		},
		
		el: document,
		
		events:
		{
			"keydown" : "keyPressed"
		},

		keyPressed: function(e)
		{
			this.mapper.getMap(e.which).trigger(this.triggerOn);
		}
	});
	
	return{
		KeyEvents: KeyboardEventsView,
		KeyEvent: KeyEvent
	};
	
})(Backbone);
