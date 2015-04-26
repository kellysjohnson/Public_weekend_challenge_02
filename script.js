var classArray = ["Erik Johnson", "Aaron Sawyer", "Alicia Smith", "Casie Lynch", "Clare Jacky", "Cody Misura", "Jeanne Erickson Cooley", "Kaitlin Muth", "Kelly Johnson", "Luke Poppe", "Mary White", "Michael Liquori", "Michelle Funk", "Rom Stevens", "Steve Martin", "Terry Gunderson", "Tracy Fuller", "Vince Jones", "Brian Aamodt", "Chelsea Okey"];﻿
var familyArray = ["Annabelle", "Samantha", "Isaac", "Amanda", "Kodi", "Kelly", "Jacob"];

/*
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 * Thanks stackOverflow! http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready(function(){

	$("div").on("click", ".button", function(){
		var numSelected = $(this).attr("value");
		console.log(numSelected);

	});

	$("div").on("click", ".generate", function(){
		shuffleArray(classArray);
		console.log(classArray);
		//use an Array to store 'numSelected' number of names
		//load headings for each team.  Team 1

		//display team list
		//then display in a list each of the numSelected' number of names per team


	});

});