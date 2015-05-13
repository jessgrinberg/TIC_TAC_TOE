angular
.module('boxApp')
.controller('BoxController', BoxController); 

function BoxController(){
  
  var self = this;

// var player1 = true;
// var player2 = false;

  self.buttons = [
  {
    name: "button0",
    player1:false,
    player2: false

  },
  {
    name: "button1",
    player1:false,
    player2: false
  },
  {
    name: "button2",
    player1:false,
    player2: false
  },
  {
    name: "button3",
    player1:false,
    player2: false
  },
  {
    name: "button4",
    player1:false,
    player2: false
  },
  {
    name: "button5",
    player1:false,
    player2: false
  },
  {
    name: "button6",
    player1:false,
    player2: false
  },
  {
    name: "button7",
    player1:false,
    player2: false
  },
  {
    name: "button8",
    player1:false,
    player2: false
  }
];

// self.showMole = showMole;

// function showMole () {
// self.buttons.player1 = true;
// }


// self.clickBox = clickBox;



// function clickBox($index) {

// if (self.buttons[$index].player1 == true) {
//    self.buttons[$index].player1 = false;
// }


  //   var button = e.target

  //   if(win){ 
  //     alert('To start a new game, hit reset!');
  //     return
  //   }

  //   if (button.innerHTML !=""){

  //     alert('This button has already been clicked');

  //   } else {

  //     if(player1 == true){
  //        button.style.backgroundColor = "#010163";
  //        button.style.color = "white";
  //        button.innerHTML="X";
  //        document.getElementById("displayResult").innerHTML="Player Two Turn";
  //        player1 = false;
  //     } else {
  //        button.style.backgroundColor="#CF0000";
  //        button.innerHTML="o"; 
  //        button.style.color = "white";
  //        document.getElementById("displayResult").innerHTML="Player One Turn";
  //        player1 = true;
  //     }
  //     winner();
  //     counter ++
  //   }
  // });
}
