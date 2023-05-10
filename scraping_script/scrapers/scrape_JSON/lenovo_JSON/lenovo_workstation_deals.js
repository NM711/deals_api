const { lenovoCompsRecursion } = require('./lenovo_recursion.js')

const url = (i) => `https://openapi.lenovo.com/us/en/ofp/search/dlp/product/query/get/_tsc?pageFilterId=37bb1d13-229d-43aa-bbc2-f94f86d78cb4&subSeriesCode=&params=%257B%2522classificationGroupIds%2522%253A%2522400001%2522%252C%2522pageFilterId%2522%253A%252237bb1d13-229d-43aa-bbc2-f94f86d78cb4%2522%252C%2522facets%2522%253A%255B%255D%252C%2522page%2522%253A%2522${i}%2522%252C%2522pageSize%2522%253A150%252C%2522init%2522%253Atrue%252C%2522sorts%2522%253A%255B%2522savingPercent%2522%255D%252C%2522version%2522%253A%2522v2%2522%252C%2522subseriesCode%2522%253A%2522%2522%257D`
module.exports.lenovo_workstation_deals = async () => await lenovoCompsRecursion(1, 8, url)
