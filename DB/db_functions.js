const { db } = require('./mongodb.js')

module.exports.push = async (collectionName, arr) => {
  try {
    const collection = await db().collection(collectionName)
    for (const obj of arr) {
      await collection.insertOne(obj)
    }
    console.log('Push and Removed Completed! (function)')
  } catch (err) {
    console.log('ERROR PUSHING ITEM TO DB!:', err)
  }
}

module.exports.remove = async (collectionName, delObj = {}) => {
  try {
    await db().collection(collectionName).deleteMany(delObj)
    console.log('SUCCESFULLY WIPED!')
  } catch (err) {
    console.log('ERROR WIPING DB', err)
    throw err
  }
}
