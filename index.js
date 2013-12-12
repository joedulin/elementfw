function Template () {
	this.body = {};
	this.vars = {};
	this.e = {};
	
	this.render = function () {
		var body = this.body.render();
		for (var key in this.vars) {
			var regex = new RegExp('%'+key+'%', 'g');
			body.replace(regex, value);
		}
		return body;
	};
	this.setVar = function (key, value) {
		this.vars[key] = value;
	};
}

function getTemplate (filepath) {
	return require(filepath);
}

exports.Template = Template;
exports.getTemplate = getTemplate;
