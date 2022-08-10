var express = require('express')
var router = express.Router()
const api = require('./api.js');


var path = require('path')
router.use('/api', api);

/* GET home page. */
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router
