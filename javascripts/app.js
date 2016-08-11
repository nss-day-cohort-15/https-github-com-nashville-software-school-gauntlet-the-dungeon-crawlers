/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Broccoli());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Taco());
console.log(orc.toString());

// Added Event Listener to Class Button and Added Player Class

var buttons = $('.class__link');
for (var i = 0; i < buttons.length; i++){
   console.log("class buttons are working")
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
   var player = new Gauntlet.Combatants.Human();
   player.createClass(e.currentTarget.id)
   console.log(e.currentTarget.id)
  console.log(player)
 })
}

// Added Event Listener to Weapon Buttons and Added Weapon

var buttons = $('.weapons__link');
for (var i = 0; i < buttons.length; i++){
  console.log("weapon buttons are working")
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
   var player = new Gauntlet.Combatants.Human();
   player.createWeapons(e.currentTarget.id)
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


var defeatButton = $("#defeatButton")
defeatButton.addEventListener("click", function () {

})













