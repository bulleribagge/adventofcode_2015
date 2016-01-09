var password = "cqjxjnds";
var curr = password;
var legit = false;

//console.log(hasStep('cde'));

while(!legit)
{
	curr = nextPassword(curr);
	legit = isLegit(curr);
}

console.log(curr);

function isLegit(str)
{
	return hasLetterPairs(str) && hasStep(str) && !hasIllegalChars(str);
}

function hasLetterPairs(str)
{
	var matches = str.match(/(\w)\1/g);
	return matches == null ? false : matches.length >= 2;
}

function hasIllegalChars(str)
{
	if(str.indexOf('i') != -1)
	{
		return true;
	}

	if(str.indexOf('o') != -1)
	{
		return true;
	}

	if(str.indexOf('l') != -1)
	{
		return true;
	}

	return false;
}

function hasStep(str)
{
	for(var i = 0; i < str.length - 2; i++)
	{
		var initial = str.charCodeAt(i);
		if(str[i + 1].charCodeAt(0) == initial + 1
			&& str[i + 2].charCodeAt(0) == initial + 2)
		{
			return true;
		}
	}

	return false;
}

function nextPassword(str)
{
	var ch = str[str.length - 1];
	
	if(ch.charCodeAt(0) < 122)
	{
		return str.substr(0, str.length - 1) + String.fromCharCode(ch.charCodeAt(0) + 1);
	}else
	{
		return nextPassword(str.substr(0, str.length - 1)) + 'a';
	}
}