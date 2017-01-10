function Name(props){
	return(
		<div>
			<p>
				{props.textToDisplay}
			</p>
		</div>
	)
}

// class MyForm extends ReactComponent {
// 	constructor(props){
// 		super(props);
// 		this.state = {value: "Test"}
// 		this.handleChange = this.handleChange.bind(this)
// 	}
// 	handleChange(event){
// 		this.setState({value: event.target.value})
// 	}
// }

var MyForm = React.createClass({

	getInitialState: function(){
		return{
			value: "Test",
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},

	render: function(){
		return(
			<form>
				<label>Name:</label>
				<input type="text" placeholder="Enter Your Name" onChange={this.handleChange} />
				<Name textToDisplay={this.state.value} />
			</form>
		)
	}
})

ReactDOM.render(
	<MyForm />,
	document.getElementById("form-container")
)