function Game() {
    this.grid = [[null, null, null],
                 [null, null, null],
                 [null, null, null]]
    this.playerTurn = 'x'
}

Game.prototype.toggleTurn = function() {
    return this.playerTurn = this.playerTurn === 'x' ? 'o' : 'x'
}

Game.prototype.turn = function(pos) {
    this.move(pos);
    return this.returnWinner();
}

Game.prototype.move = function(pos) {
    this.grid[pos[0]][pos[1]] = this.playerTurn;
    this.toggleTurn();
    return this.grid;
}

Game.prototype.returnWinner = function() {
    return 'x Wins'
    // add logic
}
