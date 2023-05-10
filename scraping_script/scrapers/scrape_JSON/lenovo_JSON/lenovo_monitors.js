const { lenovoMonitorsRecursion } = require('./lenovo_recursion.js')

const url = (i) => `https://openapi.lenovo.com/us/en/ofp/search/dlp/product/query/get/_tsc?pageFilterId=a486f149-7a9f-4310-800b-dbfaccf23592&subSeriesCode=&params=%257B%2522classificationGroupIds%2522%253A%2522400001%2522%252C%2522pageFilterId%2522%253A%2522a486f149-7a9f-4310-800b-dbfaccf23592%2522%252C%2522facets%2522%253A%255B%257B%2522facetId%2522%253A%2522727%2522%252C%2522selectedValues%2522%253A%2522100.0-299.991%252C300.0-499.991%252C500.0-799.991%252C1500.0-1999.991%2522%257D%255D%252C%2522page%2522%253A%2522${i}%2522%252C%2522pageSize%2522%253A20%252C%2522init%2522%253Atrue%252C%2522sorts%2522%253A%255B%2522bestSelling%2522%255D%252C%2522version%2522%253A%2522v2%2522%252C%2522subseriesCode%2522%253A%2522%2522%257D`

module.exports.lenovo_monitors = async () => await lenovoMonitorsRecursion(1, 6, url)
