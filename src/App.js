import React from "react";
import "./App.css";
import Map from "./map";

const App = ({ la, mapStyle }) => {
	return <Map la={la} mapStyle={mapStyle}/>;
};

export default App;