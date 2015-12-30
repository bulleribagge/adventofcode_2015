var md5 = require('md5');

var key = 'bgvyzdsv';

var found = false;

var counter = 1;
while(!found)
{
	var hash = md5(key + counter);
	if(hash.substr(0,6) == "000000")
	{
		found = true;
		break;
	}

	counter++;
}

console.log(counter);