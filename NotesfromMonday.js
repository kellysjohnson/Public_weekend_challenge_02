NOTE: .val() is WHAT IS ON THE DOM.; 
	  .data() is what is equal to the value. You can change "data" and don't have to worry' about what it says.

	  Use "TODO:" when you are making a list.  Then take them off when done.	  
	  We want to do one write for each name in the array.  The name from the array will be put into a team, then next team, etc
	  Resetting the "count", in the for loop when count is greater than group size, so that the next name will be put in the first container.
	  Side note: From the dev group, the advice is do what the client requires, no more, because they are paying for your time.
	             And basically, ever change requires 4 hours of time.
	  *Append them - and hide immediately - that is so that I can do something later.
         -Protip: We can't fade' in something that is not on the DOM.
      Chaining: el.hide().delay(i*500).slideDown();
       (Hide; Wait 5 seconds, then slideDown first name.  10 seconds, slide down 2nd name. 15 seconds, slideDown 3rd name.)
      -Protip: Defining size of ".teamContainer" will help for styling; or other way to do styling.

      There is a .text(), way to GET and to SEND data.