let chai = require('chai'),
  path = require('path');
  
  chai.should();
  var expect = chai.expect;
  
let Randomizer = require(path.join(__dirname, '../src', 'PlayerTurnRandomizer.js'));

describe('player turn randomizer', () => {
    let randomizer;
    const player1 = { name: 'Ann' };
    const player2 = { name: 'Kate' };
    
    beforeEach(() => {
        randomizer = new Randomizer(player1, player2);
    });
    
    it('has 2 exact players', () => {
       expect(randomizer.randomizeTurnOrder()).to.be.an('array').that.includes(player1, player2);
    });
    
    it('has only 2 players', () => {
       randomizer.randomizeTurnOrder().length.should.equal(2);
    });
    
    it('should mix', function () {
       this.retries(5);
       randomizer.randomizeTurnOrder().should.deep.equal([player2, player1]);
    });
});