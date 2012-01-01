describe("On what events are triggered on", function(){
	
	it("should trigger events on itself when an event aggregator is not supplied", function(){
		
		var keypadEvents = new Backbone.OnTheCouch.KeyEvents();
		var eventFired = null;
		
		keypadEvents.bind("all", function(eventName){
			eventFired = eventName
		});
		
		keypadEvents.keyPressed({which: 13});
		
		expect(eventFired).toBeTruthy();
	});
	
	it("should trigger events on a supplied event aggregator", function(){
		
		var eventAggregator = _.extend({}, Backbone.Events);
		var keypadEvents = new Backbone.OnTheCouch.KeyEvents({triggerOn: eventAggregator});
		var eventFired = null;
		
		eventAggregator.bind("all", function(eventName){
			eventFired = eventName
		});
		
		keypadEvents.keyPressed({which: 13});
		
		expect(eventFired).toBeTruthy();
	});
	
});