var mymap; // global variable to store the map

function getLocation() { 
	navigator.geolocation.getCurrentPosition(loadLeafletMap);
} 

function loadLeafletMap(CurrentLocation){

mymap = L.map('mapContainer').setView([CurrentLocation.coords.latitude, CurrentLocation.coords.longitude], 4);

// load the tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

if($(window).width() <= 991) {
	getFormData();
	trackLocation();
  };


}; //end code to add the leaflet map



