const { call_all_hp_computers, } = require('./scrapers_call/all_hp_scrapers.js')
const { call_all_acer_computers } = require('./scrapers_call/all_acer_scrapers.js')
const { call_all_lenovo_computers } = require('./scrapers_call/all_lenovo_scrapers.js')
const computer_scrapers = [ call_all_hp_computers, call_all_acer_computers, call_all_lenovo_computers ]


module.exports.call_computers = async () => {
    console.log("Scraping Computers...")
    for (const scrape_func of computer_scrapers){
        await scrape_func()
    }
    console.log("ALL COMPUTERS HAVE BEEN SCRAPED!")
}
