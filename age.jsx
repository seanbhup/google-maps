function calculate(){

}

function Year(props){
	return(
		<p>{props.age}</p>
	)
}

class Calculator extends React.Component{
	constructor(props) {
       super(props);
       this.state = {
           value: (2016 - event.target.value)
       };

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	render(){
		var age = calculate();
		return(
			<div>
				<form>
					<input type="text" placeholder="birth year" onChange={this.handleChange} />
					<input type="submit" value="Click" onChange={this.handleChange} />
					<Year age={this.state.value} />
				</form>
			</div>
		)
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById("age")
)