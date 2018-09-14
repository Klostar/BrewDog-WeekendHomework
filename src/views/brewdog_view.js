const BrewDogView = function(brew,listElement){
  this.brew = brew;
  this.listElement = listElement;
}

BrewDogView.prototype.render = function () {
  //create outer div
const brewContainer = document.createElement('div');
//create name h2
const name = document.createElement('h2');
name.textContext = this.brew.name;


brewContainer.appendChild(name);

this.listElement(munroContainer);


}

module.exports = BrewDogView;
