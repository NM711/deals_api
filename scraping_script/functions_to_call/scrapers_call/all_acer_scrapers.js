const { acer_aspire_desktops } = require('../../scrapers/scrape_JSON/acer_JSON/acer_aspire_desktops.js')
const { acer_all_laptops } = require('../../scrapers/scrape_JSON/acer_JSON/acer_laptops.js')
const { acer_all_desktops } = require('../../scrapers/scrape_JSON/acer_JSON/acer_desktops.js')

module.exports.call_all_acer_computers = async () =>{
    console.log("Scraping Acer Computers...")
    await acer_aspire_desktops()
    await acer_all_laptops()
    await acer_all_desktops()
}