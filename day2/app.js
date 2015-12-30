"use strict"
var fs = require('fs');

var dims = [];
var sqft = 0;

fs.readFile('input.txt', 'utf8', function(error, data){
	dims = data.split('\r\n');
	console.log(dims.length);
	for(var p of dims)
	{
		if(p != "")
		{
			var prez = new present(p);
			sqft += prez.getTotalSqft();
			console.log(prez);
			console.log("surfaceArea: " + prez.getSurfaceArea() + " slack: " + prez.getSlack());
		}
	}
	console.log(sqft);
});

class present
{
	constructor(str)
	{
		this.l = str.split('x')[0];
		this.w = str.split('x')[1];
		this.h = str.split('x')[2];
	}
	getSurfaceArea()
	{
		return 2 * this.l * this.w + 2 * this.w * this.h + 2 * this.h * this.l;
	}
	getSlack()
	{
		return Math.min(this.l * this.w, this.l * this.h, this.w * this.h);
	}
	getTotalSqft()
	{
		return this.getSurfaceArea() + this.getSlack();
	}
}