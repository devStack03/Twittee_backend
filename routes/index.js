var express = require('express')
var router = express.Router()
const { TwitterApi } = require('twitter-api-v2')
require('dotenv').config()

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
})
/* GET home page. */
router.get('/', function (req, res, next) {
  client.v1
    .tweet('This tweet was written by a bot')
    .then((val) => {
      console.log(val)
      console.log('success')
      res.render('index', { title: 'Express' })
    })
    .catch((err) => {
      console.log(err)
    })
  
})

module.exports = router
