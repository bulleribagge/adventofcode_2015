"use strict"
var fs = require('fs');

var raceTime = 2503;
var reindeers = [];

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

	for(var i = 1; i <= raceTime; i++)
	{
		var leaders = [];
		var max = 0;
		for(var deer of reindeers)
		{
			var d = deer.getDistance(i);
			//console.log(i + " \t " + deer.name + "\t" + d);
			if(d > max)
			{
				max = d;
				leaders = [deer];
			}else if(d == max)
			{
				leaders.push(deer);
			}
		}

		for(var l of leaders)
		{
			l.score++;
		}
	}

	for(var deer of reindeers)
	{
		console.log(deer.name + " " + deer.score);
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
			this.score = 0;
		}
	}
	getDistance(sec)
	{
		var basenum = Math.floor(sec / (this.flyTime + this.restTime));
		var remaindeer = sec % (this.flyTime + this.restTime); //Yes, I just did that
		
		if(remaindeer >= this.flyTime)
		{
			return (basenum + 1) * (this.speed * this.flyTime);
		}else
		{
			return (basenum * this.speed * this.flyTime) + (remaindeer * this.speed);
		}
	}
}

module.exports = Reindeer;