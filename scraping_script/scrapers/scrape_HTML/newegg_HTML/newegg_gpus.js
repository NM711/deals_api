const { componentRecursion } = require('./newegg_recursion.js')
const url = (i) => `https://www.newegg.com/p/pl?d=gpu&PageSize=96&page=${i}`

module.exports.newegg_gpus = async () => await componentRecursion(1, 30, url)
