/*startGame function (play) {
  console.log("Welcome to the game! Can you save Earth!");
}*/

//Captain ship constructor below

this.myfirepower = ["F", "F", "F", "F", "F"];
class Captain{
  constructor(name, hull,firepower, accuracy) {
    this.name = name;
    this.hull = hull || 20;
    this.accuracy = accuracy || 0.7;
    this.myfirepower= myfirepower.length;
   
    };
  healthCheck() {
    console.log(" %c I am" + this.name +  + this.hull +" hull points left",
    "font-size:1px; background:blue; color:white; border: 4px dashed gold");
  }


    attack(alienShip) {
      if (this.hull >= 1) {
        if (alienShip.name === alienShips[0].name) {
          //// attack the alienship between 1 and 6
          if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
            //// above random to determine % sucess rate
            if (myfirepower[0] == "F") {
              console.log(this.name + " used  firepower 10 hitpoints dealt");
              console.log(
                alienShip.name + " got hit with a firepower, their health is down to"
              );
              console.log((alienShip.hull += -10));
              myfirepower[myfirepower.length] = "o";
              myfirepower.splice(0, 1);
              victory(alienShip); ///// check if you destroted the ship or not and they or the next one returns fire
            } else {
              console.log(
                "%c  you are out of firepower",
                "background:lightskyblue; color:black; font-size:18px;"
              );
              ///// does not count as turn 
              console.log(
                "%c ..... it is still your turn now captian enter your move below ..... ",
                "background:lightskyblue; color:red; font-size:22px;"
              );
            }
          } else {
            console.log(
              "%c  You missed",
              "background:lightgray; color:red;"
            );
            victory(alienShip); //// you missed but that was your turn they get to shoot at you now
          }
        } else {
          console.log(
            "%c You are shooting the wrong alien or target. May be this alien is already dead - choose another target or refresh the page to play again",
            "background:black; color:white; font-size:20px;"
          );
          console.log(
            "%c ..... Its your turn Captain ..... ",
            "background:lightskyblue; color:black; font-size:20px"
          ); //// if you target a dead alien or .... does not count as turn 
        }
      } else {
        console.log("you are dead refresh the game to play again"); ///// if your hull is less than 1 and you are trying to attack still
      }
    }
}


 


/// ok we have our captain ship / us / our character
let captainAmerica = new Captain(" Hulk ");





// Alien ship constructor 

class Alienship {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
    this.firepower = Math.floor(Math.random() * 3) + 2; /// make random between 2 & 4 
    this.accuracy = Math.random() * (.8 - .6) + .6 ///// make random between .6 and .8 
    };
  
  healthCheck() { console.log (" %c We are the " + this.name + this.hull +"hull points left",
  "background:orange; font-size:18px; border:3px white; color:white;");
    
  }
 



  attack(captainAmerica) {
   // if (this.name === alienShips[0].name) {
    if (captainAmerica.name === captainAmerica.name) {
      if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
        console.log(this.name + " says You better work hard" );
          console.log(
          this.name +
            " used  extreme firepower to you ship.."
        );
        console.log(
          captainAmerica.name +
            " got hit with an alien firepower, their health is down to"
        );
        console.log((captainAmerica.hull += -2)); 
        defeat(captainAmerica); /// like above -_- but did you die?
      } else {
        console.log(this.name + "  can not hit"); 
        console.log(
          "Aliens need some training " +
            captainAmerica.name +
            "still strong. Hull power  =  " +
            captainAmerica.hull
        ); /// you know they missed
        defeat(captainAmerica); /// no damage 
      }
    } else {
      console.log("dead aliens can't shoot"); // not sure how they would but just in case if simulating in console log with pre typed functions...
      //return to your move
      defeat(captainAmerica);
    }
  }



}


// would need enemy ships in an array so they can be removed when dead ... empty array = win game

let alienShips = [];


let Alien = new Alienship(" Alien ");




alienShips.push((al1 = new Alienship("AL #1")));
alienShips.push((al2 = new Alienship("AL #2")));
alienShips.push((al3 = new Alienship("AL #3")));
alienShips.push((al4 = new Alienship("AL #4")));
alienShips.push((al5 = new Alienship("AL #5")));
alienShips.push((al6 = new Alienship("AL #6")));

//let captainShips = [];

//captainShips.unshift((cl1 = new Captain("CAP #1")));

const battleWinCheck = alienShip => {
  if (alienShip.hull <= 0) {
    console.log("%c You lost" + alienShip.name ,
    "background:black; color:white; font-size:15px;");
victory();
  } else {
    console.log("keep shooting");
  }
}

// GAME CONDITIONS//
/// check if game is over 
///  else ... there are 6 six alienships to finish.

const captainWin = () => {
  if (alienShips[0] === "dead") {
    console.log("%c You won Captain!",
    "font-style: italic; background: azure; border: 1px solid grey;"
    );
  } else {
    console.log(
      "we have work to do! "
    );
    
    if (alienShips[3] === "dead") {
      alienShips[0].attack(captainAmerica);
    } 
    
  }
}

///// lets make it so a alien ship can be destroyed
///  if ship hull <= 0 remove first with splice add "dead"
///     to the end of alienShip array
//// when first ship in  array = "dead" then game over you got them all!

const victory = () => {
  if (alienShips[0].hull <= 0) {
    console.log(
      "%c !!Captain, you Rock! you destroyed the alien ship ..!!",
      "background:orange; font-size:18px; border:3px solid green; color:white;"
    );
      alienShips[alienShips.length] = "dead";
      alienShips.splice(0, 1);
   return captainWin();
  } else {
    console.log(
      "We are not done yet! Need to kill more aliens!");
  return captainWin();
  }
}






const defeat = captainAmerica => {
  if (captainAmerica.hull <= 0) {
    console.log(
      "%c Game over you are dead.... Sorry - refresh the page to play again",
      "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;"
    );
    
  } else {
    console.log(
      "%c .. Your turn now captian enter your move below .. ",
      "background:lightskyblue; color:black; font-size:20px;"
    );
  }
};




