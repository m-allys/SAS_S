'use strict';

const wagenQuery = {};

wagenQuery.first = $(function(){
	
	var mesImage = [];
	var img = $(html).css("src", "LogoMaker/20200630_151714.png");
	mesImage[1] = $(this).attr("src", "LogoMaker/20200630_151714.png");
	mesImage[2] = $(this).attr("src", "LogoMaker/20200630_151745.png");
	mesImage[2] = $(this).attr("src", "LogoMaker/20200630_151820.png");

	var timeG = [];
	timeG[0] = new Date();
	timeG[1] = timeG[0].getSeconds();
	
	var pInfo = $('#pInfo');

	alert("Depuis wagenQuery.done "+timeG[1]);
	
	$('#img1').onmouseOver(function(){
		alert("jjjj");
		//$(this).attr("src", "LogoMaker/20200630_151820.png");
	});
   
});

module.exports = wagenQuery.first;