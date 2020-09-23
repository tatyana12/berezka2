var months=[];
var students = [];
d3.json('hw3data.json').then (function(data) {
    for (key in data) {
        months.push(data[key].term)
        students.push(+data[key].students)
    }

    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var height = 200 - margin.top - margin.bottom, width = 500 - margin.right - margin.left, barW = 40, barSpace = 5;
    var verticalGuide = d3.scaleLinear()
        .domain([0, d3.max(students)])
        .range([height, 0])
    var yS = d3.scaleLinear()
        .domain([0, d3.max(students)])
        .range([0, height])
    var xS = d3.scaleBand()
        .domain(months)
        .range([0, width])

        .padding(0.1)
    var graph = d3.select('#chart')
        .append('svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .style('background', '#D3D3D3')
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    graph.selectAll("rect")
        .data(students)
        .enter()
        .append("rect")
        .attr("width", xS.bandwidth)
        .attr("height", function (d) {
            return yS(d)
        })
        .attr("x", function (d, i) {
            return xS(months[i])
        })
        .attr("y", function (d) {
            return height - yS(d)
        })



        .on('mouseover', function(d, i) {
            tooltip.transition()
                .style('opacity', .8)

            tooltip.html("Students: "+d+"<br>"+"Term: "+months[i])
                .style('left', (d3.event.pageX - 70) + 'px')
                .style('top', (d3.event.pageY - 50) + 'px')

            d3.select(this)
                .style('opacity', .4)
        })
        .on('mouseout', function(d) {
            d3.select(this)
                .style('opacity', 1)
            tooltip.transition()
                .style('opacity', 0)
        })


    var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style("color", '#0f4769' )
        .style('opacity', 0)
        .style('width', '200')
        .style('font-size', '6');


    graph.append('g')
        .call(d3.axisLeft(yS).scale(verticalGuide))
        .classed("axis",true);


    graph.append('g')
        .call(d3.axisBottom(xS))
        .attr('transform', 'translate(0, ' + height + ')')
        .classed("axis",true);


});





