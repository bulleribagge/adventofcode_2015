var Relationship = require('../app');

describe("Parse test", function(){
	it("with positive distance", function(){
		var flerp = new Relationship("Alice would gain 54 happiness units by sitting next to Bob.");
		expect(flerp.a).toEqual('Alice');
		expect(flerp.b).toEqual('Bob');
		expect(flerp.distance).toEqual(54);
	});

	it("with negative distance", function(){
		var flerp = new Relationship("Carol would lose 62 happiness units by sitting next to Alice.");
		expect(flerp.a).toEqual('Carol');
		expect(flerp.b).toEqual('Alice');
		expect(flerp.distance).toEqual(-62);
	});

	it("with no parameter", function(){
		var flerp = new Relationship();
		expect(flerp.a).toEqual('');
		expect(flerp.b).toEqual('');
		expect(flerp.distance).toEqual(0);
	});
});