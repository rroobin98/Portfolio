
// ----- Toggle Menu ----- //

var navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


// ----- Guess Game ----- //

let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random()*100) + 1;
let numGuesses = 0;
let guessed_nums = [];


function play(){ 


       if (numGuesses >= 20) {
              msg2.textContent = "Du har överskridit antalet gissningar!";
               return
       
             }
    
       let user_guess = document.getElementById("guess").value;
      

       
 
       if(user_guess < 1 || user_guess > 100){
           alert("Du måste välja ett nummer mellan 1 and 100.");
       }
   
       else{
           guessed_nums.push(user_guess);
           numGuesses+= 1;
  
           if(user_guess < answer){
              msg1.textContent = "Numret du valt är för lågt.";
              msg2.textContent = "Antal försök: " + numGuesses;
              msg3.textContent = "Du har redan gissat på: " +
                guessed_nums;
           }
    
           else if(user_guess > answer){
              msg1.textContent = "Numret du valt är för högt.";
              msg2.textContent = "Antal försök " + numGuesses;
              msg3.textContent = "Du har redan gissat på: " +
                 guessed_nums;
           }
    
           else if(user_guess == answer){
              msg1.textContent = "Det var rätt!";
              msg2.textContent = "Numret var: " + answer;
              msg3.textContent = "Du gissade rätt efter "+ numGuesses + " försök";
              document.getElementById("my_btn").disabled = true;
           }
        }
      
    }

    
