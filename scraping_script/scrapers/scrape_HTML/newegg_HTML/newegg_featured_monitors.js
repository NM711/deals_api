const { puppeteer_higher_order } = require('../../../skeletons/puppeteer_higher_order.js')
const { newegg_HTML_scrape_skeleton } = require('./newegg_HTML_skeleton.js')
const url = 'https://www.newegg.com/p/pl?Submit=StoreIM&Depa=3&Category=19&PageSize=96'
module.exports.featured_monitors_newegg = async () => {
  await puppeteer_higher_order(url, newegg_HTML_scrape_skeleton, 'monitors')
}
