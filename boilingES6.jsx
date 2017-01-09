function BoilingVerdict(props) {
   if (props.celsius >= 100) {
       return(
           <p>The water would boil at {props.celsius}</p>
       )
   } else {
       return(
           <p>The water would not boil at {props.celsius}</p>
       )
   }
}

class TemperatureInput extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: ''
       };
       this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
       this.setState({
           value: event.target.value
       })
   }

   render() {
       return(
           <div>
               <label>Enter temperature in question in {this.props.units}</label>
               <input placeholder="Temp" value={this.state.value} onChange={this.handleChange} />
           </div>
       )
   }

}

class Calculator extends React.Component {

   render() {
       return(
           <div>
               <TemperatureInput units="Celsius" />
               <TemperatureInput units="Fahrenheit" />
               <BoilingVerdict celsius={Number(1)} />
           </div>
       )
   }
}

ReactDOM.render(
   <Calculator />,
   document.getElementById('boiling-wrapper')
)