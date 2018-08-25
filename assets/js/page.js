$(function(){
	getMsg();
});

function getMsg(){
	var slogan = [
	    "一期一会，为之尽兴，珍惜而待。",
          "信じるそれだけで，越えられないものはない。",
          "yuziyuzi, yuzazi~ ♫"
	];
	var r = random(0,slogan.length-1);
	$("#slogan").html(slogan[r])
}
function random(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
}