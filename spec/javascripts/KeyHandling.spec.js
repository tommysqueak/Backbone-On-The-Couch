
describe("D-Pad Key Handling", function(){
	
	var keypadEvents = new Backbone.OnTheCouch.KeyEvents();
	var eventFired = null;
	
	keypadEvents.bind("all", function(eventName){
		eventFired = eventName
	});
	
	beforeEach(function(){
		eventFired = null;
	});
	
	it("should raise a left event when the left arrow is pressed", function(){
		keypadEvents.keyPressed({which: 37});
		
		expect(eventFired).toEqual("key:left");
	});
	
	it("should raise a right event when the right arrow is pressed", function(){
		keypadEvents.keyPressed({which: 39});
		
		expect(eventFired).toEqual("key:right");
	});

	it("should raise an up event when the up arrow is pressed", function(){
		keypadEvents.keyPressed({which: 38});
		
		expect(eventFired).toEqual("key:up");
	});	
	
	it("should raise a down event when the down arrow is pressed", function(){
		keypadEvents.keyPressed({which: 40});
		
		expect(eventFired).toEqual("key:down");
	});
	
	it("should raise an enter event when enter pressed", function(){
		keypadEvents.keyPressed({which: 13});
		
		expect(eventFired).toEqual("key:enter");
	});
	
	it("should raise a space event when space pressed", function(){
		keypadEvents.keyPressed({which: 32});
		
		expect(eventFired).toEqual("key:space");
	});
	
	it("should raise a escape event when escape is pressed", function(){
		keypadEvents.keyPressed({which: 27});
		
		expect(eventFired).toEqual("key:escape");
	});
});