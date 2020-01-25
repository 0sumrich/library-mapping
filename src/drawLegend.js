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

function drawLegend(colors) {
	const legend = d3
		.select("#legend")
		.append("svg")
		.attr("width", "90%")
		.attr("height", "50px");

	const { height, width } = legend.node().getBoundingClientRect();
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
				height: height,
				fill: i < width / 2 ? colorLeft(i) : colorRight(i)
			};
		legend
			.append("rect")
			.attr('x', attrs.x)
			.attr('y', attrs.y)
			.attr('width', attrs.width)
			.attr('height', attrs.height)
			.attr('fill', attrs.fill)
	}
}

export default drawLegend;
