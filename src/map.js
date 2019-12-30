import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import Barnet from "./barnet";
import Members from "./members";

const MapBox = ReactMapboxGl({
	accessToken: process.env.REACT_APP_API_KEY
});

export default ({ la, users }) => {
	const feature = la.features[0];
	const { centroid, bounds } = feature.properties;
	return (
		<MapBox
			style="mapbox://styles/0sumrich/ck4skvfdt4noq1co2t468d50p"
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Members geo={users} />
			<Barnet coordinates={feature.geometry.coordinates[0]} />
		</MapBox>
	);
};
