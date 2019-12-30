import React, { Fragment } from "react";
import { Layer, Feature } from "react-mapbox-gl";

const Lsoa = ({ feature }) => {
	return (
		<Layer
			type="fill"
			id={feature.properties.LSOA11CD}
			paint={{
				"fill-color": "#ff00e1"
			}}
		>
			<Feature coordinates={feature.geometry.coordinates} />
		</Layer>
	);
};

const Members = ({ geo }) => {
	const features = geo.features;
	// return (
	// 	<Fragment>
	// 		{features.map(feature => (
	// 			<Lsoa key={feature.properties.LSOA11CD} feature={feature} />
	// 		))}
	// 	</Fragment>
	// );
	return (
		<Fragment>
			<Lsoa feature={geo.features[0]} />
		</Fragment>
	);
};

export default Members;
