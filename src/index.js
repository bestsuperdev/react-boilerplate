import React from 'react';

const Test = React.createClass({
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
});

export default Test