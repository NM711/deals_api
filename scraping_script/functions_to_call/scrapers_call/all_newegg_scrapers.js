const { featured_monitors_newegg  } = require('../../scrapers/scrape_HTML/newegg_HTML/newegg_featured_monitors.js')
const { raspberryPi_newegg_Scrape } = require('../../scrapers/scrape_HTML/newegg_HTML/newegg_raspberrypi.js')
const { newegg_gpus } = require('../../scrapers/scrape_HTML/newegg_HTML/newegg_gpus.js')
module.exports.call_all_newegg_monitors = async () => {
    console.log("Scraping Newegg Monitors...")
    await featured_monitors_newegg()
}

module.exports.call_all_newegg_computer_components = async () => {
    console.log("Scraping Newegg Computer Components...")
    await raspberryPi_newegg_Scrape()
    await newegg_gpus()
}
