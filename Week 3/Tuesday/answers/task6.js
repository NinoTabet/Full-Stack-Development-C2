/*
(Hard) Task 6: If Statements and Control Structures
Create a function findNumber that takes an array of numbers and a target number. 
The function should:
    Loop through the array.
    If the target number is found, log the index and exit the loop using break.
    If the current number is divisible by 3, skip the current iteration using continue.
    Log "Target not found" if the loop completes without finding the target.
 */

function findNumber(numbers, targerNumber){

    let isTargetFound = false;

    for(let i = 0; i<numbers.length; i++){
        if(targerNumber == numbers[i]){
            isTargetFound = true;
            console.log("index is: " + i)
            break;
        }else if(numbers[i]%3 == 0){
            continue;
        }
    }

    if(!isTargetFound){
        console.log("Target not found");
    }

}

let numbers = [4, 5, 3, 2, 7, 8, 42, 52, 57, 87, 99, 55, 34]
let targerNumber = 55;

findNumber(numbers, targerNumber)