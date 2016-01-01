var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
    var xSize = 1000;
    var ySize = 1000;
    var grid = createArray(xSize, ySize);
    var instructions = data.split('\r\n');

    for(var i of instructions)
    {
        performInstruction(grid, i);
    }

    var totBrightness = 0;
    for(var x = 0; x < xSize; x++)
    {
        for(var y = 0; y < ySize; y++)
        {
            totBrightness += grid[x][y];
        }
    }

    console.log(totBrightness);
});

function performInstruction(grid, instruction)
{
    var delta = 0;
    if(instruction.indexOf('toggle') != -1)
    {
        delta = 2;
    }else if(instruction.indexOf('turn on') != -1)
    {
        delta = 1;
    }else if(instruction.indexOf('turn off') != -1)
    {
        delta = -1;
    }

    var coords = instruction.match(/\d+/g);

    var startX = parseInt(coords[0]);
    var startY = parseInt(coords[1]);
    var stopX = parseInt(coords[2]);
    var stopY = parseInt(coords[3]);

    for(var x = startX; x <= stopX; x++)
    {
        for(var y = startY; y <= stopY; y++)
        {
            grid[x][y] += delta;
            if(grid[x][y] < 0)
            {
                grid[x][y] = 0;
            }
        }
    }
}

function createArray(x, y) 
{
    var arr = new Array(x)

    for(var i = 0; i < y; i++)
    {
    	arr[i] = new Array(y);
    }

    for(var j = 0; j < x; j++)
    {
    	for(var k = 0; k < y; k++)
    	{
    		arr[j][k] = 0;
    	}
    }

    return arr;
}