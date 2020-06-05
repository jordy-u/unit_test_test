/**
 * Get the FizzBuzz string for the given index.
 * @param {int} index The count number that needs to be translated to a FizzBuss string.
 * @return {string} The FizzBuzz string.
 */
function getFizzBuzzStringByIndex(index) {
	let fizzBuzzString = "";

	if (index % 3 === 0) fizzBuzzString += "Fizz";
	if (index % 5 === 0) fizzBuzzString += "Buzz";

	if (fizzBuzzString === "") fizzBuzzString = index.toString();

	return fizzBuzzString;
}
