
function BoilingVerdict(props){
	if(props.celsius >= 100){
		return(
			<p>The water would boil at {props.celsius}</p>
		)
	}else{
		return(
			<p>The water would not boil at {props.celsius} degree(s) celsius</p>
		)
	}
}

var TemperatureInput = React.createClass({
	getInitialState: function(){
		return{
			value: ""
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},

	render: function(){
		return(
			<div>
				<label>Enter temperature in question in {this.props.units}</label>
				<input placeholder="Temp" onChange={this.handleChange} />
			</div>
		)
	}

})

var Calculator = React.createClass({

	render: function(){
		// var userEnteredTemp = this.state.value;
		return(
			<div>
				<TemperatureInput units="Celsius" />
				<TemperatureInput units="Fahrenheit" />
				<TemperatureInput units="Kelvin" />
				<BoilingVerdict celsius={Number(1)} />
			</div>
		)
	}
})

ReactDOM.render(
	<Calculator />,
	document.getElementById("boiling")
)