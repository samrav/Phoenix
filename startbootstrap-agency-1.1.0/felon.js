function checkUserPass(){
	     var userInput = document.getElementById("username").value;
		 var userPassword = document.getElementById("pwd").value;
		 if (userInput == "samrav" && userPassword == "5678") {
			 window.location.href = "aftersigninforphoenix.html";
		 }
}