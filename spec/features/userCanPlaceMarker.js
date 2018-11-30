describe("User Can Place a Marker", function() {
    
    it('can place markers', function() {
        game = new Game();
        game.turn([0,0]);
        game.turn([0,1]);
        game.turn([0,2]);
        game.turn([1,1]);
        game.turn([1,0]);
        game.turn([1,2]);
        game.turn([2,1]);
        game.turn([2,0]);
        game.turn([2,2]);
        expect(game.grid).toEqual([['x', 'o', 'x'],['x', 'o', 'o'],['o', 'x', 'x']]);
    })
})