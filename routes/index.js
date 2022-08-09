var express = require('express')
var router = express.Router()
const api = require('./api.js');

const { TwitterApi } = require('twitter-api-v2')
require('dotenv').config()
var path = require('path')
router.use('/api', api);
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
})
/* GET home page. */
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router
