var React = require('react')

const Test = React.createClass({
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
});

export default Test
// module.exports = Test