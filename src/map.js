import React, { Fragment, useState, useEffect } from "react";
import ReactMapboxGl, { Layer, GeoJSONLayer } from "react-mapbox-gl";
import Barnet from "./barnet";
import * as d3 from "d3";

const publickey = process.env.REACT_APP_API_KEY;
const MapBox = ReactMapboxGl({
	accessToken: publickey
});

const style = "mapbox://styles/0sumrich/ck55oh8go05ks1cqqi7lavhcq";

const Layers = ({ features }) => {
	const fPaint = {
		"fill-color": "#ff00e1",
		"fill-opacity": 0.25
	};
	const borrowers = features.map(o => o.properties["Number of borrowers"]);
	const min = d3.min(borrowers);
	const max = d3.max(borrowers);
	const scale = d3
		.scaleLinear()
		.domain([min, max])
		.range([0, 1]);
	console.log(scale(152));
	return features ? (
		<Fragment>
			{features.map((feature, i) => (
				<GeoJSONLayer key={i} data={feature} fillPaint={fPaint} />
			))}
		</Fragment>
	) : null;
};

//

// useEffect(() => {
// 	const fetchData = async () => {
// 		const res = await fetch("/boundaries_with_id.json");
// 		const json = await res.json();
// 		setFeatures(json.features);
// 	};
// 	fetchData();
// }, []);

export default ({ la, mapStyle }) => {
	let hoverId = null;
	const laFeature = la.features[0];
	const { centroid, bounds } = laFeature.properties;
	const handleMove = (m, e) => {
		const lsoas = m.queryRenderedFeatures(e.point, {
			layers: ["lib-users"]
		});
		if (lsoas.length > 0) {
			const f = lsoas[0];
			const id = f.id;
			if (hoverId !== id && hoverId) {
				m.setFeatureState(
					{
						source: "composite",
						sourceLayer: "out",
						id: hoverId
					},
					{ hover: false }
				);
			}
			m.setFeatureState(
				{
					source: "composite",
					sourceLayer: "out",
					id: id
				},
				{ hover: true }
			);
			hoverId = id;
		}
	};

	return (
		<MapBox
			style={style}
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			onMouseMove={handleMove}
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={laFeature.geometry.coordinates[0]} />
		</MapBox>
	);
};
