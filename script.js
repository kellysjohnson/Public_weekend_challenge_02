var classArray = ["Erik Johnson", "Aaron Sawyer", "Alicia Smith", "Casie Lynch", "Clare Jacky", "Cody Misura", "Jeanne Erickson Cooley", "Kaitlin Muth", "Kelly Johnson", "Luke Poppe", "Mary White", "Michael Liquori", "Michelle Funk", "Rom Stevens", "Steve Martin", "Terry Gunderson", "Tracy Fuller", "Vince Jones", "Brian Aamodt", "Chelsea Okey"];﻿
var familyArray = ["Annabelle", "Samantha", "Isaac", "Amanda", "Kodi", "Kelly", "Jacob"];
var numSelected;  	// Make numSelected a global variable, because I will want to use it outside the .button .on() "click".
var numOfTeams;     // Whole number = minimum number per team
var remainder;	  	// Number left over without reaching team minimum
var m;				// Index counter global so prototype function can use it
var clear = 1;
var teamID;

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

function Team (team, array, numSelected) {
	this.name = team;
	this.teamArray = classArray;
}

Team.prototype.Assemble = function () {
	this.teamArray = classArray.slice(0, numSelected);
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

		var hello = classArray.slice(0, numSelected);
		console.log("This is a splice result  " + hello);
		console.log("Remainder is " + remainder);

		if(remainder != 0) {
			var newNum = numSelected++;
			hello = classArray.slice(0, newNum);
			remainder = remainder--;
			newNum = newNum -1;
		} 

		console.log("This is new remainder " + remainder);
		console.log("This is new hello " + hello);

		if (clear == 1){

//**So sad, abandoing elegant solution for BFI
			for (m=0; m<= numOfTeams; m++){
				
				teamID = "Team " + (m+1);
				console.log(teamID);

				var newTeam = new Team(teamID, classArray, numSelected);
				console.log(newTeam);


				$(".results").append("<div class='names'> Team " + m + ": </div>");
				$(".names").append("<div>" + newTeam.teamArray + "</div>");
				$(".names").delay(5000);

				console.log(classArray);
			} 

//**Start below BFI
   //As an interesting side bar: BFI does not work.  The console.log displays correct output.  However, the DOM counts down from 10 members per team to 2.  
   //what ^^.  I can't find anything to say why that makes sense.

		// if (numSelected == 2) {
		// 		team1 = classArray.splice(0, numSelected);
		// 		team2 = classArray.splice(0, numSelected);
		// 		team3 = classArray.splice(0, numSelected);
		// 		team4 = classArray.splice(0, numSelected);
		// 		team5 = classArray.splice(0, numSelected);
		// 		team6 = classArray.splice(0, numSelected);
		// 		team7 = classArray.splice(0, numSelected);
		// 		team8 = classArray.splice(0, numSelected);
		// 		team9 = classArray.splice(0, numSelected);
		// 		team10 = classArray.splice(0, numSelected);

		// 		console.log(team1);
		// 		console.log(team2);
		// 		console.log(team3);
		// 		console.log(team4);
		// 		console.log(team5);
		// 		console.log(team6);
		// 		console.log(team7);
		// 		console.log(team8);
		// 		console.log(team9);
		// 		console.log(team10);


		// 		$(".results").append("<div class='names'> Team 1: </div>");
		// 	 	$(".results").append("<div class='names'> Team 2: </div>");
		// 	 	$(".results").append("<div class='names'> Team 3: </div>");
		// 	 	$(".results").append("<div class='names'> Team 4: </div>");


		// 	 	$(".names").append("<div class='team'>" + team1 + "</div>");
		// 	 	$(".names").append("<div class='team'>" + team2 + "</div>");
		// 	 	$(".names").append("<div class='team'>" + team3 + "</div>");
		// 	 	$(".names").append("<div class='team'>" + team4 + "</div>");			 	
				

		// 	 	// $(".results").append("<div class='names'> Team 5: </div>");
		// 	 	// $(".names").append("<div>" + team5[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team5[1] + "</div>");

		// 	 	// $(".results").append("<div class='names'> Team 6: </div>");
		// 	 	// $(".names").append("<div>" + team6[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team6[1] + "</div>");

		// 	 	// $(".results").append("<div class='names'> Team 7: </div>");
		// 	 	// $(".names").append("<div>" + team7[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team7[1] + "</div>");

		// 	 	// $(".results").append("<div class='names'> Team 8: </div>");
		// 	 	// $(".names").append("<div>" + team8[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team8[1] + "</div>");

		// 	 	// $(".results").append("<div class='names'> Team 9: </div>");
		// 	 	// $(".names").append("<div>" + team9[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team9[1] + "</div>");			 				 	
				
		// 	 	// $(".results").append("<div class='names'> Team 10: </div>");
		// 	 	// $(".names").append("<div>" + team10[0] + "</div>");
		// 	 	// $(".names").append("<div>" + team10[1] + "</div>");
		// 	}

		// 	// case 3:
		// 	// 	this.strength -= 2;
		// 	// 	this.mentalStrength -= 2;
		// 	// 	this.evasion += 10;
		// 	// 	break;
		// 	// case 4:
		// 	// 	this.strength -= 2;
		// 	// 	this.mentalStrength += 10;
		// 	// 	this.evasion += 5;
		// 	// 	break;
		// 	// case "TELEPATHY":
		// 	// 	this.strength -= 2;
		// 	// 	this.mentalStrength += 15;
		// 	// 	this.evasion -= 2;
		// 	// 	break;
		// 	else { console.log("FAIL!");}

			clear++;
//			console.log("Clear after for loop " + clear);

		} else {
			clear--;
			$(".results").children().remove();
//			console.log("Clear is " + clear);
		}

	});

});