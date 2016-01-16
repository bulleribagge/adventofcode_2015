"use strict"
var fs = require('fs');

var raceTime = 2503;
var reindeers = [];
var max = 0;

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var lines = data.split('\r\n');

	for(var l of lines)
	{
		if(l)
		{
			reindeers.push(new Reindeer(l));
		}
	}

	for(var deer of reindeers)
	{
		var distance = 0;
		var basenum = Math.floor(raceTime / (deer.flyTime + deer.restTime));
		var remaindeer = raceTime % (deer.flyTime + deer.restTime); //Yes, I just did that
		//console.log(deer.name + " basenum " + basenum + " remaindeer " + remaindeer);
		if(remaindeer >= deer.flyTime)
		{
			distance = (basenum + 1) * (deer.speed * deer.flyTime);
		}else
		{
			distance = (basenum * deer.speed) + (remaindeer * deer.speed);
		}

		console.log(deer.name + " " + distance);
	}
});

class Reindeer 
{
	constructor(str)
	{
		if(str)
		{
			this.speed = parseInt(str.match(/\d+/g)[0]);
			this.flyTime = parseInt(str.match(/\d+/g)[1]);
			this.restTime = parseInt(str.match(/\d+/g)[2]);
			this.name = str.match(/^\w+/g)[0];
		}
	}
}

module.exports = Reindeer;