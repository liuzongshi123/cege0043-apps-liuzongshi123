<html>
<head>
 <!-- the following links add the CSS and Javascript required for the Leaflet Map -->
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css"
   integrity="sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw=="
   crossorigin=""/>

 <!-- the following links incorporate the CSS required for custom icon creation -->
 <link rel="stylesheet" href="css/ionicons.min.css">
 <link rel="stylesheet" href="css/leaflet.awesome-markers.css">


<script src="https://unpkg.com/leaflet@1.1.0/dist/leaflet.js"
   integrity="sha512-mNqn2Wg7tSToJhvHcqfzLMU6J4mkOImSPTxVZAdo+lcPlk+GhZmYgACEe0x35K7YzW1zJ7XyJV/TT1MrdXvMcA=="
   crossorigin=""></script>


<script src="js/leaflet.awesome-markers.js"></script>

<script 
	src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>

  <!-- the following CSS is used to set the size of the Map -->
  <style type="text/css"> 
#mapid { height: 180px; }


</style>

</head>
<body>


<!-- the mapid div will hold the map -->
<div id="mapid" style="width: 600px; height: 400px;"></div>
<!-- the following script will load the map and set the default view and zoom, as well as loading the basemap tiles -->
<script>
	var mymap; // global variable to store the map

	function loadLeafletMap(){
	mymap = L.map('mapid').setView([51.505, -0.09], 13);

	// load the tiles
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
</script>



</body>
</html>