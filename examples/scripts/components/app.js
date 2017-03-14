const React = require('react')

// const Test = require('src/index.js')
import Test from 'src/index.js'
export default class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<Test>hello</Test>
			</div>
		)
	}
}
