describe("User Can Place a Marker", function() {
    
    it('can place markers', function() {
        game = new Game();
        game.move([0,0]);
        game.move([0,1]);
        game.move([0,2]);
        game.move([1,1]);
        game.move([1,0]);
        game.move([1,2]);
        game.move([2,1]);
        game.move([2,0]);
        game.move([2,2]);
        expect(game.grid).toEqual([['x', 'o', 'x'],['x', 'o', 'o'],['o', 'x', 'x']]);
    })
})