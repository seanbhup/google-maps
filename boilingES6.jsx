
function toCelsius(f){
  return(f - 32) * 5 / 9;
}

function toFahrenheit(c){
  return(c * 9 / 5) + 32;
}

function toKelvin(c){
  return(c + 273);
}

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

  //   if(unit == "c"){
  //     var convertedNumber = toFahrenheit(tryNumber);
  //   }
  //   if(unit == "f"){
  //     var convertedNumber = toCelsius(tryNumber);
  //   }
  //   if(unit == "k"){
  //     var convertedNumber = toCelsius(trynumber)
  //   }
  // }
    
function BoilingVerdict(props) {
   if (props.celsius >= 100) {
       return(
           <p className="boiling"><span className="boiling-color">Boiling at {props.celsius}°C</span></p>
       )
   }else{
       return(
           <p className="not-boiling"><span className="not-boiling-color">Not Boiling at {props.celsius}°C</span></p>
       )
   }
}

function FreezingVerdict(props) {
   if (props.celsius <= 0) {
       return(
           <p className="freezing">The water would <span className="freezing-color">freeze at {props.celsius}°C</span></p>
       )
   }else{
       return(
           <p className="not-freezing">The water would not <span className="not-freezing-color">freeze at {props.celsius}°C</span></p>
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
               <label>Enter a temperature in {units}</label>
               <input placeholder="Temp" value={value} onChange={this.handleChange} />
           </div>
       )
   }

}

class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: 100,
        scale: "c"
      };
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.handleKelvinChange = this.handleKelvinChange.bind(this);
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

   handleKelvinChange(value){
    this.setState({
      scale: "k",
      value
    })
   }

   render() {

      var scale = this.state.scale;
      var value = this.state.value;
      if(scale === "c"){
        var fTemp = tryConvert(value, "c");
        var cTemp = value;
      }else if(scale === "f"){
        var fTemp = value;
        var cTemp = tryConvert(value, "f");
      }else if(scale === "k"){
        var kTemp = value;
        var ctemp = tryConvert(value, "c");
      }

       return(
           <div>
               <TemperatureInput units="Celsius" value={cTemp} onChange={this.handleCelsiusChange} />
               <TemperatureInput units="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
               <TemperatureInput units="Kelvin" value={kTemp} onChange={this.handleKelvinChange} />
               <BoilingVerdict celsius={Number(cTemp)} />
               <FreezingVerdict celsius={Number(cTemp)} />

           </div>
       )
   }
}

ReactDOM.render(
   <Calculator />,
   document.getElementById('boiling')
)