function participationRateAll() {
const svg     = d3.select("#participationRateAll"),
      margin  = {top: 20, right: 20, bottom: 30, left: 50},
      width   = +svg.attr("width")  - margin.left - margin.right,
      height  = +svg.attr("height") - margin.top  - margin.bottom,
      x       = d3.scaleBand().rangeRound([0, width]).padding(0.2),
      y       = d3.scaleLinear().rangeRound([height, 0]),
      g       = svg.append("g")
                   .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
  "/quizanswers/participationrate/all").then(data => {
  data = data[0].array_to_json;
  console.log(data);
  x.domain(data.map(d => d.day));
  y.domain([0, d3.max(data, d => d.questions_answered)]);

  g.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));


  g.append("g")
      .attr("class", "axis axis-y")
      .call(d3.axisLeft(y).ticks(10).tickSize(8));


  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.questions_answered))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_answered))
      .attr("fill", "#566fde");


    g.selectAll(".rect")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day) + x.bandwidth()/2)
      .attr("y", d => y(d.questions_correct))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_correct))
      .attr("fill", "#CB7730");

})
.catch(err => {
  svg.append("text")         
        .attr("y", 20)
        .attr("text-anchor", "left")  
        .style("font-size", "20px") 
        .style("font-weight", "bold")  
        .text(`Couldn't open the data file: "${err}".`);
});
    
  g.append('g')
    .attr('transform', "translate(600, 10)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#566fde');

  g.append('g')
    .attr('transform', "translate(600, 40)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#CB7730');


  g.append("text")
    .attr("y", 20)
    .attr("x", 620)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Question Answered");

  g.append("text")
    .attr("y", 50)
    .attr("x", 620)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Answered Correctly");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height/2))
    .attr("dy", "1em")
    .style("text-anchor" , "middle")
    .text("Number");

  g.append("text")
    .attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .text("Day");

  g.append("text")
    .attr("x", (width/2))
    .attr("y", 0 - 2)
    .attr("text-anchor", "middle")
    .style("font-size", "24px")
    .text("The Participation Rates for The Last Week (All Users)");

    StopCreation();
    document.getElementById("mymap").innerHTML = "#mapContainer { height: 0px; }";
    document.getElementById('participationRateMy').style.display = 'none';
     document.getElementById('FiveDifficultPoint').style.display = 'none';
    document.getElementById('participationRateAll').style.display = 'block';
}


function participationRateMy() {
  const svg     = d3.select("#participationRateMy"),
      margin  = {top: 20, right: 20, bottom: 30, left: 50},
      width   = +svg.attr("width")  - margin.left - margin.right,
      height  = +svg.attr("height") - margin.top  - margin.bottom,
      x       = d3.scaleBand().rangeRound([0, width]).padding(0.2),
      y       = d3.scaleLinear().rangeRound([height, 0]),
      g       = svg.append("g")
                   .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
  "/quizanswers/participationrate/my/"+ httpsPortNumberAPI).then(data => {
  data = data[0].array_to_json;
  console.log(data);
  x.domain(data.map(d => d.day));
  y.domain([0, d3.max(data, d => d.questions_answered)]);

  g.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));


  g.append("g")
      .attr("class", "axis axis-y")
      .call(d3.axisLeft(y).ticks(10).tickSize(8));


  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.questions_answered))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_answered))
      .attr("fill", "#566fde");


    g.selectAll(".rect")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day) + x.bandwidth()/2)
      .attr("y", d => y(d.questions_correct))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_correct))
      .attr("fill", "#CB7730");

})
.catch(err => {
  svg.append("text")         
        .attr("y", 20)
        .attr("text-anchor", "left")  
        .style("font-size", "20px") 
        .style("font-weight", "bold")  
        .text(`Couldn't open the data file: "${err}".`);
});
    
  g.append('g')
    .attr('transform', "translate(600, 10)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#566fde');

  g.append('g')
    .attr('transform', "translate(600, 40)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#CB7730');

  g.append("text")
    .attr("y", 20)
    .attr("x", 620)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Question Answered");

  g.append("text")
    .attr("y", 50)
    .attr("x", 620)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Answered Correctly");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height/2))
    .attr("dy", "1em")
    .style("text-anchor" , "middle")
    .text("Number");

  g.append("text")
    .attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .text("Day");

  g.append("text")
    .attr("x", (width/2))
    .attr("y", 0 - 2)
    .attr("text-anchor", "middle")
    .style("font-size", "24px")
    .text("The Participation Rates for The Last Week (Only You)");

    StopCreation();
    document.getElementById("mymap").innerHTML = "#mapContainer { height: 0px; }";
    document.getElementById('participationRateAll').style.display = 'none';
    document.getElementById('FiveDifficultPoint').style.display = 'none';
    document.getElementById('participationRateMy').style.display = 'block';
}

function RemoveparticipationRate() {
  document.getElementById("mymap").innerHTML = "#mapContainer { height: 600px; }";
  document.getElementById('participationRateAll').style.display = 'none';
  document.getElementById('participationRateMy').style.display = 'none';
  document.getElementById('FiveDifficultPoint').style.display = 'none';
}