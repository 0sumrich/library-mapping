// [""0""].properties = E01000322
// id 318
const fs = require("fs")
const geo = JSON.parse(fs.readFileSync('./boundaries_with_id.json'));
const feature = geo.features.filter(o => o.properties.LSOA11CD==='E01000322')[0]
console.log(feature)