// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name
// and value pairs (second argument). Each name and value pair of the source object has to be present in
// the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
// then you must return the third object from the array (the first argument), because it contains the name and its value,
// that was passed on as the second argument.

function whatIsInAName(collection, source) {
	let name = [];

	collection.forEach((obj) => {
		let found = true;

		for (let key in source) {
			if (obj[key] !== source[key]) {
				found = false;
				break;
			}
		}

		if (found) {
			name.push(obj);
		}
	});
	return name;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// function whatIsInAName(collection, source) {
// 	return collection.filter(obj => {
// 		return Object.keys(source).every(key => {
// 			return obj[key] === source[key];
// 		});
// 	});
// }

// In the line return Object.keys(source).every(key => {, let's break it down:
// Object.keys(source) retrieves an array of keys from the source object. This method returns an array containing all enumerable property names (keys) of the object.
// .every() is an array method that tests whether all elements in the array pass a provided condition. It takes a callback function as an argument and applies it to each element of the array.
// key => { ... } is an arrow function that represents the callback function passed to .every(). It takes a single parameter key that represents each key in the array of keys from source.
// So, the line return Object.keys(source).every(key => { combines steps 1 and 2. It retrieves the array of keys from the source object and then applies the callback function to each key using .every().
// Inside the callback function, you can perform any desired logic to check if the key satisfies a condition. In the context of whatIsInAName, it checks if the current obj from the collection has matching key-value pairs with the source object.
// If all the keys pass the condition (i.e., the callback function returns true for every key), then .every() returns true, indicating that all key-value pairs in source match the corresponding pairs in the current obj.
