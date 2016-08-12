/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    SOUTHERN COOKING CLASSES
      - Paula Dean
      - Sandra Lee
      - Rachael Ray
 */
Gauntlet.GuildHall.SouthernChefs = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Gauntlet.GuildHall.SouthernChefs.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.PaulaDean = function() {
  this.name = "PaulaDean";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Gauntlet.GuildHall.PaulaDean.prototype = new Gauntlet.GuildHall.SouthernChefs();


Gauntlet.GuildHall.SandraLee = function() {
  this.name = "SandraLee";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Gauntlet.GuildHall.SandraLee.prototype = new Gauntlet.GuildHall.SouthernChefs();


Gauntlet.GuildHall.RachaelRay = function() {
  this.name = "RachaelRay";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Gauntlet.GuildHall.RachaelRay.prototype = new Gauntlet.GuildHall.SouthernChefs();

/*
    REALITY FOOD CLASSES
      - Guy Fieri
      - Gordon Ramsey

 */
Gauntlet.GuildHall.RealityTvChefs = function() {
  this.name = "RealityFood";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.RealityTvChefs.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.GuyFieri = function() {
  this.name = "GuyFieri";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.GuyFieri.prototype = new Gauntlet.GuildHall.RealityTvChefs();


Gauntlet.GuildHall.GordonRamsey = function() {
  this.name = "GordonRamsey";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Gauntlet.GuildHall.GordonRamsey.prototype = new Gauntlet.GuildHall.RealityTvChefs();



/*
    FASTFOOD CLASSES
      - The King
      - Ronald McDonald
      - Wendy
 */
Gauntlet.GuildHall.FastFoodChefs = function() {
  this.name = "FastFood";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.FastFoodChefs.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.RonaldMcdonald = function() {
  this.name = "RonaldMcdonald";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.RonaldMcdonald.prototype = new Gauntlet.GuildHall.FastFoodChefs();


Gauntlet.GuildHall.TheKing = function() {
  this.name = "TheKing";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Gauntlet.GuildHall.TheKing.prototype = new Gauntlet.GuildHall.FastFoodChefs();





Gauntlet.GuildHall.Wendy = function() {
  this.name = "Wendy";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 10;

};
Gauntlet.GuildHall.Wendy.prototype = new Gauntlet.GuildHall.FastFoodChefs();
