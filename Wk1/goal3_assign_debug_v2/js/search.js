/**
 Daniel Koval
 1/22/15
 DEBUG Search V3
 */
// Create privatized scope using a self-executing function
(function(){
	//Set up variables for search engine
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	//Check to make sure the user input is valid
	// Validates search query
	var validqte = function(query){		//Corrected error - double = to single =.

		console.log("Right before Trim whitespace While Loop");
		//Check to make sure the user input is not empty
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){		//Corrected error - single = in code; created ===
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === "") {
			query = query.substring(0, query.length - 1);
		};		//Corrected error - added } to close function
		//Check to make sure there are a minimum number of characters in the input field - alert if not
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");	//Corrected error - closed string using quotes.
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		//Execute the search
		search(query);
	};
	//Find and reveal matches
	// Finds search matches
	var search = function(query){		//Corrected error - added {
		//Separate the search
		// split the user's search query string into an array
		var queryArray = query.split(" ");	//Corrected error - changed .join to .split
		//Store the results of the search
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);		//Corrected error - camel case on toLowerCase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
				var qitem = queryArray[ii].toLowerCase();	//Corrected error - camel case on toLowerCase

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if (compare !== -1) {
					results.push(db[i]);
				};

			};		//Corrected error - added } to close function
		};		//Corrected error - added } to close function
		//Sort the results
		results.sort();

		console.log("Am I getting to line 74?");

		//Display if any matches were found - if so, display them
		// Check that matches were found, and run output functions
		if(results.length === 0){		//Corrected error - changed single = to triple =
			noMatch();
		}else{
			showMatches(results);
		};
	};
	//Function to display if no matches are found
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	//Function to show matches that were found.
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;

		console.log("What is the value of results.length? " + results.length);

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);	//Corrected error to eliminate camel case in .substring
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
		var query = searchInput.value;
		validqte(query);

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};		//Corrected error - added } to close function

})();