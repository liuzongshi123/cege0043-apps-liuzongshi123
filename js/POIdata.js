var POILayer;

function getPOIData(){
    var layerURL = "https://developer.cege.ucl.ac.uk:30283/getPOI";
    var isParking = feature.properties.name.toLowerCase().indexOf("parking"); 
    console.log(isParking); 
    switch (true) { 
        case (isParking > -1): 
        return L.marker(latlng, 
    {icon:testMarkerRed}).bindPopup("<b>"+feature.properties.name +"</b>"); 
        break; 

    default: 
        return L.marker(latlng, 
    {icon:testMarkerBlack}).bindPopup("<b>"+feature.properties.name +"</b>"); 
        break; 
    };

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
		POILayer = L.geoJson(result,
		{
		// use point to layer to create the points
		pointToLayer: function (feature, latlng){
			// look at the GeoJSON file - specifically at the properties - to see the earthquake magnitude and use a different marker depending on this value
 			// also include a pop-up that shows the place value of the earthquakes
 				return L.marker(latlng,  
 					{icon:isParking}).bindPopup("<b>"+feature.properties.place +"</b>");
 	
 			}, // end of point to layer
 		}).addTo(mymap);
		// change the map zoom so that all the data is shown
 		mymap.fitBounds(POILayer.getBounds());
 		} // end of the inner function
	}); // end of the ajax request
} // end of the getEarthquakeData function

function removePOIData() { 
    alert("remove the POI data here"); 
    mymap.removeLayer(POILayer);
}