import * as d3 from "d3";

// const margin = { top: 50, right: 50, bottom: 50, left: 50 };
//     const width = 950 - margin.left - margin.right;
//     const height = 600 - margin.top - margin.bottom;
//     const d = data;
//     const chart = d3
//       .select("#weekly")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

function drawLegend(colors, numbers) {
	
	const legend = d3.select("#legend");
	
	const margin = { top: 5, right: 5, bottom: 5, left: 5 };

	const width =
		legend.node().getBoundingClientRect().width -
		margin.left -
		margin.right;

	const height = 50 - margin.top - margin.bottom;
	
	const g = legend
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", `translate(${margin.left}, ${margin.top})`);

	const scaleLeft = d3
		.scaleLinear()
		.domain([0, width / 2])
		.range([0, 1]);
	
	const colorLeft = px =>
		d3.interpolateRgb(colors[0], colors[1])(scaleLeft(px));
	
	const scaleRight = d3
		.scaleLinear()
		.domain([width / 2, width])
		.range([0, 1]);
	
	const colorRight = px =>
		d3.interpolateRgb(colors[1], colors[2])(scaleRight(px));
	
	for (let i = 0; i < width; i++) {
		const attrs = {
			x: i,
			y: 0,
			width: 1,
			height: height / 2,
			fill: i < width / 2 ? colorLeft(i) : colorRight(i)
		};
		g.append("rect")
			.attr("x", attrs.x)
			.attr("y", attrs.y)
			.attr("width", attrs.width)
			.attr("height", attrs.height)
			.attr("fill", attrs.fill);
	}
	
	g.append("text")
		.attr("x", 0)
		.attr("y", 10 + height / 2)
		.attr("class", "legend-text")
		.text(numbers[0]);

	g.append("text")
		.attr("x", width / 2)
		.attr("y", 10 + height / 2)
		.attr("class", "legend-text")
		.attr('text-anchor', 'middle')
		.text(numbers[1]);

	g.append("text")
		.attr("x", width - 5)
		.attr("y", 10 + height / 2)
		.attr("class", "legend-text")
		.attr("text-anchor", "end")
		.text(numbers[2]);
}

export default drawLegend;
