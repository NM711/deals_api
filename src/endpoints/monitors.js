const express = require('express')
const router = express.Router()
const { endpointPagAndQuery } = require('./endpoint_boil.js')

router.get('', async (req, res) => {
  await endpointPagAndQuery('monitors', req, res)
})

module.exports.get_monitors = router
