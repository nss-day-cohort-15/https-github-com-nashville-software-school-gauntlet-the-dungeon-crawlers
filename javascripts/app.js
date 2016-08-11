/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new Broccoli());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var PaulaDean = new Gauntlet.GuildHall.Human();

PaulaDean.setWeapon(new Butter());
console.log(paulaDean)

var paulaDean = new Gauntlet.GuildHall.SouthernChefs();
console.log(paulaDean)
// paulaDean.setWeapon(new Butter());
// warrior.generateClass();
// console.log(paulaDean.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Taco());
console.log(orc.toString());

var buttons = $('.class__link');
console.log(buttons)
for (var i = 0; i < buttons.length; i++){
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
   var player = new Gauntlet.Combatants.Human();
   player.createClass(e.currentTarget.id)
   console.log(player)
 })
}

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
