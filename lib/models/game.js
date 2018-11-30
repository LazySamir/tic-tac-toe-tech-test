function Game() {
    this.grid = [[null, null, null],
                 [null, null, null],
                 [null, null, null]]
    this.turn = 'x'
}

Game.prototype.toggleTurn = function() {
    return this.turn = this.turn === 'x' ? 'o' : 'x'
}