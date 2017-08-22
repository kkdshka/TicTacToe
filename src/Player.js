class Player {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
    
    setName(value) {
    if (typeof value !== 'string') {
      throw new Error('"name" must be a string.');
    }

    this.name = value;
  }
}

module.exports = Player;