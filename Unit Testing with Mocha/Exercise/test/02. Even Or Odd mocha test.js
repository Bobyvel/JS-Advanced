let expect = require("chai").expect;
let isOddOrEven = require("../02. Even Or Odd").isOddOrEven;

describe("isOddOrEven(string)", function() {
    describe('Cases (invalid input)', function () {
        it('should return undefined with number', function () {
            expect(isOddOrEven(5)).to.be.equal(undefined);
        });
        it('should return undefined with obj', function () {
            expect(isOddOrEven({name: 'abcd'})).to.be.equal(undefined);
        });
    });
    describe('Nominal cases (valid input)', function () {
        it('should return even', function () {
            expect(isOddOrEven('abcd')).to.be.equal('even');
        });
        it('should return odd', function () {
            expect(isOddOrEven('abc')).to.be.equal('odd');
        });
    })

});