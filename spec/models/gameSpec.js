describe('Game', function() {
    
    beforeEach(function() {
        game = new Game()
    });
    
    describe('.new', function() {
        it('creates an empty grid', function() {
            expect(game.grid).toEqual([[null, null, null],[null, null, null],[null, null, null]]);
        });
         it('returns x', function() {
            expect(game.playerTurn).toEqual('x');
        });
    });

    describe('.toggleTurn', function() {
         it('changes .turn x to o', function() {
            expect(game.toggleTurn()).toEqual('o');
        });
        it('changes .turn o to x', function() {
            game.playerTurn = 'o'
            expect(game.toggleTurn()).toEqual('x');
        });
    });

    describe('.turn', function() {
        it('returns a winner', function() {
            game.grid = [['x', 'x', null],['o', 'o', null],[null, null, null]]
            expect(game.turn([0,2])).toEqual('x Wins')
        })
        xit('returns the player to move', function() {
            
        })
    })

    describe('.move', function() {
        it('places an "x" on the grid', function() {
            new_grid = game.move([0,0])
            expect(new_grid).toEqual([['x', null, null],[null, null, null],[null, null, null]])
        }) 
        it('places a "o" on the grid', function() {
            game.move([0,0])
            new_grid = game.move([0,1])
            expect(new_grid).toEqual([['x', 'o', null],[null, null, null],[null, null, null]])
        })
    })
});