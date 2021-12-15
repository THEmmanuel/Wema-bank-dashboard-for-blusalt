// Set graph margins and dimensions
const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
},
width = 300 - margin.left - margin.right,
height = 180 - margin.top - margin.bottom;

// Set ranges
const x = d3.scaleBand()
.range([0, width])
.padding(0.1);
const y = d3.scaleLinear()
.range([height, 0]);
const svg = d3.select("#data-chart-container").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Get data
d3.csv("./Data/newUsers.csv").then(data => {

// Format data
data.forEach((d) => {
    d.amounts = +d.amounts;
});

// Scale the range of the data in the domains
x.domain(data.map((d) => {
    return d.month;
}));
y.domain([0, d3.max(data, d => {
    return d.users;
})]);

// Append rectangles for bar chart
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => {
        return x(d.month);
    })
    .attr("width", x.bandwidth())
    .attr("y", d => {
        return y(d.users);
    })
    .attr("height", d => {
        return height - y(d.users);
    });

// Add x axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Add y axis
svg.append("g")
    .call(d3.axisLeft(y));

});
