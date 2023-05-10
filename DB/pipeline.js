const { db } = require('./mongodb.js')
const allCollections = ['computers', 'monitors', 'computer_components']

const basic_pipeline = (match, index, search) => {
  const pipeline_frame = [
    { $match: match },
    { $skip: index },
    { $limit: 20 },
    { $sort: { 'currentProductPrice': 1 } }
  ]

  if (search){
    pipeline_frame.unshift({ $search: { index: 'get_prod_name', text: { query: search, path: 'productName' } } })
  }

  return pipeline_frame
}

const addUnions = (pipeline, collection, unionPipeline) => pipeline.push({ $unionWith: { coll: collection, pipeline: unionPipeline } })

function mergeCollections(index, brand, search, pipeline, arrayOfCollections){
  const unionPipeline = () => pipeline(index, search, brand)
  const mergedPipeline = unionPipeline()
  for (const collection of arrayOfCollections){
    addUnions(mergedPipeline, collection, unionPipeline())    
  }
  return mergedPipeline
}

const pipeline1 = (index, search) => basic_pipeline({}, index, search)
const pipeline2 = (index, search, brand) => basic_pipeline({ 'brand': brand }, index, search)
const allProdPipelineMatchAll = (index, brand, search) => mergeCollections(index, brand, search, pipeline1, allCollections)
const allProdPipelineMatchBrand = (index, brand, search) => mergeCollections(index, brand, search, pipeline2, allCollections)

async function pipeline_skeleton(pipe1, pipe2, index, brand, search, collectionName, req, res) {
  const collection = await db().collection(collectionName)
  // index, search, brand which appear to be unused are actually being passed onto pipe1 and pipe2
  let data = await collection.aggregate(brand === 'any' ? pipe1 : pipe2).toArray()
  res.send(data)
}

module.exports.getProducts = async (index, brand, search, collectionName, req, res) =>{
  const oneTypeMatchAll = pipeline1(index, search)
  const oneTypeMatchBrand = pipeline2(index, search, brand)
  return await pipeline_skeleton(oneTypeMatchAll, oneTypeMatchBrand, index, brand, search, collectionName, req, res)
}

module.exports.get_from_all_type = async (index, brand, search, collectionName, req, res) => {
  const allTypeMatchAll = allProdPipelineMatchAll(index, brand, search)
  const allTypeMatchBrand = allProdPipelineMatchBrand(index, brand, search)
  return await pipeline_skeleton(allTypeMatchAll, allTypeMatchBrand, index, brand, search, collectionName, req, res) 
}
// THIS REALLY NEEDS TO BE REFACTORED LATER ON OR ELSE IT WILL NOT SCALE!