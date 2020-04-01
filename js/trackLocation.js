
var trackLocationLayer = []; // create an array to store all the location tracking points
var geoLocationID; // store the ID of the location tracker so that it can be used to switch the location tracking off

function trackLocation() { 
	if (navigator.geolocation) {
		geoLocationID = navigator.geolocation.watchPosition(showPosition);  //Call show position function
	} else { 
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser."; 
	} 
};

function showPosition(position) {
	// add the new point into the array
	// the 'push' command just creates another pigeonhole in an array which 
	// will then contain the new marker point 
	trackLocationLayer.push(
		L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap)
		); 
};

function removeLocationLayers() {
	// disable the location tracking so that a new point won't be added while you are removing the old points
	// use the geoLocationID to do this
	navigator.geolocation.clearWatch(geoLocationID);

	// now loop through the array and remove any points
	// note that we start with the last point first as if you remove point 1 then point 2 becomes point 1 so 
	// a loop doesn't work
	// also we use -1 as arrays in javascript start counting at 0
	for (var i=trackLocationLayer.length-1; i > -1;i--) {
		console.log("removing point "+i + " which has coordinates "+trackLocationLayer[i].getLatLng()
		);
		mymap.removeLayer(trackLocationLayer[i]);
};