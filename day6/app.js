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

    var numLit = 0;
    for(var x = 0; x < xSize; x++)
    {
        for(var y = 0; y < ySize; y++)
        {
            if(grid[x][y] == true)
            {
                numLit++;
            }
        }
    }

    console.log(numLit);
});

function performInstruction(grid, instruction)
{
    var action = "";
    if(instruction.indexOf('toggle') != -1)
    {
        action = 'toggle';
    }else if(instruction.indexOf('turn on') != -1)
    {
        action = 'turn on';
    }else if(instruction.indexOf('turn off') != -1)
    {
        action = 'turn off';
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
            switch(action)
            {
                case 'toggle':
                    grid[x][y] = !grid[x][y];
                    break;
                case 'turn on':
                    grid[x][y] = true;
                    break;
                case 'turn off':
                    grid[x][y] = false;
                    break;
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

    for(var j = 0; j < x - 1; j++)
    {
    	for(var k = 0; k < y; k++)
    	{
    		arr[j][k] = false;
    	}
    }

    return arr;
}