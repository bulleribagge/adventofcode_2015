var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var strings = data.split('\r\n');
	var totalNumMemoryCharacters = 0;
	var totalNumCodeCharacters = 0;

	for(var s of strings)
	{
		var numMemoryCharacters = 0;
		var numCodeCharacters = 0;
		/*var hexMatches = [];
		var quoteMatches = [];
		var backslashMatches = [];
		hexMatches = s.match(/\\x[0-9a-f]{2}/g);
		quoteMatches = s.match(/\\"/g);
		backslashMatches = s.match(/\\\\/g);
		
		numCodeCharacters = s.length;
		numMemoryCharacters = s.replace(/^"/g, '').replace(/"$/g, '').length - (hexMatches ? hexMatches.length * 3 : 0) - (quoteMatches ? quoteMatches.length : 0) - (backslashMatches ? backslashMatches.length : 0);*/

		numCodeCharacters = s.length;
		numMemoryCharacters = s.replace(/^"/g, '').replace(/"$/g, '').replace(/\\x[0-9a-f]{2}/g, 'x').replace(/\\"/g,'"').replace(/\\\\/g, '\\').length;
		//console.log(s.replace(/^"/g, '').replace(/"$/, '') + ", " + s.replace(/^"/g, '').replace(/"$/, '').length);
		console.log(s);
		console.log(s.replace(/^"/g, '').replace(/"$/g, '').replace(/\\x[0-9a-f]{2}/g, 'x').replace(/\\"/g,'"').replace(/\\\\/g, '\\'));
		
		totalNumCodeCharacters += numCodeCharacters;
		totalNumMemoryCharacters += numMemoryCharacters;

		console.log("String: " + s + "\r\nHas " + numCodeCharacters + " code characters and " + numMemoryCharacters + " memory characters");
	}

	console.log("Total number of code chars: " + totalNumCodeCharacters + "\r\nTotal number of memory chars: " + totalNumMemoryCharacters + "\r\n" + (totalNumCodeCharacters - totalNumMemoryCharacters));
});