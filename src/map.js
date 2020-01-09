import React, { useState } from "react";
import ReactMapboxGl, { Source, Layer } from "react-mapbox-gl";
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
export default ({ la, mapStyle }) => {
  const [hoverIds, setHoverIds] = useState([]);
  const feature = la.features[0];
  const { centroid, bounds } = feature.properties;
  console.log(hoverIds);
  return (
    <MapBox
      style={style}
      onStyleLoad={m => {
        m.addSource('lib-users', sourceOptions)
      }}
      onMouseMove={m => console.log(m.getSource('lib-users'))}
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      center={centroid}
      fitBounds={bounds}
      fitBoundsOptions={{ padding: 50 }}
    >
      <Barnet coordinates={feature.geometry.coordinates[0]} />
      <Layer type="fill" id="lib-users" sourceId="lsoas" paint={paint}/>
    </MapBox>
  );
};
