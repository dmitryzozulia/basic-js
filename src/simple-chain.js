const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    let str = "" + value
    this.arr.push(str)
    return this
  },
  removeLink(position) {
    if (
        typeof(position) !== 'number'
        || position <= 0
        || position > this.arr.length
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
    let chain_string = "( " + this.arr.join(" )~~( ") + " )"
    this.arr = []
    return chain_string
  }
}

module.exports = chainMaker;
