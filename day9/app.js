"use strict"
var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var lines = data.split('\r\n');
	var distances = [];

	for(var l of lines)
	{
		var d = new distance(l);
		distances.push(d);
		console.log(l);
		console.log(JSON.stringify(d));
	}

	
});

class distance
{
	constructor(str)
	{
		this.a = str.split(' to ')[0].trim();
		this.b = str.split(' to ')[1].split('=')[0].trim();
		this.distance = parseInt(str.split('=')[1].trim());
	}
}