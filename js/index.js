$(".btn").click(function() {
	var value = $(".materialize-textarea").val();
	var contentString1 = '<article class="col s12 m8 l9" id="first"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s3"><img src="img/yuna.jpg" alt="" class="circle responsive-img"></div><div class="col s12 m8 l9"><div class="card-content">';
 	var contentString2 = '</div><br><div class="card-action"><a href="#">Answer</a> <a href="#">3 Hrs</a></div></div></div></div></article>';
	$(".tampung").append(contentString1 + value + contentString2);
});


// function saveTask() {
// 	const value = document.getElementsByClassName('btn waves-effect waves-light indigo').value;
// 	const contentString1 = '<article class="col s12 m8 l9" id="first"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s3"><img src="img/yuna.jpg" alt="" class="circle responsive-img"></div><div class="col s12 m8 l9"><div class="card-content">';
// 	const contentString2 = '</div><br><div class="card-action"><a href="#">Answer</a> <a href="#">3 Hrs</a></div></div></div></div></article>';
// 	document.getElementById('tampung').appendChild(contentString1 + value + contentString2)
// }