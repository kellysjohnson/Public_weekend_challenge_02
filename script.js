var classArray = ["Erik Johnson", "Aaron Sawyer", "Alicia Smith", "Casie Lynch", "Clare Jacky", "Cody Misura", "Jeanne Erickson Cooley", "Kaitlin Muth", "Kelly Johnson", "Luke Poppe", "Mary White", "Michael Liquori", "Michelle Funk", "Rom Stevens", "Steve Martin", "Terry Gunderson", "Tracy Fuller", "Vince Jones", "Brian Aamodt", "Chelsea Okey"];﻿
var familyArray = ["Annabelle", "Samantha", "Isaac", "Amanda", "Kodi", "Kelly", "Jacob"];
var numSelected;  	// Make numSelected a global variable, because I will want to use it outside the .button .on() "click".
var numOfTeams;     // Whole number = minimum number per team
var remainder;	  	// Number left over without reaching team minimum
var m;				// Index counter global so prototype function can use it
var clear = 1;

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

function Team (team) {
	this.name = name;

}

Team.prototype.Assemble = function () {
	this.setup = classArray.splice(((numSelected)*m), numSelected);
}

$(document).ready(function(){

	$("div").on("click", ".button", function(){
		numSelected = $(this).attr("value");
		console.log(numSelected);

	});

	$("div").on("click", ".generate", function(){
		shuffleArray(classArray);
		console.log(classArray);
		
		remainder = classArray.length % numSelected;
		console.log(remainder);
		numOfTeams = classArray.length / numSelected;
		numOfTeams = Math.floor(numOfTeams);
		console.log(numOfTeams);

		if (clear == 1){
			for (m=0; m<=(numOfTeams); m++){
				var teamID = "Team " + (m+1);
				console.log(teamID);

				var newTeam = new Team(teamID);
		//	console.log(newTeam);
				$(".results").append("<div class='names'>" + teamID + ": </div>");
				$(".names").append("<div>" + newTeam.setup + "</div>");
				$(".names").delay(m*500);
			} 
			clear++;
			console.log("Clear after for loop " + clear);

		} else {
			clear--;
			$(".results").children().remove();
			console.log("Clear is " + clear);
		}

		

		//use an Array to store 'numSelected' number of names
		//load headings for each team.  Team 1

		//display team list
		//then display in a list each of the numSelected' number of names per team


	});

});