
//This is the sandboxCode page
// file creator: James Tramel 
//email jamesltramel@gmail.com



//NOTE: Moved TimerCode to its own script

//NOTE: Moved Craps to its own script

// built a sandbox to practice our code in


//Right now I'm attempting to stop my count iteration in order to get my reset to work properly

//my reset will reset at any point in the count but the count picks up and continues. So, logically I have to stop all three iterations in order to reset it properly

var count;

function timedCount() {
  if (resetSandbox == true){stop;}
  count = 10;

  for (var i = 0; i <= 10; i++) { // iteration... I understand now


    if (i <= 4){
//creating a label so the time out function can be refrenced for all three
     A = setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = count--;
      }, 1000 * i);}
      
  
     
    if (i >= 5){
//creating a label so the time out function can be refrenced for all three
     B = setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Warning Less than ½ way to launch, time left = " + count--;
      }, 1000 * i);}
     
    
      
    if(i == 10){
//creating a label so the time out function can be refrenced for all three
     C =setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blast Off!!";
      },1000 * i);}
    
  }
}

//setting the seconds for our timer cut in and cut out





function startSandbox() {

  if (document.getElementById("sandboxDisplay").innerHTML == "Starting countdown here..") {

    timedCount();

  }

}


function resetSandbox() {
//some reason clearTimeout isn't working, I've got something wrong here...
  clearTimeout(A,B,C);

  if (document.getElementById("sandboxDisplay").innerHTML !== "Starting countdown here..") {

    return(
    document.getElementById("sandboxDisplay").innerHTML = "Starting countdown here..")
  }

}





