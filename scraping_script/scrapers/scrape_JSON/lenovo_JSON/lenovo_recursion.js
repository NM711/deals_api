const { paginationReqGET } = require('../../../skeletons/iterate_paginated_endpoint.js')
const { lenovo_scrape_skeleton_computers, lenovo_scrape_skeleton_monitors } = require('./lenovo_api_scrape.js')

module.exports.lenovoCompsRecursion = async (start, end, url) => {
  return await paginationReqGET(start, end, url)(lenovo_scrape_skeleton_computers)
}

module.exports.lenovoMonitorsRecursion = async (start, end, url) => {
  return await paginationReqGET(start, end, url)(lenovo_scrape_skeleton_monitors)
}
