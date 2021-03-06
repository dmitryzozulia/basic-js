const LATIN = 26

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.is_direct = direct
  }

  encrypt(message, key) {
    if(!(arguments.length > 1)) throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    const arr = []
    const len = message.length
    let index = 0
    for(let i = 0; i < len; i++) {
      const code = message[i].charCodeAt(0)
      if(code >= 65 && code <= 90) {
        const new_symb = String.fromCharCode((code + key.charCodeAt(index)) % LATIN + 'A'.charCodeAt(0))
        arr.push(new_symb)
        if(index !== key.length - 1) index++
        else index = 0
      }
      else arr.push(message[i])
    }
    if(this.is_direct === false) arr.reverse()
    return arr.join('')
  }

  decrypt(encryptedMessage, key) {
    if(arguments.length <=1) throw new Error()
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    const arr = []
    const len = encryptedMessage.length
    let index = 0
    for(let i = 0; i < len; i++) {
      const code = encryptedMessage[i].charCodeAt(0)
      if(code >= 65 && code <= 90) {
        const new_symb = String.fromCharCode((code + LATIN - key.charCodeAt(index)) % LATIN + 'A'.charCodeAt(0))
        arr.push(new_symb)
        if(index !== key.length - 1) index++
        else index = 0
      }
      else arr.push(encryptedMessage[i])
    }
    if(this.is_direct === false) arr.reverse()
    return arr.join('')
  }
}

module.exports = VigenereCipheringMachine;
