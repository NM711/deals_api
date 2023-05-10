const { getProducts, get_from_all_type } = require('../../DB/pipeline.js')

async function endpointPagAndQuery_skeleton (func, prod, req, res) {
  try {
    // needs minor tweaking on search but we can get it to work tommo
    const search = req.query.search
    const brand = req.query.brand || 'any'
    const index = parseInt(req.query.index) * 20 || 0
    if (index % 20 === 0 && index >= 0) {
      await func(index, brand, search, prod, req, res)
    } else res.send('ERR: invalid query params')
  } catch (err) {
    console.log('Endpoint Error!', err)
    res.status(500).send('Server Error!')
  }
};

module.exports.endpointPagAndQuery = async (prod, req, res) => await endpointPagAndQuery_skeleton(getProducts, prod, req, res)

module.exports.get_all = async (req, res) => endpointPagAndQuery_skeleton(get_from_all_type, 'computers', req, res)
