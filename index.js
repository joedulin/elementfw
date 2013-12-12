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
		templates[fullpath].body = (typeof templates[fullpath].body === 'undefined') ? 
			{} : templates[fullpath].body;
		templates[fullpath].vars = (typeof templates[fullpath].vars === 'undefined') ? 
			{} : templates[fullpath].vars;
		templates[fullpath].e = (typeof templates[fullpath].e === 'undefined') ? 
			{} : templates[fullpath].e;
	}
	var tData = clone(templates[fullpath]);
	var template = new Template();
	template.body = tData.body;
	template.vars = tData.vars;
	template.e = tData.e;
	return template;
	
}

exports.Template = Template;
exports.getTemplate = getTemplate;
