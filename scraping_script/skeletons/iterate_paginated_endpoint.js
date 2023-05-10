const { getJsonData } = require('./scrapeJSON.js')
const { requestOptions_GET } = require('../scrapers/scraping_header.js')
const { puppeteer_higher_order } = require('./puppeteer_higher_order.js')
module.exports.paginated_url_loop = async (numStart, num, url, array) => {
  for (let i = numStart; i < num; i++) {
    array.push(url(i))
  }
}

module.exports.recursive = (start, end, url) => {
  if (start < end) {
    const paginatedEndpoints = [url(start)]
    return paginatedEndpoints.concat(this.recursive(start + 1, end, url))
  } else return []
}

module.exports.recurseThroughFunc = (func) => (arr) => (arg2) => (arg3) => async (i) => {
  if (i < arr.length) {
    await func(arr[i], arg2, arg3)
    console.log(arr[i])
    return await this.recurseThroughFunc(func)(arr)(arg2)(arg3)(i + 1)
  } else return i
}

const paginationRecursion = (func) => (arg) => (start, end, url) => async (arg2) => {
  const arr = await this.recursive(start, end, url)
  await this.recurseThroughFunc(func)(arr)(arg)(arg2)(0)
}

module.exports.paginationReqGET = paginationRecursion(getJsonData)(requestOptions_GET)
module.exports.recursionPuppeteerFunc = paginationRecursion(puppeteer_higher_order)