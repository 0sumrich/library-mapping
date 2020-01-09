import React, { useState } from "react";
import ReactMapboxGl, { Source, Layer } from "react-mapbox-gl";
import Barnet from "./barnet";
const publickey = process.env.REACT_APP_API_KEY;
const MapBox = ReactMapboxGl({
	accessToken: publickey
});
const style = 'mapbox://styles/0sumrich/ck56ok2jw0fm91cnptdm9t9mv'
// const style = "mapbox://styles/0sumrich/ck4skvfdt4noq1co2t468d50p";
const tilesetId = '0sumrich.25k3foel'
const sourceOptions = {
  id: 'lib-users',
  source: {
    type: 'vector',
    url: 'mapbox://mapbox.mapbox-streets-v8'
  },
  'source-layer': 'poi_label',
  type: 'circle',
  paint: {
    // Mapbox Style Specification paint properties
  },
  layout: {
    // Mapbox Style Specification layout properties
  }
}

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
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={feature.geometry.coordinates[0]} />
      <Layer type='fill' geoJSONSourceOptions={{`mapbox://${tilesetId}}`}/>
		</MapBox>
	);
};
