module.exports = flip;
function flip(element) {
	if (!(this instanceof flip)) return new flip(element);
	this.element = element;
	if (this.element !== undefined) {
		this.element.className = this.element.className + ' flip';
		if (this.element.children[0] !== undefined && this.element.children[0].tagName.toLowerCase() === 'div') {
			this.element.children[0].className = this.element.children[0].className + ' flip-front flip-panel';
		} else {
			throw Error('flip: ERROR, no front panel!');
		}
		if (this.element.children[1] !== undefined && this.element.children[1].tagName.toLowerCase() === 'div') {
			this.element.children[1].className = this.element.children[1].className + ' flip-back flip-panel';
		} else {
			throw Error('flip: ERROR, no back panel!');
		}
	} else {
		throw Error('flip: ERROR no parent element defined.')
	}
}
flip.prototype.flip = function () {
	[].forEach.call(this.element.querySelectorAll('.flip-panel'), function (panel) {
		if (panel.className.indexOf('flip-front') !== -1) {panel.className = panel.className.replace('flip-front', 'flip-back');}
		else if (panel.className.indexOf('flip-back') !== -1) {panel.className = panel.className.replace('flip-back', 'flip-front');}
	})
}
