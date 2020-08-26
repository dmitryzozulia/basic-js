const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') return false
    sampleActivity = parseFloat(sampleActivity)
    if (typeof sampleActivity !== 'number') return false
    const t = Math.log(MODERN_ACTIVITY / sampleActivity)
    const calculate = Math.ceil(t / (0.693 / HALF_LIFE_PERIOD))
    return calculate > 0 && calculate !== Infinity ? calculate : false

}
