const fs = require("fs");
const libraries = JSON.parse(fs.readFileSync("./libraries.json"));
const goodKeys = ["London_Borough_of_BarnetLabel", "coordinate_location"];
const GeoJson = require('geojson')

const fixCoords = str =>
	str
		.slice(str.indexOf("(") + 1, str.indexOf(")"))
		.split(" ")
		.map(x => +x);

const libFix = libraries
	.map(o => ({
		library: o[goodKeys[0]],
		lat: fixCoords(o[goodKeys[1]])[0],
		lon: fixCoords(o[goodKeys[1]])[1]
	}))
	.filter(o => !o.library.includes("Community"));
const res = GeoJson.parse(libFix, {Point: ['lon', 'lat']})
fs.createWriteStream("./libraries2.json").write(JSON.stringify({libraries: res}), () => console.log("done"));
fs.unlinkSync('./libraries.json')
fs.rename('./libraries2.json', './libraries.json', err => console.err)
