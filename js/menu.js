// create an array to store all the click points
var clickLocationLayer = [];

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
  document.getElementById('question_creation').style.display = 'block'
}


function StopCreation() {
  document.getElementById('question_creation').style.display = 'none'
}

