var express = require('express');
var http = require('http')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const url = 'localhost'
  const options = {
    host: url,
    port: 3001,
    path: '/api/v1/transactions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 6Aupi3Y9s9K6noeKeqLvtQfgdwvJinlQvInRvWL72z0`
    }
  };
  for (let i = 0; i < 30; i++) {
    let data1 = JSON.stringify({
      "amount": 40,
      "target_account_id": "108745685951809974",
      "note": " test"
    });
    let data2 = JSON.stringify({
      "amount": 40,
      "target_account_id": "108521614927121425",
      "note": " test"
    });
    let data3 = JSON.stringify({
      "amount": 40,
      "target_account_id": "109056730018112463",
      "note": " test"
    });
    let data4 = JSON.stringify({
      "amount": 40,
      "target_account_id": "108492170304017094",
      "note": " test"
    });
  
    transaction(options, data1)
    transaction(options, data2)
    transaction(options, data3)
    transaction(options, data4)
  }
  
  res.render('index', { title: 'Express' });
});

function transaction(options, data) {
    const req = http.request(options, function(res) {
      res.setEncoding('utf8');
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        console.log("end",responseBody);
      });
      
    }); 

    
    req.write(data);
    req.end();

}
module.exports = router;
