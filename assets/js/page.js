$(function(){
	getMsg();
});

function getMsg(){
	var slogan = [
	    "一期一会，为之尽兴，珍惜而待。",
          "信じるそれだけで，越えられないものはない。",
          "嗯哼哼，哒哒哒～ ♫",
          "想要成为她的一片海，用水般的柔软和细腻去轻抚和守护。",
          "这里的生活是玫瑰色的！"
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