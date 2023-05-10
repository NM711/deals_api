const { push } = require('../../../../DB/db_functions.js')
const { prodSchema } = require('../../../../DB/schema.js')
module.exports.acer_api_scrape1 = async (data) => {
  const arr = data.hits.filter(item => item.price.length !== 0 && item.price && item.product_name.length !== 0)

  const products = arr.map(item => prodSchema(
    'acer',
    item.product_name,
    item.price,
    item.regular_price,
    null,
    item.image,
    `https://www.acer.com${item.url}`
  ))

  return await push('computers', products)
}
