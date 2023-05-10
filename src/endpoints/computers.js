const express = require('express')
const router = express.Router()
const { endpointPagAndQuery } = require('./endpoint_boil.js')

router.get('', async (req, res) => {
  await endpointPagAndQuery('computers', req, res)
})

module.exports.get_computers = router
