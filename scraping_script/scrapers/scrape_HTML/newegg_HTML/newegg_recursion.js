const { recursionPuppeteerFunc } = require('../../../skeletons/iterate_paginated_endpoint.js')
const { newegg_HTML_scrape_skeleton } = require('./newegg_HTML_skeleton.js')

const neweggFuncRecursion = (collection) => async (start, end, url) => {
  return await recursionPuppeteerFunc(newegg_HTML_scrape_skeleton)(start, end, url)(collection)
}

module.exports.componentRecursion = neweggFuncRecursion('computer_components')
