var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var fdata = data.split('\r\n');
	for(var l of fdata)
	{
		hasThreeVowels = threeVowels(l);
		if(hasThreeVowels)
		{
			console.log("str: " + l + " threeVowels: " + hasThreeVowels);
		}
	}
});

function threeVowels(str)
{
	numVowels = 0;
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

	if(numVowels >= 3)
	{
		return true;
	}else
	{
		return false;
	}
}