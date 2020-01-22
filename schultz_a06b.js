/*Chris Schultz
schultz_a06b.js
Info 2124 WW
Thoendel
01-21-2020*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */

    if (text == 'c' || text == 'C') {    //if choice is c or C
        clearScreen(); //clear screen
        //print appropriate action for choice C (below)
        console.log("You non-challantly walk past the Wizard of Benson with the smug ");
        console.log("confidence of a person who don't need no stinkin' Wizard, lest a ");
        console.log("Wizard of Benson.\n\n");
        endGame(); //end game
    } else if (text == 's' || text == 'S') {  //End If; Begin Else if choice is s or S
        clearScreen();  //clear screen
        //print appropriate action for choice s (below)
        console.log("You walk up to the Wizard, hands sweaty with anticipation. As ");
        console.log("you approach, you note the Wizard is wearing a Hawkeyes hat. Your disappointment" );
        console.log("proves more powerful than your desire to engage a Wizard and instead you ");
        console.log("turn left to buy a nice, warm Runza.\n\n");
        endGame(); //end game
    } else if (text == 't' || text == 'T') {   //End else if s; Begin Else if Choice is t or T
        clearScreen(); //clear screen
        //print appropriate action for choice t (below)
        console.log("You begin approaching the Wizard, hands sweaty with anticipation, ");
        console.log("mouth dry with general dehydration. As you take one step forward, you place ");
        console.log("your entire weight upon the forward leg but your foot fails to make contact ");
        console.log("with solid ground. As the entirety of your uncontrolled body's weight continues ");
        console.log("forward and downward simultaneously, your mind begins considering what ");
        console.log("precisely the $50,000 increase in your home's assessment and matching tax ");
        console.log("increase is paying for.\n\n");
        endGame();  //end game
    } else {     //end else if t; Begin else for all other choices
        clearScreen(); //clear screen
        //print appropriate action for all other choices (below)
        console.log("The Wizard watches as you approach. Determining you're not ");
        console.log("cool enough to hang out with him, the Wizard smugly smiles and ");
        console.log("walks into a vape shop. You below your chance.\n\n");
        endGame();  //end game
    }//end else

    
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}

//end program