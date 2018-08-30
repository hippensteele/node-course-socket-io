var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
    it('should generate correct message object', () => {
        const from = 'test@test.com';
        const text = 'Hello';
        var message = generateMessage(from, text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});