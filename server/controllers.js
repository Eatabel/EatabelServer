const nutritionix = require('../nutritionix/config');

const search = (req, res) => {
  nutritionix.natural.search(req.params.query)
    .then(result => {
      res.status(200);
      res.send({nutritionix: result});
    })
    .catch(() => {
      res.status(404);
      res.end();
    });
};

const upcLookup = (req, res) => {
  nutritionix.item.byUpc(req.params.upc)
    .then(result => {
      res.status(200);
      res.send({nutritionix: result});
    })
    .catch(() => {
      res.status(404);
      res.end();
    });
};

module.exports.search = search;
module.exports.upcLookup = upcLookup;