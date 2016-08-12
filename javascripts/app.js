
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
  // console.log("weapons buttons are working")
 var currButton = buttons[i];
 currButton.addEventListener('click', function(e){
  finalPlayer.weapons = finalPlayer.createWeapons(e.currentTarget.id)
 })
}



var buttons = $('.class__link');
console.log(buttons)
for (var i = 0; i < buttons.length; i++){
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
  var combatants = $("#combatants")
  var playerName = player.class.name
  var monsterName = monster.class.name

  combatants.html(`<h1>${playerName}--vs--${monsterName}</h1>`)

  // fight()
  $("#attackbutton").on("click", function(e) {
      var opponentdDamage = opponent.weapons.damage
      var playerDamage = finalPlayer.weapons.damage
    // console.log("damage", playerDamage)

         // opponent.health += opponent.class.healthBonus;
         // finalPlayer.health += finalPlayer.class.healthBonus;
         //  opponent.strength += opponent.class.strengthBonus;
         //  finalPlayer.strength += finalPlayer.class.strengthBonus;
         //  opponent.intelligence += opponent.class.intelligenceBonus;
         //  finalPlayer.intelligence += finalPlayer.class.intelligenceBonus;
          // console.log("opponent", opponent);
          // console.log("finalPlayer", finalPlayer);

    //

            // finalPlayer's health when gets attacked
            // finalPlayer.health -= Math.round((opponentdDamage + finalPlayer.strength - 20) - (finalPlayer.intelligence/50));

           finalPlayer.health -= Math.round((finalPlayer.strength/10 + playerDamage) + (opponent.intelligence/10));
           opponent.health -= Math.round((opponent.strength/10 + opponentdDamage) + (finalPlayer.intelligence/10));
            // opponent's health when gets attacked
            // opponent.health -= Math.round((playerDamage + opponent.strength - 20) - (opponent.intelligence/50));
            console.log("finalPlayer.health", finalPlayer.health)
            console.log("opponent.health", opponent.health)
            playerInfo.html(`
              <p>${playerName}'s =
              player health ${player.health}</p>
              player intelligence= ${opponent.intelligence}
              player strength= ${opponent.intelligence}
              `)
            monsterInfo.html(`
              <p>${monsterName}'s
              health =${monster.health}</p>
              opponent intelligence= ${opponent.intelligence}
              opponent strength= ${opponent.intelligence}`)

          if (opponent.health <=  0 ) {
            $("#playerWins").addClass("show");
            $("#attackbutton").hide()
          } else if ( finalPlayer.health <= 0){
            $("#enemyWins").addClass("show");
            $("#attackbutton").hide()
          }

        });

  // console.log(player)
  // console.log(monster)
}

  var defeatButton = $("#defeatButton")
  defeatButton.click(function (e){
    // console.log("defeat button works")
    display(finalPlayer, opponent)
  })


  $("#attackbutton").click(fight)

function fight () {
    console.log("this is running")
      var monsterHealth = opponent.health;
      var playerHealth = finalPlayer.health;
      var monsterDamage = opponent.weapons.damage;
      var playerDamage = finalPlayer.weapons.damage;


      for (var i = playerHealth || monsterHealth; i >= 0; i--) {

      playerHealth = playerHealth - monsterDamage
      monsterHealth = monsterHealth - playerDamage

      }

      console.log("player health", playerHealth)
      console.log("monster health", monsterHealth)
      console.log(monsterDamage)
      console.log(playerDamage)
    }


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

