var POILayer;

function getPOIData(){
    var layerURL = "https://developer.cege.ucl.ac.uk:30283/getGeoJSON/london_poi/geom";
    var testMarkerRed = L.AwesomeMarkers.icon({
    		icon: 'play',
    		markerColor: 'red'
    	});
    var testMarkerBlack = L.AwesomeMarkers.icon({
    		icon: 'play',
    		markerColor: 'black'
    	});
    $.ajax({url: layerURL, crossDomain: true, success: function(result){
    	console.log(result); // check that the data is correct
    	// load the geoJSON layer
		POILayer = L.geoJson(result,
		{
		// use point to layer to create the points
		pointToLayer: function (feature, latlng){
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
 			}, // end of point to layer
 		}).addTo(mymap);
		// change the map zoom so that all the data is shown
 		mymap.fitBounds(POILayer.getBounds());
 		} // end of the inner function
	}); // end of the ajax request
} // end of the getPOIData function

function removePOIData() { 
    alert("remove the POI data here"); 
    mymap.removeLayer(POILayer);
}