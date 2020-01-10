import React, { Fragment, useState } from "react";
import ReactMapboxGl, { Layer, GeoJSONLayer } from "react-mapbox-gl";
import Barnet from "./barnet";
const publickey = process.env.REACT_APP_API_KEY;
const MapBox = ReactMapboxGl({
  accessToken: publickey
});

const style = "mapbox://styles/0sumrich/ck55oh8go05ks1cqqi7lavhcq";
const tilesetId = "0sumrich.25k3foel";
const sourceOptions = {
  type: "vector",
  url: `mapbox://${tilesetId}`
};
const paint = {
  "fill-opacity": [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    0.6,
    0.35
  ],
  "fill-color": [
    "interpolate",
    ["linear"],
    ["get", "Number of borrowers"],
    1,
    "hsl(0, 100%, 90%)",
    152.5,
    "hsl(0, 100%, 51%)",
    304,
    "hsl(0, 100%, 11%)"
  ]
};

// <Layer type="fill" id="lsoas" sourceId="lib-users" sourceLayer='out' paint={paint}/>
// onStyleLoad={m => {

//       }}
// "E01000123"

const unique = features => {
  let res = [];
  const l = features.length;
  for (let i = 0; i < l; i++) {
    const f = features[i];
    const lsoa = f.properties.LSOA11CD;
    const lsoas = res.length > 0 ? res.map(o => o.properties.LSOA11CD) : [];
    if (!lsoas.includes(lsoa)) {
      res.push(f);
    }
  }
  return res;
};

const Layers = ({ features }) => {
  const fPaint = {
    "fill-color": "#ff00e1",
    "fill-opacity": 0.25
  };

  if (features) {
    const f = unique(features);
    return (
      <Fragment>
        {f.map((feature, i) => (
          <GeoJSONLayer key={i} data={feature} fillPaint={fPaint} />
        ))}
      </Fragment>
    );
  } else {
    return null;
  }
};

// <Layers features={features} />

export default ({ la, mapStyle }) => {
  const [features, setFeatures] = useState(null);
  const laFeature = la.features[0];
  const { centroid, bounds } = laFeature.properties;
  return (
    <MapBox
      style={style}
      onStyleLoad={m => {
        // setFeatures(m.queryRenderedFeatures({ layers: ["lib-users"] }));
      }}
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      center={centroid}
      fitBounds={bounds}
      fitBoundsOptions={{ padding: 50 }}
    >
      <Barnet coordinates={laFeature.geometry.coordinates[0]} />      
    </MapBox>
  );
};
