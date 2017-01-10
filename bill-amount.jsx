
function Refund(props) {
   if (props.celsius >= 100) {
       return(
           <p className="boiling">The water would <span className="boiling-color">boil at {props.celsius}°C</span></p>
       )
   } else {
       return(
           <p className="not-boiling">The water would not <span className="not-boiling-color">boil at {props.celsius}°C</span></p>
       )
   }
}

class PaidInput extends React.Component{
	constructor(props) {
		super(props);
	}
}

class BillInput extends React.Component{
	constructor(props) {
       super(props);
       this.state = {
           value: ''
       };
       this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
       // this.setState({
       //     value: event.target.value
       // })
       this.props.onChange(event.target.value)
   }

   render() {
      var value = this.props.value;
      var units = this.props.units;
       return(
           <div>
               <label>Enter your bill total in {units}</label>
               <input placeholder="$$$" value={value} onChange={this.handleChange} />
           </div>
       )
   }
}

class Calculator extends React.Component {
	constructor(props){
		super(props);
		this.state = {
        value: 100,
		}
		render(){

			return(
				<div>
					<BillInput units="Dollars" value={this.state.value}>
					<PaidInput />
					<Refund />

				</div>
		}
			
}

ReactDOM.render(
	<Calculator />,
	document.getElementById("billing")
)