const express = require('express')
const router = express.Router()
const { get_all } = require('./endpoint_boil.js')
router.get('', async (req, res) => {
  await get_all(req, res)
})

module.exports.get_all_products = router
