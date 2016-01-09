var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var numbers = data.match(/-*\d+/g);
	console.log(addNumbers(numbers));
});

function addNumbers(arr)
{
	var res = 0;
	for(var n of arr)
	{
		res += parseInt(n);
	}
	return res;
}