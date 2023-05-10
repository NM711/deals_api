const { hp_weekly_deals_api_desktop_scrape } = require('../../scrapers/scrape_JSON/hp_JSON/hp_weekly_deals_desktop_scrape.js')
const { hp_weekly_deals_api_laptop_scrape } = require('../../scrapers/scrape_JSON/hp_JSON/hp_weekly_deals_laptop_scrape.js')
const { hp_envy_omen_victus_desktops } = require('../../scrapers/scrape_JSON/hp_JSON/hp_envy_omen_victus_desktops.js')
// HP SCRAPERS PUT ON HOLD FOR NOW...
const { hp_monitors } = require('../../scrapers/scrape_JSON/hp_JSON/hp_monitors.js')
module.exports.call_all_hp_computers = async () => {   
    console.log("Scraping HP Computers...")
    await hp_weekly_deals_api_desktop_scrape(),
    await hp_envy_omen_victus_desktops()
    await hp_weekly_deals_api_laptop_scrape()
}

module.exports.call_all_hp_monitors = async () => {
    console.log("Scraping HP Monitors...")
    await hp_monitors()
}