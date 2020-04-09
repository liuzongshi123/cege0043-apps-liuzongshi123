// create an array to store all the click points
var clickLocationLayer = [];
var question_position;


function clickEvent() {
	mymap.on('click', onMapClick);
}


// Add a marker when user click the map
function onMapClick(e) {
	// Create an element to hold all text and markup
	var container = $('<div />');

	// Delegate all event handling for the container itself and its contents to the container
	container.on('click',function() {
    StartCreation();
    question_position = e;
	});

	var text = "Create a question at "+e.latlng.toString()
	container.html(text+"<br><button style='display:block;margin:0 auto'>Create Question Here</button>.");


    clickLocationLayer.push(L.marker(e.latlng).addTo(mymap).
    	bindPopup(container[0]).
    	openPopup()
    	);
    removeclickLayers();
}

//Remove the last click
function removeclickLayers() {
	clickLocationLayer.reverse();
	for (var i=clickLocationLayer.length-1; i > 0;i--) {
	mymap.removeLayer(clickLocationLayer[i]);
	};
}

function StartCreation() {
  document.getElementById('question_creation').style.display = 'block';
  document.getElementById('modification').style.display = 'none';
}

function modification() {
  document.getElementById('modification').style.display = 'block';
  document.getElementById('question_creation').style.display = 'none';
}


function StopCreation() {
  document.getElementById('question_creation').style.display = 'none';
  document.getElementById('modification').style.display = 'none';
}

var ranking;
function getRanking() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
  "/quizanswers/ranking/"+ httpsPortNumberAPI,
    crossDomain: true,
    success: function(result){  
    ranking = result[0].array_to_json[0].rank;
    ranking = "Your Current Ranking is "+ranking+" !";
      alert(ranking);
  }}); //end of the AJAX call
} // end of getRanking

