const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    const str = value + ''
    this.arr.push(str)
    return this
  },
  removeLink(position) {
    if (
        typeof(position) !== 'number'
        || position > this.arr.length
        || position <= 0
        || Math.trunc(position) !== position
    ) {
      this.arr = []
      throw new Error()
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const str = `( ${this.arr.join(' )~~( ')} )`
    this.arr = []
    return str
  }
}

module.exports = chainMaker;
