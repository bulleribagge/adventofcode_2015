var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var x = 500;
	var y = 500;
	var housesWithMoreThanOnePresent = 0;
	var houses = createArray(x*2, y*2);
	
	houses[x][y] = 1;
	for(var c of data)
	{
		if(c == '<')
		{
			x--;
		}else if(c == '>')
		{
			x++;
		}else if(c == '^')
		{
			y++;
		}else if(c == 'v')
		{
			y--;
		}
		houses[x][y]++;
	}

	for(var i = 0; i < houses.length; i++)
	{
		for(var j = 0; j < houses[0].length; j++)
		{
			if(houses[i][j] > 0)
			{
				housesWithMoreThanOnePresent++;
			}
		}
	}
	console.log(housesWithMoreThanOnePresent);
});

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
    		arr[j][k] = 0;
    	}
    }

    return arr;
}