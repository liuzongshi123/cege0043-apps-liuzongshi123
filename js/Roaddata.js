var RoadLayer;

function getRoadData(){
    var layerURL = "https://developer.cege.ucl.ac.uk:30283/getGeoJSON/london_highway/geom";
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
		RoadLayer = L.geoJson(result,
		{
		// use point to layer to create the points
		pointToLayer: function (feature, latlng){
	       var nullName = false;
           if (!layer.feature.properties.name){ 
            nullName = true; 
            }
            console.log(nullName); 
            switch (true) { 
                case (nullName === true): 
                layer.setStyle(style3);
                break; 
            default:
                // all streets with actual names
                var highStreet = layer.feature.properties.name.toLowerCase().indexOf("high");
                switch (true) { 
                    case (highStreet > -1):
                    layer.setStyle(style1); 
                    break; 
                default: 
                    layer.setStyle(style2); 
                    } 
                } // end outer switch 
 			}, // end of point to layer
 		}).addTo(mymap);
		// change the map zoom so that all the data is shown
 		mymap.fitBounds(RoadLayer.getBounds());
 		} // end of the inner function
	}); // end of the ajax request
} // end of the getRoadData function

function removeRoadData() { 
    alert("remove the Road data here"); 
    mymap.removeLayer(RoadLayer);
}