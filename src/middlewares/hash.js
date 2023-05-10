const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const { v4: uuidv4 } = require('uuid')
const { runDatabase } = require('../../DB/mongodb.js')
const { push } = require('../../DB/db_functions.js')
const { db } = require('../../DB/mongodb.js')
require('dotenv').config()
const validator = require('validator')
const rounds = 10
// set email sender
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply.dealsgatherer@gmail.com',
    pass: process.env.NOREPLY_PSW
  }
})

// hash middleware
module.exports.hash_key = async (req, res, next) => {
  const key = uuidv4()
  const email = req.body.userEmail
  bcrypt.hash(key, rounds, async (err, hash) => {
  // Store hash in your password DB.
    if (err) throw err
    await runDatabase('users')
    const username = await db().collection('user_keys').findOne({ userEmail: email })

    if (username) {
      await db().collection('user_keys').findOneAndDelete({ email })
    }

    if (validator.isEmail(email)) {
      await push('user_keys', [{
        userEmail: email,
        hashedKey: hash
      }])

      const mailOptions = {
        from: 'noreply.dealsgatherer@gmail.com',
        to: email,
        subject: 'Deals Gatherer Api Key.',
        text: `Your Api Key is ${key} dont share it with anyone!`
      }

      transporter.sendMail(mailOptions, (err, info) => {
        if (!err) {
          console.log(`Key ${key} has been sent to the user!`)
        } else console.log(err)
      })
      next()
    } else res.status(403).send('Invalid Format')
  })
}
