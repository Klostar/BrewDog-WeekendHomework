const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const BrewDogListView = function(element){
this.listElement = document.querySelector('#option');

};

BrewDogListView.prototype.bindEvents = function () {
  PubSub.subscribe('BrewDog:data-ready',(event) => {
    const data = event.detail
    this.populate(data);

    // this.elemenet.addEventListener('change', (event) => {
    //   const BrewDogIndex = event.target.value
    //
    // })

  });


    //
    // BrewDogListView.prototype.createBrews = function (allBrews) {
    //   allBrews.forEach(brew) =>{
    //     const brewdogView = new BrewDogView(brew, this.listElement);
    //     brewdogView.render();

BrewDogListView.prototype.populate = function (data) {
  const dropdown = document.querySelector('#option');
  data.forEach((brewDog, index) => {

    const option = document.createElement('option');
    option.textContent = brewDog.name;

    console.log(brewDog.name);
    dropdown.appendChild(option)
    option.value = index;
    // this.element.appendChild('#option');
  })

  }
};



module.exports = BrewDogListView;
