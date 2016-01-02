"use strict"
var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(error, data)
{
	var instructionsStr = data.split('\r\n');
	var instructions = [];

	for(var i of instructionsStr)
	{
		var inst = new instruction(i);
		//console.log(i + "\t out: " + inst.out + "\t op1:" + inst.op1);
		//console.log(JSON.stringify(inst));
		instructions.push(inst);
	}

	/*for(var i of instructions)
	{
		console.log(i.out + ": " + getValue(instructions, i));	
	}*/

	console.log(getValue(instructions, findInstruction(instructions, 'a')));
});

class instruction
{
	constructor(str)
	{
		var lhs = str.split('->')[0];
		var rhs = str.split('->')[1];
		this.string = str;
		this.out = rhs.trim();
		this.op = "NONE";
		this.op1 = null;
		this.op2 = null;
		this.value = null;

		if(lhs.indexOf('AND') != -1)
		{
			this.op = 'AND';
			this.op1 = lhs.split('AND')[0].trim();
			this.op2 = lhs.split('AND')[1].trim();
		}else if(lhs.indexOf('OR') != -1)
		{
			this.op = 'OR';
			this.op1 = lhs.split('OR')[0].trim();
			this.op2 = lhs.split('OR')[1].trim();
		}else if(lhs.indexOf('LSHIFT') != -1)
		{
			this.op = 'LSHIFT';
			this.op1 = lhs.split('LSHIFT')[0].trim();
			this.op2 = lhs.split('LSHIFT')[1].trim();
		}else if(lhs.indexOf('RSHIFT') != -1)
		{
			this.op = 'RSHIFT';
			this.op1 = lhs.split('RSHIFT')[0].trim();
			this.op2 = lhs.split('RSHIFT')[1].trim();
		}else if(lhs.indexOf('NOT') != -1)
		{
			this.op = 'NOT';
			this.op1 = lhs.split(' ')[1].trim();
		}else
		{
			this.op1 = lhs.trim();
		}
	}
}

function getValue(instructions, inst)
{
	if(inst.value !== null)
	{
		return inst.value;
	}
	if(inst.op == "NONE")
	{
		if(/^\d+$/.test(inst.op1))
		{
			inst.value = parseInt(inst.op1);
			console.log("value of: " + inst.out + ": " + inst.value);
			return parseInt(inst.op1);
		}

		return getValue(instructions, findInstruction(instructions, inst.op1));
	}else if(inst.op == "AND")
	{
		var op1 = /^\d+$/.test(inst.op1) ? parseInt(inst.op1) : getValue(instructions, findInstruction(instructions, inst.op1));
		var op2 = /^\d+$/.test(inst.op2) ? parseInt(inst.op2) : getValue(instructions, findInstruction(instructions, inst.op2));
		inst.value = op1 & op2;
		console.log("value of: " + inst.out + ": " + inst.value);
		return op1 & op2;
	}else if(inst.op == "OR")
	{
		var op1 = /^\d+$/.test(inst.op1) ? parseInt(inst.op1) : getValue(instructions, findInstruction(instructions, inst.op1));
		var op2 = /^\d+$/.test(inst.op2) ? parseInt(inst.op2) : getValue(instructions, findInstruction(instructions, inst.op2));
		inst.value = op1 | op2;
		console.log("value of: " + inst.out + ": " + inst.value);
		return op1 | op2;
	}else if(inst.op == "LSHIFT")
	{
		var op1 = /^\d+$/.test(inst.op1) ? parseInt(inst.op1) : getValue(instructions, findInstruction(instructions, inst.op1));
		var op2 = parseInt(inst.op2);//getValue(instructions, findInstruction(instructions, inst.op2));
		inst.value = op1 << op2;
		console.log("value of: " + inst.out + ": " + inst.value);
		return op1 << op2;
	}else if(inst.op == "RSHIFT")
	{
		var op1 = /^\d+$/.test(inst.op1) ? parseInt(inst.op1) : getValue(instructions, findInstruction(instructions, inst.op1));
		var op2 = parseInt(inst.op2);//getValue(instructions, findInstruction(instructions, inst.op2));
		inst.value = op1 >> op2;
		console.log("value of: " + inst.out + ": " + inst.value);
		return op1 >> op2;
	}else if(inst.op == "NOT")
	{
		var op1 = getValue(instructions, findInstruction(instructions, inst.op1));
		inst.value = ~op1 & 65535;
		console.log("value of: " + inst.out + ": " + inst.value);
		return ~op1 & 65535;
	}

}

function findInstruction(instructions, key)
{
	for(var i of instructions)
	{
		if(i.out == key)
		{
			return i;
		}
	}
}