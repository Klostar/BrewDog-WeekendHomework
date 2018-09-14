const BrewDog = require('./models/brewdog.js');
const BrewDogListView = require('./views/brewdog_list_view.js');
const BrewDogView = require('./views/brewdog_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const brewDogListView = new BrewDogListView();
  brewDogListView.bindEvents();

  const brewDog = new BrewDog;
  brewDog.getData();

});
