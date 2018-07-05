# Backbone on the Couch

A simple [Backbone.js](http://documentcloud.github.com/backbone) plugin for use in leanback apps, where someone is sat on the couch using a remote control to use your app.

Gives you something even your mum can understand

``` javascript
keypad.bind("key:left", doSomething);
```

### vs
What does the magic number 37 mean?

``` javascript
switch(e.which)
{
	case: 37
		doSomething();
		break;
	etc:
	etc:
	andsoon:
}
```

## Usages

In its simplest form you can do the following:

``` javascript
var keypad = new Backbone.OnTheCouch.KeyEvents();

//	listen for any of the commonly used d-pad keys (left, right, up, down, enter, space and escape)
keypad.bind("key:up", function(){//do something on up});
```

If you're using an event aggregator or something else. You can have the events trigger on that instead:

``` javascript
var eventAggregator = _.extend({}, Backbone.Events);
var keypad = new Backbone.OnTheCouch.KeyEvents({triggerOn: eventAggregator});

eventAggregator.bind("key:up", function(){//do something on up});
```

You can also replace the d-pad key defaults and provide your own keys that you want to listen for:

``` javascript
var keypad = new Backbone.OnTheCouch.KeyEvents({keyMaps: [
															new Backbone.OnTheCouch.KeyEvent(188, "key:comma"),
															new Backbone.OnTheCouch.KeyEvent(190, "key:fullstop")
														]});

keypad.bind("key:comma", function(){//do something odd});
```

## Example
There's a live running example of this plugin at http://xkcd.greatboxee.com . The great [XKCD](http://xkcd.com/) comics viewed from your couch with a remote. Which was also turned into Boxee app.

## Running the Specs
I'm using [Jasmine](https://jasmine.github.io/) to run the specs and specifically the [Jasmine Gem](https://github.com/jasmine/jasmine/wiki/A-Ruby-project-(with-or-without-Rails)) to make it that little easier.

###Getting Setup
	bundle install

###Run the Specs

	rake jasmine

and view the specs in your browser at http://localhost:8888

## License

Copyright (c) 2012 Tom Philip, Conker Software ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
