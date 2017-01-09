var Cities = React.createClass({
	render: function(){
		var string = "Hello, humans. I come in peace."
		var imageUrl = "https://www.base64-image.de/build/img/mr-base64-482fa1f767.png"
		var cityRows = [];
		this.props.cities.map(function(currentCity, index){
			console.log(currentCity.nameOfCity);
			console.log(currentCity.landArea);
		})
		return(
			<div>
				<h1>{string}</h1>
				<img src={imageUrl} />
			</div>
		)
	}

});


ReactDOM.render(
	<Cities cities={cities} />,
	document.getElementById("cities-container")
)