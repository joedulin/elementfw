var clone = require('clone');

function Template () {
	this.body = {};
	this.vars = {};
	this.e = {};
	
	this.render = function () {
		var body = this.body.render();
		for (var key in this.vars) {
			var regex = new RegExp('%'+key+'%', 'g');
			body = body.replace(regex, this.vars[key]);
		}
		return body;
	};
	this.setVar = function (key, value) {
		this.vars[key] = value;
	};
}

templates = {};

function getTemplate (fullpath) {
	if (typeof templates[fullpath] === 'undefined') {
		templates[fullpath] = require(fullpath).Template;
	}
	return clone(templates[fullpath]);
}

exports.Template = Template;
exports.getTemplate = getTemplate;
