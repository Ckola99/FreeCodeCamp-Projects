// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant
// 	or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
	let regex = /(?=[^aeiou])/
	if (str[0].match(/[aeiou]/i)){
		return str.concat("way")
	} else {
		let arr = str.split(/(?=[aeiou])/);
		let consonant = arr.shift();
		let str1 = arr.join("");
		return str1.concat(consonant, "ay")
	}
}

console.log(translatePigLatin("california"));
