describe("user knows who won", function() {
    
    it('game declares x the winner', function() {
        game = new Game();
        game.turn([0,0]);
        game.turn([1,0]);
        game.turn([0,1]);
        game.turn([1,1]);
        expect(game.turn([0,2])).toEqual("x Wins");
    })
    
    it('game declares o the winner', function() {
        game = new Game();
        game.turn([2,2])
        game.turn([0,0]);
        game.turn([1,0]);
        game.turn([0,1]);
        game.turn([1,1]);
        expect(game.turn([0,2])).toEqual("o Wins");
    })
})


// expect(game.grid).toEqual([['x', 'x', 'x'],['o', 'o', null],[null, null, null]]);
      