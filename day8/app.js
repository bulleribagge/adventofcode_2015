var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var strings = data.split('\r\n');
	var totalNumEncodedCharacters = 0;
	var totalNumOriginalCharacters = 0;

	for(var s of strings)
	{
		var numOriginalCharacters = 0;
		var numEncodedCharacters = 0;

		numOriginalCharacters = s.length;
		var encodedString = '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
		numEncodedCharacters = encodedString.length;

		console.log(s);
		console.log(encodedString);
		
		totalNumEncodedCharacters += numEncodedCharacters;
		totalNumOriginalCharacters += numOriginalCharacters;

		console.log("String: " + s + "\r\nHas " + numOriginalCharacters + " original characters and " + numEncodedCharacters + " encoded characters\r\n");
	}

	console.log("Total number of original chars: " + totalNumOriginalCharacters + "\r\nTotal number of encoded chars: " + totalNumEncodedCharacters + "\r\n" + (totalNumEncodedCharacters - totalNumOriginalCharacters));
});