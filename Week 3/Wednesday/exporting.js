// const person = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'software dev',
//     introduce: function(){
//         console.log(`Hello! My name is ${this.name} my age is ${this.age} and i'm a ${this.occupation}`)
//     }
// }

// export default person;

const car1 = {
    make: 'toyota',
    model: 'corola',
    year: 2020,
    color: 'red'
}

const car2 = {
    make: 'honda',
    model: 'civic',
    year: 2013,
    color: 'blue'
}

export { car1, car2};

export function createPerson (name, age, occupation){
    return{
        name: name,
        age: age,
        occupation: occupation
    }
}