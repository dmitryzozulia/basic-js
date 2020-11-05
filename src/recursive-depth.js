let max = 0;

module.exports = class DepthCalculator {
    calculateDepth(arr, cur = 1) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                max = this.calculateDepth(arr[i], cur + 1)
            }
        }
        max = (max > cur) ? max : cur

        const depth = max
        max = 0
        return depth
    }
}
