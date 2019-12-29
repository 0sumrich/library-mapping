const fs = require('fs')
const geo = require('./england.json');
const d3 = require('d3-geo')
const barnet = geo.features.filter(o => {
	// o.properties.LAD13NM
	return o.properties.LAD13NM==='Barnet'
})
geo.features = barnet;
const centroid = d3.geoCentroid(geo)
geo.features[0].properties.centroid = centroid;
const str = "export const barnet = " + JSON.stringify(geo);
fs.writeFileSync('./barnet.js', str)