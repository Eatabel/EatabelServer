const {appId, apiKey} = require('../foodAPI/config');
const axios = require('axios');

const search = (req, res) => {
  axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${apiKey}&ingr=${req.params.query}`)
    .then(result => {
      res.status(200);
      res.send(result.data);
    })
    .catch(() => {
      res.status(404);
      res.end();
    });
};



const upcLookup = (req, res) => {
  axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${apiKey}&upc=${req.params.upc}`)
    .then(result => {
      res.status(200);
      res.send(result.data);
    })
    .catch(() => {
      res.status(404);
      res.end();
    });
};

module.exports.search = search;
module.exports.upcLookup = upcLookup;