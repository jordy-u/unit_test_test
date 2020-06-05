/* global checkEmpty checkContainsSpaces */
//Jasmine = Behavour Driven Design

describe("The name validator", function() {

	describe("Checks for empty string", function() {

		it("should return true when the string is empty", function () {
			// eslint-disable-global no-undef
			expect(checkEmpty("     ")).toBe(true);

		});

		it("should return false when the string is not emtpy", function () {

			expect(checkEmpty("abcd")).toBe(false);

		});

	});

	describe("Checks for spaces between the words", function () {

		it("should return true when the string has a space between the characters", function () {
			expect(checkContainsSpaces("João the Rock")).toBe(true);
		});

		it("should return false when the string does not contain spaces between the characters", function () {
			expect(checkContainsSpaces("João-the-Rock")).toBe(false);
		});
	});

});
