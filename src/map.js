import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import Barnet from './barnet'

const MapBox = ReactMapboxGl({
	accessToken: process.env.REACT_APP_API_KEY
});

export default ({la}) => (
	<MapBox
		style="mapbox://styles/mapbox/streets-v8"
		containerStyle={{
			height: "100vh",
			width: "100vw"
		}}
		center={la.features[0].properties.centroid}
	>
		<Barnet coordinates={la.features[0].geometry.coordinates[0]}/>
	</MapBox>
);