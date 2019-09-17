<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Movies App</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/glyphicons.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="stylesheet" type="text/css" href="css/cards.css">
	<link rel="stylesheet" type="text/css" href="css/comments.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script type="text/javascript" src="js/database.js"></script>
	<script type="text/javascript" src="js/menu.js"></script>
</head>
<body>
	<?php require_once ("components/header.html"); ?>
	<div id="p-container" class="container-fluid col-md-12">
		<div id="comments" class="align-top container d-inline-block col-sm-6 col-md-5 col-lg-4">
			<?php require_once ("components/sidebar.html"); ?>
			<div id="add-comments">
				<input type="text" placeholder="Write a comment..." name="comment" id="input-comment"><button id="btn-send-comment" class="btn"><span class="glyphicon glyphicon-send	"></span></button>
			</div>
		</div><div id="content-div" class="align-top container d-inline-block content-page col-sm-6 col-md-7 col-lg-8">
			<?php require_once ("components/movies.html"); ?>
		</div>
		<div class="clear-both"></div>
	</div>

	<div id="alert-success" class="alert alert-success fade position-fixed" role="alert">
	  <p class="d-inline-block">Movie added to favorites successfully!!</p>
	</div>
	<div id="alert-danger" class="alert alert-danger fade position-fixed" role="alert">
	  <p class="d-inline-block">Movie removed from favorites!!</p>
	</div>

	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">We're so sorry!</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	       	Streaming is disabled temporary, but it'll be available again very soon!
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Bad Service!!</button>
	        <button type="button" data-dismiss="modal" class="btn btn-primary">I understand</button>
	      </div>
	    </div>
	  </div>
	</div>

</body>
</html>



