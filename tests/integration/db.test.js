require('../../.env');
const db = require('../../db');
const { expect } = require('../helpers')
BotGramModel = require('../../db/schema'),


describe('Integrations - DataBase', async () => {

  it('should verify a consult with successfully ', async () => {
    const result = await BotGramModel.find({});
    expect(result).to.not.equal(false);
    expect(result).to.not.equal(undefined);
    expect(result).to.be.an('array');
    
  });
  after(()=>{
    db.disconnect();
  });
});


