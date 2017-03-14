'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var React = require('react');

var Test = React.createClass({
	displayName: 'Test',
	render: function render() {
		return React.createElement(
			'div',
			null,
			this.props.children
		);
	}
});

exports['default'] = Test;
// module.exports = Test