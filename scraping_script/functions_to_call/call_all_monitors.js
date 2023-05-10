const { call_all_newegg_monitors } = require('./scrapers_call/all_newegg_scrapers.js')
const { call_all_hp_monitors } = require('./scrapers_call/all_hp_scrapers.js')
const { call_all_lenovo_monitors } = require('./scrapers_call/all_lenovo_scrapers.js')
const monitor_scrapers = [ call_all_newegg_monitors, call_all_hp_monitors, call_all_lenovo_monitors ]

module.exports.call_monitors = async () => {
    console.log("Scraping Monitors...")
    for (const scrape_func of monitor_scrapers){
        await scrape_func()
    }
    console.log("ALL MONITORS HAVE BEEN SCRAPED!")
}

