const { call_all_newegg_computer_components } = require('./scrapers_call/all_newegg_scrapers.js')

const computer_component_scrapers = [call_all_newegg_computer_components]

module.exports.call_all_computer_components = async () => {
    console.log("Scraping Computer Components")

    for (const scraper of computer_component_scrapers){
        await scraper()
    }

    console.log("ALL COMPUTER COMPONENTS HAVE BEEN SCRAPED!")
}
