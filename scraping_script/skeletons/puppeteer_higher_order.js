const puppeteer = require('puppeteer')

module.exports.puppeteer_higher_order = async (url, funcOne, collection) => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.setExtraHTTPHeaders({
    accept: 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'sec-ch-ua': '\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '\"Windows\"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
  })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 })
  // anything after req url
  await funcOne(page, collection)

  await page.close()
  return await browser.close()
}

// NOT IN USE YET...
