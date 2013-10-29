# flip

  A flip component for displaying two sided content. Compatible with [component package manager](https://github.com/component/component).

## Demo
	
A demo of flip can be seen [here](http://jsfiddle.net/qCfVH/).

## Installation

  Install with [component(1)](http://component.io):

    $ component install jheytompkins/flip

##Usage
###element structure
Use with an element structure like the following:

	<div id="flip">
		<div>becomes the front panel</div>
		<div>becomes the back panel</div>
		<div></div>    //wouldn't be used
	</div>

### usage with [component package manager](https://github.com/component/component)
Simply pass in an element div that contains two or more divs. The first two divs will become the front and back panel respectively.

	var flip = require('flip') //ONLY REQUIRED IF USING COMPONENT PACKAGE MANAGER
	var myFlip = new flip(someElement); // create a flip where someElement is the parent container.
	myFlip.flip(); //flip it.

It's not hard to add extra flip behaviour. You could easily make your flip flip upon click by adding a click listener to `someElement` which simply invokes `flip`.

Refer to the [demo](http://jsfiddle.net/qCfVH/) or message me if you're stuck :)

###usage without component package manager

	var myFlip = new flip(someElement); // create a flip where someElement is the parent container.
	myFlip.flip(); //flip it.

It's not hard to add extra flip behaviour. You could easily make your flip flip upon click by adding a click listener to `someElement` which simply invokes `flip`.

Refer to the [demo](http://jsfiddle.net/qCfVH/) or message me if you're stuck :)

###vertical flipping

flip will flip horizontally by default but if you want vertical flipping, simply add the class `vertical` to your flip element.

## API

###flip()

Simply flip your flip.

## License

  MIT
