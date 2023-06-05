// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function ConvertToAscii(digit) {
	let num = 0;

	for (let i = digit.length - 1; i >= 0; i--) {
		if (digit[i] === "1") {
			const power = digit.length - 1 - i;
			num += 2 ** power;
		}
	}
	return String.fromCharCode(num);
}

function binaryAgent(str) {
	const binaryArray = str.split(" ");
	let sentence = "";

	for (let i = 0; i < binaryArray.length; i++) {
		const char = ConvertToAscii(binaryArray[i]);
		sentence += char;
	}

	return sentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
