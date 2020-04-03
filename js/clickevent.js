var popup = L.popup(); // create a custom popup as a global variable

var testMarkerPink = L.AwesomeMarkers.icon({
		icon:'play',
		markerColor:'pink'
	});

function onMapClick(e) {
    	popup
    			.setLatLng(e.latlng)
    			.setContent("You clicked the map at "+e.latlng.toString())
    			.openOn(mymap);
    }

///L.marker([position.coords.latitude,position.coords.longitude],
			//{icon:testMarkerPink}).addTo(mymap)