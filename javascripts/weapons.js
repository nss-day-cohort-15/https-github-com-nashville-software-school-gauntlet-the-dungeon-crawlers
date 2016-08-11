var Gauntlet = Gauntlet || {};
Gauntlet.Weapons = {};

Gauntlet.Weapons.Weapons = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Weapons.Broccoli = function() {
  this.name = "broccoli";
  this.damage = 1;
  this.hands = 1;
};
Gauntlet.Weapons.Broccoli.prototype = new Gauntlet.Weapons.Weapons();

Gauntlet.Weapons.Taco = function() {
  this.name = "taco";
  this.damage = 2;
  this.hands = 1;
};
Gauntlet.Weapons.Taco.prototype = new Gauntlet.Weapons.Weapons();

Gauntlet.Weapons.ChocolateCake = function() {
  this.name = "chocolateCake";
  this.damage = 16;
  this.hands = 2;
};
Gauntlet.Weapons.ChocolateCake.prototype = new Gauntlet.Weapons.Weapons();

Gauntlet.Weapons.Butter = function() {
  this.name = "butter";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Weapons.Butter.prototype = new Gauntlet.Weapons.Weapons();
