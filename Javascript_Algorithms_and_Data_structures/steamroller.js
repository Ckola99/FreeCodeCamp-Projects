//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	const flattened = [];

	function flattenArray(arr) {
		arr.forEach((element) => {
			if (Array.isArray(element)) {
				flattenArray(element);
			} else {
				flattened.push(element);
			}
		});
	}

	flattenArray(arr);
	return flattened;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
