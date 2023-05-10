const { componentRecursion } = require('./newegg_recursion.js')
const url = (i) => `https://www.newegg.com/p/pl?d=raspberry&page=${i}&Order=3`
module.exports.raspberryPi_newegg_Scrape = async () => await componentRecursion(1, 20, url)
