//TP4 application web NGUYEN Bao Duy M2-3IR 
$(function () {
	$("#myBtn").click(function () {

		if
		(
			($("#nom").val().length < 1) ||
			($("#Prenom").val().length < 1) ||
			($("#ddn").val().length < 1) ||
			($("#add").val().length < 1) ||
			($("#mail").val().length < 1)
		) {
			$("#modal").modal('show');
		}
		else {
	//		$("#modalheader").text("Bienvenua " + $("#nom").val());
	//		$("#nee").text('Vous êtes nés le ' + $("#ddn").val() + ' et vous habitez');
	//		$("#modal1 .modal-body a").attr("href", "https://maps.google.com/maps?q=" + $("#add").val() + "&markers=" + $("#add").val());
	//		$("#modal1 .modal-body a img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?size=400x250&center=" + $("#add").val() + "&markers=" + $("#add").val());
	//		$("#modal1").modal('show');
			$("#announment").text("Bravo! Le formulaire est sauvegardé.");
	
			localStorage.setItem("form_nom", $("#nom").val());
			localStorage.setItem("form_prenom", $("#Prenom").val());
			localStorage.setItem("form_add", $("#add").val());
			localStorage.setItem("form_date", $("#ddn").val());
			localStorage.setItem("form_mail", $("#mail").val());
			localStorage.setItem("form_valider", "valider");}
			
	}

	)

	$('#GPS').click(function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			$("#add").val() = "Geolocation is not supported by this browser.";
		}
	});
	function showPosition(position) {
		$("#add").val("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
		$('#image').attr("src", "http://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude + "," + position.coords.longitude + "&size=500x400&zoom=7");
		$("#CarAdr").text($("#add").val().length + " car.");
	}

	$("#ddn").datepicker({
		dateFormat: "dd/mm/yy",
		maxDate: 0,
        onClose: function(){
            $("#Carddn").text($("#ddn").val().length + " car.");
        }
	});
	$("#nom").keyup(function () { $("#Carnom").text($("#nom").val().length + " car."); });
	$("#Prenom").keyup(function () { $("#CarPrenom").text($("#Prenom").val().length + " car."); });
	$("#ddn").keyup(function () { $("#Carddn").text($("#ddn").val().length + " car."); });
	$("#add").keyup(function () { $("#Caradd").text($("#add").val().length + " car."); });
	$("#mail").keyup(function () { $("#Carmail").text($("#mail").val().length + " car."); });





})
