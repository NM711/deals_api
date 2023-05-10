// this is for scraping apis
module.exports.getJsonData = async (url, options, innerFunc) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('Succesfully Scraped...')
    await innerFunc(data)
  } catch (err) {
    console.log('HERE WAS AN ERROR:', err)
  }
}
