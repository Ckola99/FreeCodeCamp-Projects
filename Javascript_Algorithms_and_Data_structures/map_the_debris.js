// Return a new array that transforms the elements' average altitude
// into their orbital periods (in seconds).The array will contain
// objects in the format {name: 'name', avgAlt: avgAlt}. The values
// should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;

	function getOrbitalPeriod(avgAlt) {
		return Math.round( 2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM),
		);
	}

	return arr.map((obj) => ({
		name: obj.name,
		orbitalPeriod: getOrbitalPeriod(obj.avgAlt)
	}));
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
