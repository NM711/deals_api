const { push } = require('../../../../DB/db_functions.js')
const { prodSchema } = require('../../../../DB/schema.js')
const { timeout } = require('../../../skeletons/timeout.js')
module.exports.newegg_HTML_scrape_skeleton = async (page, collection) => {
  const prodName = await page.$$eval('.item-title', titles => titles.map(title => title.outerText))
  const prodPrice = await page.$$eval('.price-current', prices => prices.map(price => price.outerText))
  const originalPrice = await page.$$eval('.price-was', prices => prices.map(price => price.outerText))
  const anchor = await page.$$eval('.item-title', links => links.map(link => link.href))
  const thumb = await page.$$eval('.checkedimg', thumbs => thumbs.map(thumb => thumb.src))

  const products = prodName.map((name, i) => {
    if (name.length !== 0 && anchor[i] !== 0) {
      return prodSchema(
        'newegg',
        name,
        prodPrice[i],
        originalPrice[i],
        null,
        thumb[i],
        anchor[i]
      )
    } else return false
  }).filter(Boolean)
  await push(collection, products)
  return await timeout(3000)
}
