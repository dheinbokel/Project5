/**
 *   @author Heinbokel, Doug (dheinbokel@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 5 Arrays, Mid America Bus Company || created: 11.20.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueUsing, numPassengers, numZones, ticketPrice;
const TICKET_FAIRS = [

    [0, 0, 0, 0],
    [7.50, 10.00, 12.00, 12.75],
    [14.00, 18.50, 22.00, 23.00],
    [20.00, 21.00, 32.00, 33.00],
    [25.00, 27.50, 36.00, 37.00]

];

/**
 *   @method
 *   @desc dispatch method for this project
 *   @returns (null)
 */
function main() {

    setContinueUsing();
    while(continueUsing === 1){

        setNumPassengers();
        setNumZones();
        calcTicketPrice();
        displayPrice();

        setContinueUsing();
    }
}

main();

/**
 *   @method
 *   @desc Displays the final ticket price to the user.
 *   @returns (null)
 */
function displayPrice() {

    console.log(`\nYour ticket price is $${ticketPrice.toFixed(2)}.`)
}

/**
 *   @method
 *   @desc Mutator method for the variable ticketPrice
 *   @returns (null)
 */
function calcTicketPrice() {

    ticketPrice = TICKET_FAIRS[numPassengers][numZones];
}

/**
 *   @method
 *   @desc Mutator method for variable numZones
 *   @returns (null)
 */
function setNumZones() {

    numZones = Number(PROMPT.question("\nHow many zones are you traveling on your drive? (0 to 3) "));
    if(numZones === 0 || numZones === 1 || numZones === 2 || numZones === 3){

    }
    else{
        console.log(`\nInvalid response, please try again.`);
        return setNumZones();
    }
}

/**
 *   @method
 *   @desc Mutator method for the variable numPassengers
 *   @returns (null)
 */
function setNumPassengers(){

    numPassengers = Number(PROMPT.question("\nHow many passengers on your drive? (1 to 4) "));
    if(numPassengers === 1 || numPassengers === 2 || numPassengers === 3 || numPassengers === 4){

    }
    else{
        console.log(`\nInvalid response, please try again.`);
        return setNumPassengers();
    }
}


/**
 *   @method
 *   @desc Asks the user for a 0 or 1 to set the continueUsing variable.  If it is less than 0 or more than one or not a number
 *         then the function starts over.  If it succeeds then it lets the number go through.
 *   @returns (null)
 */
function setContinueUsing() {
    continueUsing = Number(PROMPT.question("\nWould you like to continue? (Type 0 for no, 1 for yes) "));
    if (continueUsing > 1 || continueUsing < 0 || isNaN(continueUsing)){
        console.log('\nInvalid response.');
        return setContinueUsing();
    }
    else{

    }
}