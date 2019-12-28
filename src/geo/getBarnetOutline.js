const fs = require('fs')
const geo = require('./england.json');
const barnet = geo.features.filter(o => {
	// o.properties.LAD13NM
	return o.properties.LAD13NM==='Barnet'
})
geo.features = barnet
fs.writeFileSync('./barnet.geojson', JSON.stringify(geo))