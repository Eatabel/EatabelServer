const nutritionix = require('nutritionix-api');

const appId = '';
const apiKey = '';

nutritionix.init(appId, apiKey);

module.exports = nutritionix;