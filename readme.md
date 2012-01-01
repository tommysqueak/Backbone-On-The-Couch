# Backbone on the Couch

A simple [Backbone.js](http://documentcloud.github.com/backbone) plugin for use in leanback apps, where someone is sat on the couch using a remote control.

Gives you something even your mum can understand

``` javascript
keypad.bind("key:left", doSomethingOnKeyLeft);
```

### vs
What does the magic number 37 mean

``` javascript
switch(e.which)
{
	case: 37
		doSomethingOnLeft();
		break;
	etc:
	etc:
	andsoon:
}
```

## Running the Specs
I'm using Jasmine to run the specs http://pivotal.github.com/jasmine/ andf specifically the Jasmine Gem https://github.com/pivotal/jasmine/wiki/A-ruby-project to make it that little easier.

###Getting Setup
run bundle install

###Run the Specs

rake jasmine

and view the specs in your browser at http://localhost:8888

## License
TODO:
MIT license