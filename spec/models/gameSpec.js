describe('Game', function() {
    
    beforeEach(function() {
        game = new Game()
    });
    
    describe('.new', function() {
        it('creates an empty grid', function() {
            expect(game.grid).toEqual([[null, null, null],[null, null, null],[null, null, null]]);
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

    describe('.move', function() {
        it('places a piece on the grid', function() {
            new_grid = game.move([0,0])
            expect(new_grid).toEqual([['x', null, null],[null, null, null],[null, null, null]])
        }) 
    })
});