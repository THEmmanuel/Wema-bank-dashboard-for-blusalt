var margin = {
        top: 20,
        right: 20,
        bottom: 100,
        left: 60
    },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    x = d3.scale.ordinal().rangeRoundBands([0, width], 0.5),
    y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5)
    .innerTickSize(-width)
    .outerTickSize(0)
    .tickPadding(10);

var svg     = d3.select("#data-chart-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");