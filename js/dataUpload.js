function startDataUpload() { 
	alert ("start data upload");
	var name = document.getElementById("name").value; 
	var surname = document.getElementById("surname").value; 
	var module = document.getElementById("module").value; 

	alert(name + " "+ surname + " "+module);

	var postString = "name="+name +"&surname="+surname+"&module="+module;
	// now get the checkbox values - separate them with a | so that they can be 
	// split later on if necessary
	var checkString = ""; 
	for (var i = 1;i< 5;i++){ 
		if (document.getElementById("check"+i).checked === true) { 
			checkString = checkString + document.getElementById("check"+i).value + "||" 
		} 
	} 
	postString = postString + "&modulelist="+checkString;
	// now get the select box values
	var language = document.getElementById("languageselectbox").value; 
	postString = postString + "&language="+language;
	// now get the geometry values
	if (document.getElementById("morning").checked) { 
		postString=postString+"&lecturetime=morning"; 
	} 
	if (document.getElementById("afternoon").checked) { 
		postString=postString+"&lecturetime=afternoon"; 
	}
	// finally add the port id
	postString = postString +"&port_id="+httpsPortNumberAPI;
	alert (postString);
}// close off the startDataUpload function