import React from "react";
import "./App.css";
import Map from "./map";

const App = ({ la, users }) => {
	return <Map la={la} users={users} />;
};

export default App;
