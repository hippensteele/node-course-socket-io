var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
    it('should generate correct message object', () => {
        const from = 'test@test.com';
        const text = 'Hello';
        var message = generateMessage(from, text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generate location message', () => {
    it('should generate correct location object', () => {
        const from = 'test@test.com';
        const latitude = 123456.123456;
        const longitude = -123456.123456;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});