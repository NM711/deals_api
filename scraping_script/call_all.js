const { runDatabase, client } = require('../DB/mongodb.js')
const { remove } = require('../DB/db_functions.js')
const { call_computers } = require('./functions_to_call/call_all_computers.js')
const { call_monitors } = require('./functions_to_call/call_all_monitors.js')
const { call_all_computer_components } = require('../scraping_script/functions_to_call/call_all_computer_components.js')
const { recurseThroughFunc } = require('./skeletons/iterate_paginated_endpoint.js')
const coll = ['computers', 'monitors', 'computer_components']

runDatabase()

async function callScrapers () {
  try {
    await recurseThroughFunc(remove)(coll)()()(0)
    await call_computers()
    await call_monitors()
    await call_all_computer_components()
    console.log(new Date())
    console.log('ALL SCRAPING FUNCTIONS CALLED AND RAN!')
    console.log('Function has reached its end...')
  } catch (err) {
    console.log('ERROR ON call_scrapers:', err)
    throw err
  } finally {
    await client.close()
  }
}

callScrapers()
