"use strict"
var fs = require('fs');

var dims = [];
var sqft = 0;
var ribbonLength = 0;

fs.readFile('input.txt', 'utf8', function(error, data){
	dims = data.split('\r\n');
	console.log(dims.length);
	for(var p of dims)
	{
		if(p != "")
		{
			var prez = new present(p);
			sqft += prez.getTotalSqft();
			ribbonLength += prez.getRibbonLength();
		}
	}
	console.log("Wrapping paper: " + sqft);
	console.log("Ribbon Length: " + ribbonLength);
});

class present
{
	constructor(str)
	{
		this.dimensions = str.split('x');
		this.l = this.dimensions[0];
		this.w = this.dimensions[1];
		this.h = this.dimensions[2];
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
	getRibbonLength()
	{
		this.dimensions.sort(function(a,b){return parseInt(a) - parseInt(b)});
		var partA = this.dimensions[0] * 2 + this.dimensions[1] * 2;
		var partB = this.l * this.h * this.w;
		return partA + partB;
	}
}