function sumAll(arr) {
	let sum = 0;
	let first = arr[0]
	let last = arr[arr.length - 1]

	if (first < last) {
		for (let i = first; i <= last; i++) {
			sum += i;
		}
	}
	else if (first > last) {
		for (let i = first; i >= last; i--) {
			sum += i;
		}
	}

	return sum;
}

console.log(sumAll([10, 5]));
