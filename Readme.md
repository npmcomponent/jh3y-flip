*This repository is a mirror of the [component](http://component.io) module [jh3y/flip](http://github.com/jh3y/flip). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jh3y-flip`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# flip

  A flip component for displaying two sided content. Compatible with [component package manager](https://github.com/component/component).

## demo
	
A demo of flip can be seen [here](http://jsfiddle.net/qCfVH/).

## installation

  Install with [component(1)](http://component.io):

    $ component install jh3y/flip

##usage
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

## api

###flip()

Simply flip your flip.

##contributions
and suggestions are of course welcome :)

## license

  MIT
