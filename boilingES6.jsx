
function toCelsius(f){
  return(f - 32) * 5 / 9;
}

function toFahrenheit(c){
  return(c * 9 / 5) + 32;
}

// function toKelvin(c){
//   return(c + 273);
// }

function tryConvert(value, unit){
  var tryNumber = Number(value);
  if (isNaN(tryNumber)){
    return "";
  }else{
    if(unit == "c"){
      var convertedNumber = toFahrenheit(tryNumber);
    }else{
      var convertedNumber = toCelsius(tryNumber);
    }
    return convertedNumber;
  }
}

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

// console.log("100 degrees fahrenheit is", tryConvert(100, "f"), "celsius.");
// console.log("0 degrees celsius is", tryConvert(0, "c"), "fahreheit.");

class TemperatureInput extends React.Component {
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
               <label>Enter temperature in {units}</label>
               <input placeholder="Temp" value={value} onChange={this.handleChange} />
           </div>
       )
   }

}

class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: 0,
        scale: "c"
      };
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

   handleCelsiusChange(value){
    this.setState({
      scale: "c",
      value 
    });
  }  

   handleFahrenheitChange(value){
    this.setState({
      scale: "f",
      value
    })
   }

   // handleKelvinChange(value){
   //  this.setState({
   //    scale: "k",
   //    value
   //  })
   // }

   render() {

      var scale = this.state.scale;
      var value = this.state.value;
      if(scale === "c"){
        var fTemp = tryConvert(value, "c");
        var cTemp = value;
      }else if(scale === "f"){
        var fTemp = value;
        var cTemp = tryConvert(value, "f");
      }

       return(
           <div>
               <TemperatureInput units="Celsius" value={cTemp} onChange={this.handleCelsiusChange} />
               <TemperatureInput units="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
               {/* <TemperatureInput units="Kelvin" /> */}
               <BoilingVerdict celsius={Number(cTemp)} />
           </div>
       )
   }
}

ReactDOM.render(
   <Calculator />,
   document.getElementById('boiling')
)