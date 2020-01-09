import React, { useState } from "react";
import ReactMapboxGl, { Source, Layer } from "react-mapbox-gl";
import Barnet from "./barnet";
const publickey = process.env.REACT_APP_API_KEY;
const MapBox = ReactMapboxGl({
	accessToken: publickey
});
const style = "mapbox://styles/0sumrich/ck4skvfdt4noq1co2t468d50p";

export default ({ la, mapStyle }) => {
	const [hoverIds, setHoverIds] = useState([]);
	const feature = la.features[0];
	const { centroid, bounds } = feature.properties;
  console.log(hoverIds)
	return (
		<MapBox
			style={style}
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			onStyleLoad={m => {
				m.setStyle(mapStyle);
			}}
			onMouseMove={(_, e) => {
				const lsoas = _.queryRenderedFeatures(e.point, {
					layers: ["lib-users"]
				});

				if (lsoas.length > 0) {
          const lsoa = lsoas[0]
          setHoverIds(oldIds => [...oldIds, lsoa.id])
        }
			}}			
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={feature.geometry.coordinates[0]} />
		</MapBox>
	);
};
