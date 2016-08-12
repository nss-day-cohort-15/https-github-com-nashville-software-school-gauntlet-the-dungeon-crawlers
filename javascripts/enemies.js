Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";

  this.allowedClasses = ["GuyFieri", "RonaldMcdonald", "TheKing"];
  this.allowedWeapons = ["Taco", "Broccoli","ChocolateCake", "Butter"]

  this.generateClass = function() {
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
    var randomClass = this.allowedClasses[random];
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
  this.generateWeapons = function() {
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
    var randomWeapons = this.allowedWeapons[random];
    this.weapons = new Gauntlet.Weapons[randomWeapons]();
    return this.weapons;
  };
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();
