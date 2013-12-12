var Template = require('../../index.js').Template;
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
