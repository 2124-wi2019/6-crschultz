/*Chris Schultz
schultz_a06c.js
Info 2124 WW
Thoendel
01-21-2020*/


//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

while (lottoPicks.length < 5) {   //while there are less than 5 picks in the array
    lottoPicks.push(getLottoNumber()); //run function to get pick, insert pick into array
}//end while

for (i=0; i < lottoPicks.length; i++) {   //for each pick in the array
    switch (lottoPicks[i]) {   //for the 'i'th number in the array, use switch to check its value
        case 22:  //if the value is 22
            winnings += 10;  //increment winnings by 10 bucks
            console.log("You matched 22!");  //print match message
            break;   // quit checking the value    
        case 42:    //if the value is 42
            winnings += 10;   //increment winnings by 10 bucks
            console.log("You matched 42!");  //print match message
            break; //quit checking the value
        case 43:  //if the value is 43
            winnings += 10; //increment winnings by 10 bucks
            console.log("You matched 43!");  //print match message
            break;  //quit checking the value
        case 47:  //ifthe value is 47
            winnings += 10; //increment winnings by 10 bucks
            console.log("You matched 47!");  //print match message
            break; //quit checking the value
        case 61:  //if the value is 61
            winnings += 10;  //increment winnings by 10
            console.log("You matched 61!");  //print match message
            break;  //quit checking the value
        case powerBallPick: //if the value is the same as the powerball pick
            winnings += 100; //increment winnings by 100
            console.log("You matched the PowerBall!");  //print match message
            break; //quit checking the value
    }//end switch
}//end for

if (winnings != 0) {  //if you won something
    console.log("Congratulations! You won $" + winnings);
} else {    //end if; otherwise....
    console.log("Sorry, you didn't win anything. Better luck next time!");
}//end else

    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}

//end program
