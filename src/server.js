const { runDatabase } = require('../DB/mongodb.js')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000 || process.env.PORT
const bodyParser = require('body-parser')
const { get_computers } = require('./endpoints/computers.js')
const { get_monitors } = require('./endpoints/monitors.js')
const { get_all_products } = require('./endpoints/all.js')
const { create_key } = require('./endpoints/create_key.js')
const { computer_components } = require('./endpoints/computer_components.js')
const { hash_comparasion } = require('./middlewares/hash_comparasion.js')
const { check_origin } = require('./middlewares/check_origin.js')

runDatabase()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/all', hash_comparasion, get_all_products)
app.use('/api/computers', hash_comparasion, get_computers)
app.use('/api/monitors', hash_comparasion, get_monitors)
app.use('/api/computer_components', hash_comparasion, computer_components)
app.use('/api/create_key', check_origin, create_key)

app.listen(port, () => {
  console.log(`App is running at Port ${port}`)
})
