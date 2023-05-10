const express = require('express')
const router = express.Router()
const { hash_key } = require('../middlewares/hash.js')

router.post('', hash_key, (req, res) => {
  console.log(`Key Sent to: ${req.body.userEmail}`)
  const displayHTML = `
    <html>
        <body>
            <h1>Success! The Key Has Been Sent Check Your Email</h1>
        </body>
    </html>`

  res.status(200).send(displayHTML)
})

module.exports.create_key = router
