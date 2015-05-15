angular
  .module('boxApp')
  .controller('BoxController', BoxController); 


  // BoxController.$inject = ['$firebaseObject'];

// control the whole game
function BoxController(){

  var self = this;
  self.emptyBox = "";

  //Boolean for player moves
  self.player1 = true;
  self.player2 = false;

  self.win = false;


  //Set Counter to 0, on each click, the counter will be incremented
  self.counter = 0;

  //ClickBox 
  self.clickBox = clickBox;


  self.message = self.winner;

  //declaration for reset fct
  // self.reset = reset;
  self.clearGrid = clearGrid;
  // self.clearReset = clearReset;

// self.winner = winner;

  //List of 9 boxes
  self.buttons = [

    { active: false, 
      id: 0, 
      display: "" },

    { active: false, 
      id: 1, 
      display: "" },

    { active: false, 
      id: 2, 
      display: "" },

    { active: false, 
      id: 3, 
      display: "" },

    { active: false, 
      id: 4, 
      display: "" },

    { active: false, 
      id: 5, 
      display: "" },

    { active: false, 
      id: 6, 
      display: "" },

    { active: false, 
      id: 7, 
      display: "" },

    { active: false, 
      id: 8, 
      display: "" }

  ];

  //Click X/O and increment counter
  function clickBox($index) {

    // var ref = new Firebase("https://tictactoetpf.firebaseio.com/");
    // var buttons = $firebaseObject(ref);

    //once 1 player won, alert msg to hit reset to start new game, no move is possible once s/o won
    if(self.win){
      alert('To start a new game, hit reset!');
      return
    } 
    //alert if one btn has been clicked, no more click is possible
    if (self.buttons[$index].display != "") {
      alert('This button has already been clicked');
    } else {

    if(self.player1 == true) {
      console.log("X");
      self.buttons[$index].display = "X";
      console.log(self.buttons[$index])
      // console.log(self.buttons[$index].display);
      self.buttons[$index].active[$index] = true;
      self.player1 = false;
    } else {
      console.log("0");
      self.buttons[$index].display = "0";
      self.buttons[$index].active[$index] = false;
      self.player1 = true;
    }
      //call winner fct, add counter count for ea. click
      winner();
      self.counter ++;
      console.log(self.counter)
      console.log(self.win)
  }

}

  //Declare a winner
  function winner() {
    // console.log("winner x");

    //check for a winning combination for player1("X")
    if(
        ((self.buttons[0].display == "X") && (self.buttons[1].display == "X") && (self.buttons[2].display == "X")) || 
        ((self.buttons[3].display == "X") && (self.buttons[4].display == "X") && (self.buttons[5].display == "X")) || 
        ((self.buttons[6].display == "X") && (self.buttons[7].display == "X") && (self.buttons[8].display == "X")) ||
        ((self.buttons[0].display == "X") && (self.buttons[3].display == "X") && (self.buttons[6].display == "X")) || 
        ((self.buttons[1].display == "X") && (self.buttons[4].display == "X") && (self.buttons[7].display == "X")) || 
        ((self.buttons[2].display == "X") && (self.buttons[5].display == "X") && (self.buttons[8].display == "X")) || 
        ((self.buttons[0].display == "X") && (self.buttons[4].display == "X") && (self.buttons[8].display == "X")) || 
        ((self.buttons[2].display == "X") && (self.buttons[4].display == "X") && (self.buttons[6].display == "X")) 
      ) { 
          console.log("player one wins");
          self.win = true;
          self.message = self.newName + " Wins !";
          
    //check for a winning combination for player2("0")      
    } else if (
        ((self.buttons[0].display == "0") && (self.buttons[1].display == "0") && (self.buttons[2].display == "0")) ||   
        ((self.buttons[3].display == "0") && (self.buttons[4].display == "0") && (self.buttons[5].display == "0")) || 
        ((self.buttons[6].display == "0") && (self.buttons[7].display == "0") && (self.buttons[8].display == "0")) ||
        ((self.buttons[0].display == "0") && (self.buttons[3].display == "0") && (self.buttons[6].display == "0")) || 
        ((self.buttons[1].display == "0") && (self.buttons[4].display == "0") && (self.buttons[7].display == "0")) || 
        ((self.buttons[2].display == "0") && (self.buttons[5].display == "0") && (self.buttons[8].display == "0")) || 
        ((self.buttons[0].display == "0") && (self.buttons[4].display == "0") && (self.buttons[8].display == "0")) || 
        ((self.buttons[2].display == "0") && (self.buttons[4].display == "0") && (self.buttons[6].display == "0")) 
      ) {
          console.log("player two wins");
          self.win = true;
          self.message = self.newName2 + " Wins !";

    //once counter reached 8 and no one won, tie!  
    } else if (self.counter === 8) {
           console.log("It's a Tie!");
           self.message = "It's a Tie!";
           // alert('To start a new game, hit reset!');

      }
  }
  //Clear the game without refreshing page by hitting reset button
  function clearGrid($index) {
      // self.buttons.splice({active: false, display: ""});
      self.counter = 0;
      self.player1 = true;
      self.player2 = false;
      self.win = false;
      self.names = [];
      self.names2 = [];
      self.message = "";
      self.buttons = [

    { active: false, 
      id: 0, 
      display: "" },

    { active: false, 
      id: 1, 
      display: "" },

    { active: false, 
      id: 2, 
      display: "" },

    { active: false, 
      id: 3, 
      display: "" },

    { active: false, 
      id: 4, 
      display: "" },

    { active: false, 
      id: 5, 
      display: "" },

    { active: false, 
      id: 6, 
      display: "" },

    { active: false, 
      id: 7, 
      display: "" },

    { active: false, 
      id: 8, 
      display: "" }

  ];
      // self.counter = 0;
      // console.log(self.clearGrid);
     //self.buttons[0],1
  }

// self.setPlayerBlue = setPlayerBlue;
// self.pickBlue = pickBlue;

//  function setPlayer(){
//         self.pickBlue.splice(0, 1);
//         }

    // function clearGrid() {
    // self.clearReset = self.buttons[$index];
    // console.log(self.buttons[$index]);
    // clearReset.style.backgroundColor = null ;
    // clearReset.innerHTML = "" ;


//function clearGrid() {


//Function set players colors
self.appearGame = appearGame;
      self.appear = false;
    

  function appearGame(){

    self.appear = !self.appear;
}


//Function add Names
self.names = [];
self.newName = " ";
self.addNames = addNames;
  function addNames(){
        self.names.push(self.newName);
        }

self.names2 = [];
self.newName2 = " ";
self.addNames2 = addNames2;
  function addNames2(){
        self.names2.push(self.newName2);
        }
}
