// create an array to store all the click points
var clickLocationLayer = [];

// Add a marker when user click the map
function onMapClick(e) {
    clickLocationLayer.push(L.marker(e.latlng,{icon:testMarkerPink}).addTo(mymap).
    	bindPopup("You clicked the map at "+e.latlng.toString()).
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