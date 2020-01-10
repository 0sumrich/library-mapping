import React, { useState } from "react";
import ReactMapboxGl, { Layer, GeoJSONLayer  } from "react-mapbox-gl";
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

export default ({ la, mapStyle }) => {
  const [features, setFeatures] = useState(null);
  const laFeature = la.features[0];
  const { centroid, bounds } = laFeature.properties;
  const f = features.filter(o => O.properties.LSOA11CD)
  const geo = features ? 
        <GeoJSONLayer data
  return (
    <MapBox
      style={style}
      onStyleLoad={m => {
        setFeatures(m.queryRenderedFeatures({ layers: ['lib-users'] }));
      }}
      onMouseMove={(m, e) => {
        console.log(m.queryRenderedFeatures(e.point, { layers: ['lib-users'] }))
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
