const fs = require("fs");
const libraries = JSON.parse(fs.readFileSync("./libraries.json"));
const goodKeys = ["London_Borough_of_BarnetLabel", "coordinate_location"];
const libFix = libraries
	.map(o => ({
		library: o[goodKeys[0]],
		coordinates: o[goodKeys[1]]
	}))
	.filter(o => o.library.includes("Community"));
const res = JSON.stringify({ libraries: libFix });
fs.createWriteStream("./libraries2.json").write(res, () => console.log("done"));
