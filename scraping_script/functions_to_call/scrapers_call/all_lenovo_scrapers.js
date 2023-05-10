const { lenovo_desktop_models } = require('../../scrapers/scrape_JSON/lenovo_JSON/lenovo_desktops_models.js')
const { lenovo_workstation_deals } = require('../../scrapers/scrape_JSON/lenovo_JSON/lenovo_workstation_deals.js')
const { lenovo_laptops } = require('../../scrapers/scrape_JSON/lenovo_JSON/lenovo_laptops.js')
const { lenovo_monitors } = require('../../scrapers/scrape_JSON/lenovo_JSON/lenovo_monitors.js')
module.exports.call_all_lenovo_computers = async () => {
  console.log('Scraping Lenovo Computers...')
  await lenovo_desktop_models()
  await lenovo_workstation_deals()
  await lenovo_laptops()
}

module.exports.call_all_lenovo_monitors = async () => {
    console.log('Scraping Lenovo Monitors...')
    await lenovo_monitors()
}
