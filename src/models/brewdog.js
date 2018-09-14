const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const BrewDogInformation = function () {
  this.dataArray = null;
};

Brewdog.prototype.getData = function () {
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.getData((data) => {
    this.dataArray = data;
    PubSub.publish('BrewDog:data-ready', this.dataArray);

  })

};
