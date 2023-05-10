const express = require('express')
const router = express.Router()
const { endpointPagAndQuery } = require('./endpoint_boil.js')
router.get('', async (req, res) => {
  await endpointPagAndQuery('computer_components', req, res)
})

module.exports.computer_components = router
