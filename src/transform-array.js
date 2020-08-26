module.exports = function transform(oldArr) {
    const newArr = [...oldArr]
    transformNewArray(newArr)
    return newArr
}

function transformNewArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-prev' && i > 1) {
            arr[i] = 'used'
            arr.splice(i - 1, 1)
            transformNewArray(arr)
        } else if (arr[i] === '--double-next' && i < arr.length - 1) {
            arr[i] = 'used'
            arr.splice(i, 0, arr[i + 1])
            transformNewArray(arr)
        } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
            arr[i] = 'used'
            arr.splice(i + 1, 1)
            transformNewArray(arr)
        } else if (arr[i] === '--double-prev' && i > 1) {
            arr[i] = 'used'
            arr.splice(i - 1, 0, arr[i - 1])
            transformNewArray(arr)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'used'
            || arr[i] === '--double-prev'
            || arr[i] === '--discard-next'
            || arr[i] === '--double-next'
            || arr[i] === '--discard-prev') {
            arr.splice(i, 1)
        }
    }
    return arr
}


