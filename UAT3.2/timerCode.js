
//This is the timerCode page
// file creator: James Tramel 
//email jamesltramel@gmail.com



// creating a timer reset
/*Tutor Dylan Crockett helped me with this small detail, I had all of it but "document.getElementById("countDownTimer")" on the first part of the if statement. */

function timerReset() {// changed the ID to 
  if (document.getElementById("countDownTimer").innerHTML !== "Starting countdown here..") {

    document.getElementById("countDownTimer").innerHTML = "Starting countdown here..";
  }
  /* else if (document.getElementById("countDownTimer").innerHTML == count) {
       document.getElementById("countDownTimer").innerHTML = "Starting countdown here..";
   }
   else{
       document.getElementById("countDownTimer").innerHTML == "Warning Less than ½ way to launch, time left = " + count
   }*/

}


// Same function as version 2 with change order update the halfway point

function countDown3() {//set our var. starting position
  var count = 10;

  for (var i = 0; i <= 10; i++) { // iteration... I understand now

    if (i <= 4) {
// as long as the iteration is less than or equal to 4 run the count down by 1 each step
      setTimeout(function () {
        //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
        document.getElementById("countDownTimer").innerHTML = count;
        count--;
      }, 1000 * i);

    }
// when the iteration greater than 4 less but not equal to 10 print out "Warning Less than ½ way to launch, time left + the current count down by 1 each step
    else if (i > 4 && i != 10) {
      setTimeout(function () {
        //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
        document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
        count--;
      }, 1000 * i);
    }
//when the count reaches the end "blast off"
    else {
      setTimeout(function () {
        //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
        count--;
      }, 1000 * i);


    }

    //commented out uneeded code

    // creating a countdown function and name it countdown : version 1
    /* function countDown() 
    
     {//set the count to 10
       var count = 10;
    
       document.getElementById("countDownTimer").innerHTML = count;
      
       count = count - 1;
       // to create a timer we use 'setTimeout' function
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 1000); //timeout in one second
    
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 2000);// time out in two seconds
    
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 3000);// time out in three seconds
    
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 4000);//time out in...do we get the pattern and reasoning yet?
    
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 5000);
       // if not... each time out function has to be set one second further than the last in order to be properly set
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 6000);
        // this one fires off after seven seconds
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 7000);
        //so on...
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 8000);
        // and so forth.
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = count;
         count = count - 1;
       }, 9000);
        //Until we reach the end
       setTimeout(function () {
         document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
         count = count - 1;
       }, 10000);*/

  }
}



//our v2 countdown, more efficient
function countDown2() {//set our var. starting position
  var count = 10;
  for (var i = 1; i <= 10; i++) { // iteration... I understand now
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count--;
    }, 1000 * i);

  }//setting the seconds for our timer cut in and cut out
  setTimeout(function () {
    document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
    count--;
  }, 11000);

}
