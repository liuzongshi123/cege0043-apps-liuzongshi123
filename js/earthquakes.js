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

<script src="js/basicMap.js"></script>
<script src="js/earthquakes.js"></script>

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
<button id="loadEarthquakeData" name="loadEarthquakeData" onclick="getEarthquakeData ()">Click here to load the Earthquake data </button>
<button id="removeEarthquakeData" name="removeEarthquakeData" onclick="removeEarthquakeData()">Click here to remove the Earthquake data </button>
<!-- the following script will load the map and set the default view and zoom, as well as loading the basemap tiles -->
<script>
	var earthquakeLayer;

    function getEarthquakeData(){
    	var layerURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
    	var testMarkerRed = L.AwesomeMarkers.icon({
    			icon: 'play',
    			markerColor: 'red'
    		});
    		var testMarkerPink = L.AwesomeMarkers.icon({
    			icon: 'play',
    			markerColor: 'pink'
    		});
    	$.ajax({url: layerURL, crossDomain: true, success: function(result){
    		console.log(result); // check that the data is correct
    		// load the geoJSON layer
			earthquakeLayer = L.geoJson(result,
			{
			// use point to layer to create the points
			pointToLayer: function (feature, latlng){
				// look at the GeoJSON file - specifically at the properties - to see the earthquake magnitude and use a different marker depending on this value
 				// also include a pop-up that shows the place value of the earthquakes
 				if (feature.properties.mag > 1.75) {
 					return L.marker(latlng,  
 						{icon:testMarkerRed}).bindPopup("<b>"+feature.properties.place +"</b>");
 				}
 				else {
 				// magnitude is 1.75 or less
 				return L.marker(latlng, 
 				{icon:testMarkerPink}).bindPopup("<b>"+feature.properties.place +"</b>");;
 					}
 				}, // end of point to layer
 			}).addTo(mymap);
			// change the map zoom so that all the data is shown
 			mymap.fitBounds(earthquakeLayer.getBounds());
 			} // end of the inner function
		}); // end of the ajax request
	} // end of the getEarthquakeData function

	 function removeEarthquakeData() { 
    	alert("remove the earthquake data here"); 
    	mymap.removeLayer(earthquakeLayer);
    }
</script>



</body>
</html>