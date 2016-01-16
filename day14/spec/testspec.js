var Reindeer = require('../app2');

describe("Parse test", function()
{
	it("with valid input", function()
	{
		var flerp = new Reindeer("Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.");
		expect(flerp.speed).toEqual(14);
		expect(flerp.flyTime).toEqual(10);
		expect(flerp.restTime).toEqual(127);
		expect(flerp.getDistance(1)).toEqual(14);
		expect(flerp.getDistance(137)).toEqual(140);
		expect(flerp.getDistance(138)).toEqual(154);
	});
});