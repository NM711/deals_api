// reusable
const { push } = require('../../../../DB/db_functions.js')
const { prodSchema } = require('../../../../DB/schema.js')
const hp_api_skeleton_scrape = async (data, collection) => {
  const products = data.inventoryData.map(inv => {
    const priceData = data.priceData.find(item => item.productId === inv.productId)
    if (priceData) {
      return prodSchema(
        'hp',
        inv.prodName,
        priceData.lPrice,
        priceData.price,
        inv.inventoryMessage,
        inv.fullImages.Img_Center_573_430,
        'https://www.hp.com/us-en/home.html'
      )
    } else return false
  }).filter(Boolean) // checks if the Boolean is true before mapping to arr

  return await push(collection, products)
}
// note i will refactor this entire function whenever i need to use more than 5 collections
module.exports.hp_api_skeleton_scrape_computers = async (data) => await hp_api_skeleton_scrape(data, 'computers')
module.exports.hp_api_skeleton_scrape_monitors = async (data) => await hp_api_skeleton_scrape(data, 'monitors')
