describe('Game', function() {
    
    beforeEach(function() {
        game = new Game()
    });
    
    describe('.new', function() {
        it('creates an empty grid', function() {
            expect(game.grid).toEqual([[],[],[]]);
        });
         it('returns x', function() {
            expect(game.turn).toEqual('x');
        });
    });
    describe('.toggleTurn', function() {
         it('changes .turn x to o', function() {
            expect(game.toggleTurn()).toEqual('o');
        });
        it('changes .turn o to x', function() {
            game.turn = 'o'
            expect(game.toggleTurn()).toEqual('x');
        });
    });
});