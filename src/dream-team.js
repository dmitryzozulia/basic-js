module.exports = function createDreamTeam(members) {
      let out = []
      if (members instanceof Array) {
    members.forEach(m => {
      if (typeof m === 'string') {
        out.push(m.trim()[0].toUpperCase())
      }
    })
    if (out === []) return false
    return out.map(m => m.charCodeAt(0))
        .sort((a, b) => (a - b))
        .map(m => String.fromCharCode(m))
        .join('')
  } else {
    return false
  }
}

