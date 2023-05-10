const { runDatabase, db } = require('../../DB/mongodb.js')
const bcrypt = require('bcryptjs')

module.exports.hash_comparasion = async (req, res, next) => {
  const key = req.query.key || 'key'
  await runDatabase('users')

  const hashArray = await db().collection('user_keys').find({}).toArray()
  for (const obj of hashArray) {
    if (await bcrypt.compare(key, obj.hashedKey) === true) {
      console.log(`${key} authorized`)
      // instead of closing the client I overwrite the previous DB users instance with computer_deals
      await runDatabase('computer_deals')
      next()
    } else res.status(401).send('401 Unauthorized Or Unauthorized Key, try again!')
  }
}
