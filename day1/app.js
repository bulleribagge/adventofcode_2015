var fs = require('fs');

var fdata = "";
var ups = 0;
var downs = 0;
fs.readFile('input.txt', 'utf8', function(error, data){
	fdata = data;
	ups = fdata.match(/\(/g).length;
	downs = fdata.match(/\)/g).length;
	console.log("floor: " + parseInt(ups - downs));
});
