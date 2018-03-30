$("ul").on('click','li', function(event) {
	$(this).toggleClass('completed');
});

 $("ul").on('click','.remove',(function(event) {
 	 $(this).parent().fadeOut('500', function() {
 	 	$(this).remove();
 	 });
      event.stopPropagation();
   
 }));
 $("input[type='text']").keypress(function(event) {
 	if(event.which===13)
 	{   var todoText=$(this).val();
 		$(this).val("");
 		console.log(todoText);
        $('ul').append("<li><span class='remove'><i class='fa fa-trash'></i></span> "+todoText  +"</li>");
 	}

 });
 $('.fa-plus').on('click', function(event) {
 	$("input[type='text']").fadeToggle(200, function() {
 	});
 });