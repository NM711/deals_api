const puppeteer = require('puppeteer')
const { getJsonData } = require('../../../skeletons/scrapeJSON.js')
const { hp_api_skeleton_scrape_monitors } = require('./hp_api_scrape.js')
const { requestOptions_GET } = require('../../scraping_header.js')
const url = 'https://www.hp.com/us-en/shop/vwa/accessories-88342--1/subcat=Monitors'
const urls = []

async function listenForReq () {
  const browser = await puppeteer.launch({ headless: false })
  try {
    const page = await browser.newPage()
    page.on('request', async requests => {
      if (requests.resourceType() === 'fetch' || requests.resourceType() === 'xhr') {
        if (requests.url().includes('HPServices?')) {
          console.log(requests.url())
          urls.push(requests.url())
        }
      }
    })

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 })
    await page.$eval('#onetrust-accept-btn-handler', btn => btn.click())
    let Loadbuttons = await page.$$("button.Button-module_button__1yqRw[data-gtm-value='load-more']")
    await page.waitForSelector("button.Button-module_button__1yqRw[data-gtm-value='load-more']")
    for (const button of Loadbuttons) {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0
          const distance = 50
          const timer = setInterval(async () => {
            const scrollHeight = document.body.scrollHeight
            window.scrollBy(0, distance)
            totalHeight += distance
            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInterval(timer)
              resolve()
            }
          }, 100)
        })
      })
      await button.click()
    }
  } catch (err) {
    console.log("THERE HAS BEEN AN ERROR:", err)
  } finally {
    await browser.close();
  }
}

module.exports.hp_monitors = async () => {
  await listenForReq()
  console.log(urls)
  for (const paginated_url of urls) {
    await getJsonData(paginated_url, requestOptions_GET, hp_api_skeleton_scrape_monitors)
  }
}
