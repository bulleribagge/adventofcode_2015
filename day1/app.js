var fs = require('fs');

var fdata = "";
var ups = 0;
var downs = 0;
fs.readFile('input.txt', 'utf8', function(error, data){
	fdata = data;
	ups = fdata.match(/\(/g).length;
	downs = fdata.match(/\)/g).length;
	var floor = 0;
	var position = 1;
	console.log(fdata.length);
	for (var c of fdata) 
	{
		floor += c == "(" ? 1 : -1;
		//console.log(floor);
		if(floor == -1)
		{
			console.log("basement reached on position: " + position);
			break;
		}
		position++;
	};
	console.log("floor: " + parseInt(ups - downs));
});
