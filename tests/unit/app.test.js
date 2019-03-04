const findWord = require('../../helper/findWord');
const { expect } = require('../helpers')

describe('Unit - test', async () => {

    it('should verify a one wordMagic successfully ', async () => {
        const result = findWord('Basquete');
        expect(result).to.not.equal(false);
        expect(result).to.not.equal(undefined);
        expect(result).to.be.an('object');
    });
    it('should verify a one wordMagic error ', async () => {
        const result = findWord('Carnaval');
        expect(result).to.be.equal(false);
        expect(result).to.not.equal(undefined);
    });
});


