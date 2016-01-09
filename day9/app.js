"use strict"
var fs = require('fs');

var distances;
var min = Infinity;

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var lines = data.split('\r\n');
	distances = [];

	for(var l of lines)
	{
		var d = new distance(l);
		distances.push(d);
	}

	var nodes = getNodes(distances);
	//console.log(JSON.stringify(nodes));
	
	forPermutation(nodes, nodes.length, 0, nodes.length);

	console.log(min);
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
		if(distance < min)
		{
			min = distance;
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

	return totalDistance;
}

function getDistanceBetweenNodes(node1, node2)
{
	for(var d of distances)
	{
		if(d.a == node1 && d.b == node2 ||
			d.b == node1 && d.a == node2)
		{
			//match!
			return d.distance;
		}
	}
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

function getNodes(distances)
{
	var nodes = [];
	for(var d of distances)
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

class distance
{
	constructor(str)
	{
		this.a = str.split(' to ')[0].trim();
		this.b = str.split(' to ')[1].split('=')[0].trim();
		this.distance = parseInt(str.split('=')[1].trim());
	}
}