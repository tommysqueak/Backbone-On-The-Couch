describe("triggering custom key events instead of D-pad defaults", function(){

	var keyMaps = [
					new Backbone.OnTheCouch.KeyEvent(8, "key:numero:8")
				];

	var keypadEvents = new Backbone.OnTheCouch.KeyEvents({keyMaps: keyMaps});
	var eventFired = null;
	
	keypadEvents.bind("all", function(eventName){
		eventFired = eventName
	});
	
	beforeEach(function(){
		eventFired = null;
	});	
	
	it("should trigger the custom event", function(){
		keypadEvents.keyPressed({which: 8});
		
		expect(eventFired).toEqual("key:numero:8");
	});
	
	it("should not trigger one of the default d-pad events", function(){
		keypadEvents.keyPressed({which: 37});
		
		expect(eventFired).toBeFalsy();
	});
});
