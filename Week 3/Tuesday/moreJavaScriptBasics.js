// and operator - &&

const array = [1,2,3,4,5]

array.push(10) // [1,2,3,4,5,10]

array.push('string') // [1,2,3,4,5,10, string]

let num = 0;
do{
    console.log(num);
    num++
}while(num<5);

// ls - lists all documents and files in the directory that your terminal is in
// cd dirName - changes directory to the stated directory name
// node fileName.js - runs your javascript file node 'week 3/tuesday/testingChamber.js'

const fruit = 'banana';

switch(fruit){
    case 'banana':
        console.log('banana');
        break;
    case 'apple':
        console.log('apple');
        break;
    default:
        console.log('what fruit is that?')
}

// break - breaks out of a loop or case to continue the code
// return - breaks out of the entire function
// continue - continues to the next iteration of a loop without running any of the code that follows

// module - % - modulo will print the remainder of 2 numbers. 5%2 = 1 && 4 % 2=0

//Math.random() - prints a random number between 0 and 1
//Math.ceil() - will round up to the nearest integer
//Math.floor() - will round down to the nearest integer

// NOT Operator - !