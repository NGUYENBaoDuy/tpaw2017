
$(function()
{
	$("#myBtn").click(function()
	{
		
		if
		(
			($("#nom").val().length<1)||
			($("#Prenom").val().length<1)||
			($("#ddn").val().length<1)||
			($("#add").val().length<1)||
			($("#mail").val().length<1)
		)
		{
			$("#modal").modal('show');
		}
		else
		{
			$("#modalheader").text("Bienvenua "+$("#nom").val());
			$("#nee").text('Vous êtes nés le ' + $("#ddn").val() +' et vous habitez');
			$("#modal1 .modal-body a").attr("href","https://maps.google.com/maps?q="+$("#add").val()+"&markers="+$("#add").val());
			$("#modal1 .modal-body a img").attr("src","https://maps.googleapis.com/maps/api/staticmap?size=400x250&center="+$("#add").val()+"&markers="+$("#add").val());
			$("#modal1").modal('show');
		}
	}
		
	)
	
    $( "#ddn" ).datepicker({
		dateFormat: "dd/mm/yy",
		maxDate: 0
	});
	
})
