describe("The FizzBuzz validator", function () {

    describe("Check correct response for valid values", function () {

        describe("Check response for values not devideable by 3 and 5", function () {

            it("should return '1' if the index is 1", function () {
                expect(getFizzBuzzStringByIndex(1)).toBe("1");
            });
            it("should return '77' if the index is 77", function () {
                expect(getFizzBuzzStringByIndex(77)).toBe("77");
            });
        });

        describe("Check response for values devideable by 3 but not by 5", function () {

            it("should return 'Fizz' if the index is 3", function () {
                expect(getFizzBuzzStringByIndex(3)).toBe("Fizz");
            });

            it("should return 'Fizz' if the index is 99", function () {
                expect(getFizzBuzzStringByIndex(99)).toBe("Fizz");
            });
        });

        describe("Check response for values devideable by 5 but not by 5", function () {

            it("should return 'Buzz' if the index is 5", function () {
                expect(getFizzBuzzStringByIndex(5)).toBe("Buzz");
            });

            it("should return 'Buzz' if the index is 40", function () {
                expect(getFizzBuzzStringByIndex(40)).toBe("Buzz");
            });
        });

        describe("Check response for values devideable by both 3 and 5", function () {

            it("should return 'FizzBuzz' if the index is 15", function () {
                expect(getFizzBuzzStringByIndex(15)).toBe("FizzBuzz");
            });

            it("should return 'FizzBuzz' if the index is 90", function () {
                expect(getFizzBuzzStringByIndex(15)).toBe("FizzBuzz");
            });
        });

    });
});
