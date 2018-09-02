const expect = require('expect');

var {isRealString} = require('./validation');

describe('validation isRealString', () => {
    it('should reject non-string values', () => {
        var result = isRealString(null);
        expect(result).toBe(false);
        var result = isRealString(123);
        expect(result).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var result = isRealString('  ');
        expect(result).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        var result = isRealString(' abc ');
        expect(result).toBe(true);
    });
});