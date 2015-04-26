var classArray = ["Erik Johnson", "Aaron Sawyer", "Alicia Smith", "Casie Lynch", "Clare Jacky", "Cody Misura", "Jeanne Erickson Cooley", "Kaitlin Muth", "Kelly Johnson", "Luke Poppe", "Mary White", "Michael Liquori", "Michelle Funk", "Rom Stevens", "Steve Martin", "Terry Gunderson", "Tracy Fuller", "Vince Jones", "Brian Aamodt", "Chelsea Okey"];﻿
var familyArray = ["Annabelle", "Samantha", "Isaac", "Amanda", "Kodi", "Kelly", "Jacob"];



$(document).ready(function(){

	$("div").on("click", ".button", function(){
		var numSelected = $(this).attr("value");
		console.log(numSelected);

	});

	$("div").on("click", ".generate", function(){

		
		//use an Array to store 'numSelected' number of names
		//load headings for each team.  Team 1

		//display team list
		//then display in a list each of the numSelected' number of names per team


	});

});