const { push } = require('../../../../DB/db_functions.js')
const { prodSchema } = require('../../../../DB/schema.js')

async function lenovo_scrape_skeleton (data, collection) {
  const lenovopProducts = data.data.data[0].products.filter(prod => prod && prod.productName)
  const products = lenovopProducts.map(prod => {
    const thumb = prod.media.heroImage.imageAddress
    const prodThumb = !thumb.includes('https:') ? `https:${thumb}` : thumb

    return prodSchema(
      'lenovo',
      prod.productName,
      prod.miniPrice || prod.finalPrice,
      null,
      prod.marketingStatus,
      prodThumb,
      `https://www.lenovo.com/us/en${prod.url}`
    )
  })

  await push(collection, products)
}

module.exports.lenovo_scrape_skeleton_computers = async (data) => await lenovo_scrape_skeleton(data, 'computers')
module.exports.lenovo_scrape_skeleton_monitors = async (data) => await lenovo_scrape_skeleton(data, 'monitors')
