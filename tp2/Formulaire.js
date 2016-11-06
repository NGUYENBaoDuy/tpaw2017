function validation()
{
	if (document.getElementById("nom").value.length<5)
	{
		document.getElementById("error").innerHTML="le nom doit contenir au moins 5 caracteres";
		document.getElementById("resulat").innerHTML="";
	}else if(document.getElementById("premon").value.length<5)
	{
		document.getElementById("error").innerHTML="error1"
		document.getElementById("resulat").innerHTML="";
	}else if(document.getElementById("ddn").value.length<5)
	{
		document.getElementById("error").innerHTML="error2"
		document.getElementById("resulat").innerHTML="";
	}
	else if(document.getElementById("address").value.length<5)
	{
		document.getElementById("error").innerHTML="error3";
		document.getElementById("resulat").innerHTML="";
	}else if(document.getElementById("mail").value.length<5)
	{
		document.getElementById("error").innerHTML="error4";
		document.getElementById("resulat").innerHTML="";
	}else{
		document.getElementById("resulat").innerHTML="Bienvenue "+document.getElementById("nom").value;
		document.getElementById("error").innerHTML="";
	}
}