const allowed = 'http://localhost:5173'
// later on make it so that only specific machines can send request
// and make it so that unauthorized machines need to send their request through
// the website.

module.exports.check_origin = (req, res, next) => {
  const origin = req.headers.origin

  if (allowed === origin) {
    // allows origin with any of the whitelisted ones in the array, if the array contains it.
    console.log(origin)
    res.setHeader('Access-Control-Allow-Origin', origin)
    next()
  } else {
    console.log('request sent from a origin that is not allowed!')
    res.status(403).send('403 Forbidden')
  }
}
