<body>
<script src="homef.html"></script>

<form id="frm1" action="form_action.asp">
  Username: <input type="text" name="fname" value="marwizy"><br>
  Password: <input type="text" name="lname" value="1234"><br><br>
  <button onclick="myFunction()">Try it</button>
  <a href="homef.html"><button type="button">Submit!</button></a><br>
</form>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>