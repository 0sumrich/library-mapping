import React, { Fragment } from "react";
import { Layer, Feature } from "react-mapbox-gl";

const Lsoa = ({ feature }) => {
	return (
		<Layer
			type="fill"
			id={feature.properties.LSOA11CD}
			paint={{
<<<<<<< HEAD
				"fill-color": "#ff00e1"
=======
				"fill-color": "#ff00e1",
				'fill-opacity': 0.25
>>>>>>> b2ed60d198ecf48b7db022e1dab3d49ee416e30a
			}}
		>
			<Feature coordinates={feature.geometry.coordinates} />
		</Layer>
	);
};

const Members = ({ geo }) => {
	const features = geo.features;
	return (
		<Fragment>
			{features.map((feature, i) => (
				<Lsoa key={feature.properties.LSOA11CD + i} feature={feature} />
			))}
		</Fragment>
	);
};

export default Members;
