
var string = "Hello, humans. I come in peace."
var imageUrl = "https://www.base64-image.de/build/img/mr-base64-482fa1f767.png"

function GoogleCity(props){
	return(
		<div className="cityName">
			<table className="cityTable">
				<tbody>
					<tr>
						<td>{props.cityObject.city}</td>
						<td>{props.cityObject.landArea}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

var Cities = React.createClass({
	render: function(){
		var cityRows = [];
		this.props.cities.map(function(currentCity,index){
			// console.log(currentCity.city)
			// console.log(cities[index].city)
			cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
		})
		var string = "Hello, World. I\'m cold."
		return(
			<div>
				{cityRows}
				<img src={imageUrl} />
			</div>
		)
	}
});

ReactDOM.render(
	<Cities cities={cities} />,
	document.getElementById('cities-container')
)



