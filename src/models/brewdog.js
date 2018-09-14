const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const BrewDog = function () {
  this.dataArray = null;
};

BrewDog.prototype.getData = function () {
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.get((data) => {
    PubSub.publish('BrewDog:data-ready', data);

  })

};

module.exports = BrewDog;
