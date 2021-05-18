const nutritionix = require('../nutritionix/config');

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

module.exports.upcLookup = upcLookup;