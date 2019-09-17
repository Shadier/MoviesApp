var timeoutAlert;
$(document).ready(function() {
	console.log("mono");
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



	$("#btn-close-comments").click(function(event){
		$("#content-div").css("cssText", "display: inline-block !important;");
		$("#comments").css("cssText", "display: none !important;");
	});
	$("body").on("click", ".card a.btn.option-r", function(event){
		$("#comments").css("cssText", "display: inline-block !important;");
		$("#content-div").css("cssText", "display: none !important;");
	});


	$("body").on("click", ".card a.btn.option-m", function(event){
		event.preventDefault();
		closeAlert();
		if($(this).hasClass("isFav")){
			clearTimeout(timeoutAlert);
			$('#alert-danger').addClass('show');
			db.removeFavorites($(this).siblings("h5").text());
			timeoutAlert = setTimeout("closeAlert()", 2000);
		}
		else{
			clearTimeout(timeoutAlert);
			$('#alert-success').addClass('show');
			db.pushFavorites($(this).siblings("h5").text());
			timeoutAlert = setTimeout("closeAlert()", 2000);
		}
		if ($(this).parent().parent().hasClass("sff")) {
			$(this).parent().parent().remove();
		}
		$(this).toggleClass("isFav");
	});

	$("#comments").on("click", "button#btn-send-comment", function(event){
		event.preventDefault();
		if($(this).siblings("input").val() != ""){
			$(".scroll").append(`
				<div class="media mine">
				  <img src="./images/profiles/2.jpg" class="mr-2" alt="profile-image" width="40">
				  <div class="media-body">
				    <h5 class="mt-0">Sebastián Sosa</h5>
				    ${$(this).siblings("input").val()}
				  </div>
				</div> 
			`);
		}
		$(this).siblings("input").val("");
		$(this).siblings("input").focus();
		moveScroll();
	});

	setTimeout(moveScroll(), 100);
	setTimeout(sizeOfElements(), 100);
});

function moveScroll() {
	$("#comments .scroll").scrollTop($("#comments .scroll").prop("scrollHeight"));
}

function closeAlert() {
	$('.alert').removeClass('show');
}

function sizeOfElements() {
	var height = $(window).height() - $(".navbar").height();
	if (height < 350) {
		height = 350;
	}
	var height2 = height - $("#carouselExampleIndicators").height() - 37;
	$("#p-container").css('cssText', 'min-height: '+height+'px;'+'height: '+height+'px;'+'max-height: '+height+'px;');
	$("#content-div").css('cssText', 'min-height: '+height+'px;'+'height: '+height+'px;'+'max-height: '+height+'px;');
	$(".scroll").css('cssText', 'min-height: '+height2+'px;'+'height: '+height2+'px;'+'max-height: '+height2+'px;');
}

$( window ).resize(function() {
	setTimeout(sizeOfElements(), 100);
});