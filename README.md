elementfw
=========

Templates based on element.js

Usage
=====

Template file:
``` javascript
var Template = require('elementfw').Template;
var Element = require('element.js').Element;

//Create the template object
var myDiv = new Template();

//Add the body
myDiv.body = new Element('div');

//Initialize the vars, not necessarily needed but good practice I'd say
myDiv.vars.name = '';

//Add elements. Could be added directly to myDiv.body.
//Add to e if you want to reference the individual elements from another script
myDiv.e.heading = new Element('h5');
myDiv.e.heading.append('Hello, %name%!!!');

//Showing how you can extend elements
myDiv.e.p = new Element('p');
myDiv.e.p.addContent = function (content) {
	var s = content.split(' ');
	for (var i=0; i<s.length; i++) {
		myDiv.e.p.append(s[i] + '<br />');
	}
};

//Add it all to body
myDiv.body.append(myDiv.e.heading);
myDiv.body.append(myDiv.e.p);

//export Template
exports.Template = myDiv;
```

File using template:
``` javascript
var getTemplate = require('elementfw').getTemplate;

var myDiv = getTemplate(__dirname + '/templates/mydiv.js');
myDiv.setVar('name','Bob McFrob');
myDiv.e.heading.tag = 'h1';
myDiv.e.p.addContent('1 2 3 4 5');

console.log(myDiv.render());
```

Output (formatted for readability):
``` html
<div>
  <h1>Hello, Bob McFrob!!!</h1>
  <p>
    1<br />
    2<br />
    3<br />
    4<br />
    5<br />
  </p>
</div>
```
