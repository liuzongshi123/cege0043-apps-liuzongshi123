function startDataUpload(position) { 
	alert ("start data upload");
	var question_title = document.getElementById("question_title").value; 
	var question_text = document.getElementById("question_text").value; 
	var answer_1 = document.getElementById("answer_1").value; 
	var answer_2 = document.getElementById("answer_2").value; 
	var answer_3 = document.getElementById("answer_3").value; 
	var answer_4 = document.getElementById("answer_4").value; 

	alert(question_title + " "+ question_text + " "+answer_1 + " "+ answer_2 + " "+answer_3+ " "+ answer_4);

	var postString = "question_title="+question_title +"&question_text="+question_text+"&answer_1="+answer_1 +"&answer_2="+answer_2+"&answer_3="+answer_3+"&answer_4="+answer_4;

	// now get the geometry values
	var latitude = position.latlng.lat;
	var longitude = position.latlng.lng;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	// now get the radio button values
	if (document.getElementById("optionsRadios1").checked) { 
		postString=postString+"&correct_answer=1"; 
	} 
	if (document.getElementById("optionsRadios2").checked) { 
		postString=postString+"&correct_answer=2"; 
	}
	if (document.getElementById("optionsRadios3").checked) { 
		postString=postString+"&correct_answer=3"; 
	}
	if (document.getElementById("optionsRadios4").checked) { 
		postString=postString+"&correct_answer=4"; 
	}	
	// finally add the port id
	postString = postString +"&port_id="+httpsPortNumberAPI;
	alert (postString);
	processData(postString);
}// close off the startDataUpload function	

function processData(postString) { 
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/insertFormData" 
	$.ajax({ 
		url: serviceUrl, 
		crossDomain: true, 
		type: "POST", 
		success: function(data){console.log(data); dataUploaded(data);}, 
		data: postString 
	}); 
}

// create the code to process the response from the data server
function dataUploaded(data) { 
	// change the DIV to show the response 
	document.getElementById("dataUploadResult").innerHTML = JSON.stringify(data); 
}

function deleteRecord() {
	var deleteID = document.getElementById("deleteID").value;
	var deleteString = "id="+deleteID + "&port_id="+httpsPortNumberAPI;
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/deleteFormData";
	$.ajax({ 
		url: serviceUrl, 
		crossDomain: true, 
		type: "POST", 
		success: function(data){console.log(data); dataDeleted(data);}, 
		data: deleteString 
});
}

function dataDeleted(data){ 
	document.getElementById("dataDeleteResult").innerHTML = JSON.stringify(data); 
}