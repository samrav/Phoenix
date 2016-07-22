function checkCredentials(){
	     var userInput = document.getElementById("username").value;
		 var userPassword = document.getElementById("pwd").value;
		 if (userInput == "marwizy" && userPassword == "1234") {
			 window.location.href = "aftersigninforphoenix.html";
		 }
}
