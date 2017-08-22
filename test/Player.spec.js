let chai = require('chai'),
  path = require('path');
  
  chai.should();
  var expect = chai.expect;
  
let Player = require(path.join(__dirname, '../src', 'Player.js'));

describe('Player', () => {
    describe('name', () => {
        let player;
        
        beforeEach(() => {
            player = new Player('Ann');
        });
        
        it('returns player name', () => {
            player.getName().should.equal('Ann');
        });
        
        it('throws error', () => {
            expect(() => {
                player.setName(2);
            }).to.throw('"name" must be a string.');
        });
    });
});