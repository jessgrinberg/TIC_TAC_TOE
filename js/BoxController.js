angular
  .module('boxApp')
  .controller('BoxController', BoxController); 

  function BoxController(){
    
    var self = this;
    self.emptyBox = " ";
    self.player1=true;
    self.player2=false;
    self.win = false;
    self.counter = 0;
    self.clickBox = clickBox;

    // self.clearReset = clearReset;
    // self.clearGrid = clearGrid;
    // self.winner = winner;
  // var player1 = true;
  // var player2 = false;

    self.buttons = [
    {active: false, id: 0, display: ""},
    {active: false, id: 1, display: ""},
    {active: false, id: 2, display: ""},
    {active: false, id: 3, display: ""},
    {active: false, id: 4, display: ""},
    {active: false, id: 5, display: ""},
    {active: false, id: 6, display: ""},
    {active: false, id: 7, display: ""},
    {active: false, id: 8, display: ""}
    ];

    function clickBox($index) {
      if (self.player1 == true){
        console.log("X");
        self.buttons[$index].display = "X";
// console.log(self.buttons[$index].display);
        self.buttons[$index].active[$index] = true;
        self.player1 = false;

      } else {
        console.log("0");
        self.buttons[$index].display = "0";
        self.buttons[$index].active[$index] = false;
        self.player1 = true;
      }
      winner();
      self.counter ++;
      console.log(self.counter )
    }


    // function winner($index){
    //   if (((self.player1[$index].active[0] == true) &&
    //        (self.player1[$index].active[1] == true) &&
    //        (self.player1[$index].active[2] == true) )
    //      ) {
    //     console.log("winner player1");
    //   }


    // }

function winner() {
  // console.log("winner x");
  if(
   ((self.buttons[0].display == "X") && (self.buttons[1].display == "X") && (self.buttons[2].display == "X")) ||
   ((self.buttons[3].display == "X") && (self.buttons[4].display == "X") && (self.buttons[5].display == "X")) || 
   ((self.buttons[6].display == "X") && (self.buttons[7].display == "X") && (self.buttons[8].display == "X")) ||
   ((self.buttons[0].display == "X") && (self.buttons[3].display == "X") && (self.buttons[6].display == "X")) || 
   ((self.buttons[1].display == "X") && (self.buttons[4].display == "X") && (self.buttons[7].display == "X")) || 
   ((self.buttons[2].display == "X") && (self.buttons[5].display == "X") && (self.buttons[8].display == "X")) || 
   ((self.buttons[0].display == "X") && (self.buttons[4].display == "X") && (self.buttons[8].display == "X")) || 
   ((self.buttons[2].display == "X") && (self.buttons[4].display == "X") && (self.buttons[6].display == "X")) 
    ) 
  {
  console.log("player one wins");

   win = true;
  } else if
    (
    ((self.buttons[0].display == "0") && (self.buttons[1].display == "0") && (self.buttons[2].display == "0")) ||   
    ((self.buttons[3].display == "0") && (self.buttons[4].display == "0") && (self.buttons[5].display == "0")) || 
    ((self.buttons[6].display == "0") && (self.buttons[7].display == "0") && (self.buttons[8].display == "0")) ||
    ((self.buttons[0].display == "0") && (self.buttons[3].display == "0") && (self.buttons[6].display == "0")) || 
    ((self.buttons[1].display == "0") && (self.buttons[4].display == "0") && (self.buttons[7].display == "0")) || 
    ((self.buttons[2].display == "0") && (self.buttons[5].display == "0") && (self.buttons[8].display == "0")) || 
    ((self.buttons[0].display == "0") && (self.buttons[4].display == "0") && (self.buttons[8].display == "0")) || 
    ((self.buttons[2].display == "0") && (self.buttons[4].display == "0") && (self.buttons[6].display == "0")) 
    ) 
 {
    console.log("player two wins");
  win = true;
}
  else {
   if(self.counter === 8) {
  console.log("It's a Tie!");
   }
 } 


//   // function clearGrid() {
//   //   self.clearReset =(self.buttons[$index]);
//   //   console.log(self.buttons[$index]);
//     // clearReset.style.backgroundColor = null ;
//     // clearReset.innerHTML = "" ;
  
// //   counter=0;
// //   player1=true;
// //   player2=false;
// //   win = false;
// //   console.log("Let's Play !");
// // });

  

//   }
}
}
