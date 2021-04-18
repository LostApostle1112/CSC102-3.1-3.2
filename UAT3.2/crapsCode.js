

//This is the crapsCode page
// file creator: James Tramel 
//email jamesltramel@gmail.com



//setting up the play craps function
function playCraps() {
    //Setting our three needed variables: die1, die2, and sum
    var die1 = Math.ceil(Math.random() * 6);
    //Math.random gives us a float so we use Math.ceil() to round it up
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    // getting the element by ID name to print out our results
    document.getElementById("die1Res").innerHTML = die1;
    // getting the element by ID name to print out our results
    document.getElementById("die2Res").innerHTML = die2;
    // getting the element by ID name to print out our results
    document.getElementById("sumRes").innerHTML = sum;
    //if the sum == 7 or 11 print out "craps you lose"
    if (sum == 7 || sum == 11) {
      document.getElementById("crapsResults").innerHTML = "Craps you Lose!!";
    }
    //else if the die are even and doubles...you win.. the 2%0 returns true if there is no remainder when dividing by 2
    else if (die1 == die2 && die1 % 2 == 0) {
      document.getElementById("crapsResults").innerHTML = "Doubles, you win!!";
    }
  
    //else try again
    else {
      document.getElementById("crapsResults").innerHTML = "Push, please try again.";
    }
  }