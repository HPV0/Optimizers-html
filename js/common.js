$( document ).ready(function() {
    $( ".private-chat-sidebar-content-con .sidebar-content-header .btn" ).click(function() {
	   	$(".private-message-search-bar").toggleClass("active");
	});

	$( ".private-groupes-sidebar-content-con .sidebar-content-header .btn" ).click(function() {
	   	$(".private-groupes-search-bar").toggleClass("active");
	});
});