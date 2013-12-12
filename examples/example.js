var getTemplate = require('../index.js').getTemplate;
var e = require('element.js').e;

var myDiv = getTemplate(__dirname + '/templates/mydiv.js');
myDiv.setVar('name','Bob McFrob');
myDiv.e.heading.tag = 'h1';
myDiv.e.p.addContent('1 2 3 4 5');

console.log(myDiv.render());
