function Game() {
    this.grid = [[null, null, null],
                 [null, null, null],
                 [null, null, null]]
    this.turn = 'x'
}

Game.prototype.toggleTurn = function() {
    return this.turn = this.turn === 'x' ? 'o' : 'x'
}

Game.prototype.move = function(pos) {
    this.grid[pos[0]][pos[1]] = this.turn
    this.toggleTurn()
    return this.grid
}