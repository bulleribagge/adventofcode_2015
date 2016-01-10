var fs = require('fs');

var sum = 0;

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var json = JSON.parse(data);

	r(json);
	console.log(sum);
});


function r(obj)
{
	for(var j in obj)
	{
		if(isNaN(j) && obj[j] == "red")
		{
			return;
		}
	}
	for(var k in obj)
	{
		if(typeof(obj[k]) == "object" && obj[k] !== null)
		{
			r(obj[k]);
		}else if(obj[k] == "red" && isNaN(k))
		{
			//if property name is a number, we are most likely in an array I know it's ugly, don't look at me like that
			return;
		}else
		{
			if(!isNaN(obj[k]))
			{
				sum += parseInt(obj[k]);
				console.log(obj[k]);
			}
		}
	}
}