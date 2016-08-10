var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Broccoli = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Broccoli.prototype = new Weapon();

var Tacco = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Tacco.prototype = new Weapon();

var ChocolateCake = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
ChocolateCake.prototype = new Weapon();

var Butter = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Butter.prototype = new Weapon();

