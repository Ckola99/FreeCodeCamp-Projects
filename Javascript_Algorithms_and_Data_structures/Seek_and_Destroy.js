// You will be provided with an initial array
// (the first argument in the destroyer function),
// followed by one or more arguments. Remove all
// elements from the initial array that are
// of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
	let array = [...arguments];
	let firstArr = array[0];
	let destroyed = [];

	for (let i = 0; i < firstArr.length; i++) {
		let isElement = false;

		for (let j = 1; j < arguments.length; j++){
			if (firstArr[i] === arguments[j]) {
				isElement = true;
				break;
			}
		}

		if (isElement === false) {
			destroyed.push(firstArr[i]);
		}
	}
	return destroyed;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
