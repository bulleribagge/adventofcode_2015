"use strict"
var fs = require('fs');

var relations;
var max = 0;

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var lines = data.split('\r\n');
	relations = [];

	for(var l of lines)
	{
		if(l)
		{
			var d = new Relationship(l);
			relations.push(d);
		}
	}

	var nodes = getNodes(relations);
	
	for(var n in nodes)
	{
		var d = new Relationship();
		d.a = 'Martin';
		d.b = n;
		d.distance = 0;
		relations.push(d);

		d = new Relationship();
		d.a = n;
		d.b = 'Martin';
		d.distance = 0;
		relations.push(d);
	}

	nodes.push('Martin');

	forPermutation(nodes, nodes.length, 0, nodes.length);

	console.log(max);
});

function forPermutation(arr, n, pos, depth)
{
	if(pos == depth)
	{
		var s = "";
		for(var i = 0; i < pos; i++)
		{
			s += arr[i] + " ";
		}
		var distance = getTotalDistanceForPermutation(arr);
		if(distance > max)
		{
			max = distance;
			console.log(s);
		}
		return;
	}

	for(var i = pos; i < n; i++)
	{
		var t = arr[pos];
		arr[pos] = arr[i];
		arr[i] = t;

		forPermutation(arr, n, pos + 1, depth);

		t = arr[pos];
		arr[pos] = arr[i];
		arr[i] = t;
	}
}

function getTotalDistanceForPermutation(arr)
{
	var totalDistance = 0;
	
	for(var i = 0; i < arr.length - 1; i++)
	{
		totalDistance += getDistanceBetweenNodes(arr[i], arr[i+1]);
	}

	return totalDistance + getDistanceBetweenNodes(arr[0], arr[arr.length - 1]);
}

function getDistanceBetweenNodes(node1, node2)
{
	var res = 0;
	for(var d of relations)
	{
		if(d.a == node1 && d.b == node2)
		{
			//match!
			res += d.distance;
		}

		if(d.b == node1 && d.a == node2)
		{
			res += d.distance;
		}
	}
	return res;
}

function fact(n)
{
	if(n == 1)
	{
		return 1;
	}else 
	{
		return fact(n - 1) * n;
	}
}

function getNodes(relations)
{
	var nodes = [];
	for(var d of relations)
	{
		if(nodes.indexOf(d.a) == -1)
		{
			nodes.push(d.a);
		}

		if(nodes.indexOf(d.b) == -1)
		{
			nodes.push(d.b);
		}
	}

	return nodes;
}

class Relationship
{
	constructor(str)
	{
		if(str)
		{
			this.a = str.match(/^\w+/g)[0];
			this.b = str.match(/\w+(?=\.)/g)[0];
			var abs = parseInt(str.match(/\d+(?=\shappiness)/));
			this.distance = /lose/.test(str) ? -1 * abs : abs;
		}else
		{
			this.a = '';
			this.b = '';
			this.distance = 0;
		}
	}
}

module.exports = Relationship;