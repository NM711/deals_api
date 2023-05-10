const { getJsonData } = require('../../../skeletons/scrapeJSON.js')
const { acer_api_scrape1 } = require('./acer_api_scrape.js')
const { requestOptions_POST } = require('../../scraping_header.js')
const payload = `{
    "publication_Id": "30",
    "country": "US",
    "language": "en",
    "brand": "Acer",
    "searchCrossBrands": null,
    "view": "AcerFullWidthPage",
    "product_line": null,
    "product_class": null,
    "product_series": null,
    "product_model": null,
    "collection": "desktops",
    "sort": "Relevance",
    "pagesize": "230",
    "currentpage": 1,
    "soldOnAcer": false,
    "filters": []
}`

const url = "https://www.acer.com/us-en/api/productfilter"

module.exports.acer_all_desktops = async () => {
    await getJsonData(url, requestOptions_POST(payload), acer_api_scrape1)
}