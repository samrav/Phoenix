function checkCredentials(){
	     var userInput = document.getElementById("username").value;
		 var userPassword = document.getElementById("pwd").value;
		 if (userInput == "marwizy" && userPassword == "1234") {
			 window.location.href = "homeo.html";
		 }
}

function checkUserPass(){
	     var userInput = document.getElementById("username1").value;
		 var userPassword = document.getElementById("pwd1").value;
		 if (userInput == "samrav" && userPassword == "5678") {
			 window.location.href = "aftersigninforphoenix.html";
		 }
}