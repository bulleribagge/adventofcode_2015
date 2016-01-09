var input = "3113322113";
var curr = input;

for(var i = 0; i < 50; i++)
{
	//console.log(curr);
	curr = lookAndSay(curr);
	//console.log(curr);
}

console.log(curr.length);

function lookAndSay(str)
{
	var res = "";
	var last = str[0];
	var groups = [];
	var groupCount = 0;

	for(var i = 0; i < str.length; i++)
	{
		if(groups.length > 0)
		{
			if(str[i] == groups[groupCount][0])
			{
				groups[groupCount] += str[i];
			}else
			{
				groups[++groupCount] = str[i];
			}
		}else
		{
			groups[groupCount] = str[i];
		}
	}

	for(var g of groups)
	{
		res += g.length + g[0];
	}

	return res;
}