function Game() {
    this.grid = [[],[],[]]
    this.turn = 'x'
}

Game.prototype.toggleTurn = function() {
    return this.turn = this.turn === 'x' ? 'o' : 'x'
}