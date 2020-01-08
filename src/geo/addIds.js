const fs = require("fs");
const geo = JSON.parse(fs.readFileSync("./boundaries.json"));
const l = geo.features.length;
for (let i = 0; i < l; i++) {
	geo.features.id = i;
}
debugger;
fs.createWriteStream("./boundaries_with_id.json").write(
	JSON.stringify(geo),
	() => console.log("file written")
);
