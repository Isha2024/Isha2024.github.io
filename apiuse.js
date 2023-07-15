var url = "https://jooble.org/api/";
var key = "<b01c170a-4b25-4126-b550-60980b358046>";
var params = "{ keywords: 'it', location: 'Bern'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
//Send request to the server
http.send(params);
