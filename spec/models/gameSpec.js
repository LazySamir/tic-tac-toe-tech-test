describe('Game', function() {
    describe('.new', function() {
        it('creates an empty grid', function() {
            var game = new Game()
            expect(game.grid).toEqual([[],[],[]])
        });
    });
});