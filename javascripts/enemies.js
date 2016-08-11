Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["PaulaDean", "SandraLee", "RachaelRay"];
  this.allowedWeapons = ["Taco", "Broccoli"]
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
  this.generateWeapons = function() {
  // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    // Get the string at the index
    var randomWeapons = this.allowedWeapons[random];

    // Composes the corresponding player class into the player object
    this.weapons = new Gauntlet.Weapons[randomWeapons]();

    // Add the health bonus
    // this.damage += this.weapons.damage;
    return this.weapons;
  };
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

