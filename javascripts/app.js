/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Broccoli());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());


var opponent = new Gauntlet.Combatants.Orc();
opponent.generateClass();
opponent.weapons = opponent.generateWeapons();


// Added Event Listener to Class Button and Added Player Class

var finalPlayer
var buttons = $('.class__link');
for (var i = 0; i < buttons.length; i++){
   // console.log("class buttons are working")
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
   finalPlayer = new Gauntlet.Combatants.Human();
  finalPlayer.createClass(e.currentTarget.id)
 })
}

// Added Event Listener to Weapon Buttons and Added Weapon

var buttons = $('.weapons__link');
for (var i = 0; i < buttons.length; i++){
  console.log("weapons buttons are working")
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
  finalPlayer.weapons = finalPlayer.createWeapons(e.currentTarget.id)
 })
}



/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {

  function display(player, monster){
  var playerInfo = $("#playerInfo")
  var monsterInfo = $("#monsterInfo")
  playerInfo.html(`<p>${player.class.name}</p>`)
  fight()

  console.log(player)
  console.log(monster)
}

  var defeatButton = $("#defeatButton")
  defeatButton.click(function (e){
    console.log("defeat button works")
    display(finalPlayer, opponent)
  })

  // $("#attackButton").click(function (e){
  //     var monsterHealth = opponent.health.value;
  //     var playerHealth = finalPlayer.health.value;
  //     var monsterDamage = opponent.weapons.damage;
  //     var playerDamage = finalPlayer.weapons.damage;
  //     console.log(monsterHealth playerDamage)
  //   )}

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
      console.log(nextCard)
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapons":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
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

