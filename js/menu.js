

$("body").on("click", "a.btn-menu", function(event){
	event.preventDefault();
	$("a.btn-menu").removeClass("active");
	$(this).parent().siblings("a").addClass("active");
	$.ajax({
	    url: "./components/" + $(this).attr("href") + ".html",
	    type: "get",
	    dataType: "html",
	    success: function(data) {
	      $('.content-page').empty();
	      $('.content-page').append(data);
	    }
	});
	$(".nav-item").removeClass("active");
	$(this).addClass("active");
});
$("body").on("click", "li.btn-menu", function(event){
	event.preventDefault();
	$.ajax({
	    url: "./components/" + $(this).children("a").attr("href") + ".html",
	    type: "get",
	    dataType: "html",
	    success: function(data) {
	      $('.content-page').empty();
	      $('.content-page').append(data);
	    }
	});
	$(".dropdown-toggle").removeClass("active");
	$(".nav-item").removeClass("active");
	$(this).addClass("active");
});

$(".btn").trigger("blur");






$("body").on("click", ".card a.btn.option-m", function(event){
	event.preventDefault();
	if($(this).hasClass("isFav"))
		db.removeFavorites($(this).siblings("h5").text());
	else
		db.pushFavorites($(this).siblings("h5").text());
	$(this).toggleClass("isFav");
	$('.alert').alert('close')
});


