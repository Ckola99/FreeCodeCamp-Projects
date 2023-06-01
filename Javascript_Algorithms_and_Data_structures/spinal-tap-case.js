// Spinal Tap Case
// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	return str.split(/\W|_|(?=[^a-z])/g)
		.join("-")
		.toLowerCase()
}

console.log(spinalCase('The_Andy_Griffith_Show'));
