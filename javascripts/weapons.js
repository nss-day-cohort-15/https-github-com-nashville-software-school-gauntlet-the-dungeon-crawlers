var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Broccoli = function() {
  this.name = "broccoli";
  this.damage = 1;
  this.hands = 1;
};
Broccoli.prototype = new Weapon();

var Taco = function() {
  this.name = "taco";
  this.damage = 2;
  this.hands = 1;
};
Taco.prototype = new Weapon();

var ChocolateCake = function() {
  this.name = "chocolate cake";
  this.damage = 16;
  this.hands = 2;
};
ChocolateCake.prototype = new Weapon();

var Butter = function() {
  this.name = "butter";
  this.damage = 18;
  this.hands = 2;
};
Butter.prototype = new Weapon();
