var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // client.v1
  //   .tweet('This tweet was written by a bot')
  //   .then((val) => {
  //     console.log(val)
  //     console.log('success')
  //     res.render('index', { title: 'Express' })
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // const tweet = () => {
  //   const text = "Hey! This tweet was written by a bot.";

  //   const onFinish = (err, reply) => {
  //     if (err) {
  //       console.log("Error: ", err.message);
  //     } else {
  //       console.log("Success: ", reply);
  //       res.render('index', { title: 'Express' })
  //     }
  //   };

  //   T.post("statuses/update", { status: text }, onFinish);
  // };

  // tweet();
  const query = req.query.query
  const result = await client.v2.get('tweets/search/recent', {
    query: query,
    max_results: 100,
  })
  console.log(query)
  res.json(result.data)
});
router.get('/individual', async function (req, res) {
    client.v2
      .singleTweet('1556977088929964034', {})
      .then((val) => {
        console.log(val)
      })
      .catch((err) => {
        console.log(err)
      })
  });

module.exports = router;