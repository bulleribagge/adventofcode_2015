var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var fdata = data.split('\r\n');
	var numNice = 0;

	for(var l of fdata)
	{
		hasThreeVowels = threeVowels(l);
		hasDoubleLetters = doubleLetters(l);
		hasNaughtyString = naughtyString(l);
		
		if(hasThreeVowels && hasDoubleLetters && !hasNaughtyString)
		{
			numNice++;
		}
	}

	console.log("numnice: " + numNice);
});

function threeVowels(str)
{
	var numVowels = 0;
	for(var c of str)
	{
		switch (c)
		{
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				numVowels++;
		}
	}

	return numVowels >= 3;
}

function doubleLetters(str)
{
	var lastLetter = str.substr(0, 1);
	for(var i = 1; i <= str.length - 1; i++)
	{
		if(lastLetter == str[i])
		{
			return true;
		}
		lastLetter = str[i];
	}

	return false;
}

function naughtyString(str)
{
	var lastLetter = str.substr(0, 1);
	for(var i = 1; i <= str.length - 1; i++)
	{
		switch(lastLetter + str[i])
		{
			case 'ab':
			case 'cd':
			case 'pq':
			case 'xy':
				return true;
		}

		lastLetter = str[i];
	}

	return false;
}