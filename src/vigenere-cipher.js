const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.indexOf(char) !== -1) {
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedChar = this.alphabet[(charIndex + keyCharIndex) % this.alphabet.length];
        encryptedMessage += encryptedChar;

        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.indexOf(char) !== -1) { // Если символ — буква
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedChar = this.alphabet[(charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length];
        decryptedMessage += decryptedChar;

        keyIndex++;
      } else {
        decryptedMessage += char; // Если символ не является буквой, он добавляется без изменений
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
