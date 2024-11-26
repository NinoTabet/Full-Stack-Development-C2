function main(){
    let person = {
        name: "John",
        age: 25,
        isStudent: true
    };
    
    person.age += 1;
    
    person.isStudent = false;
    
    console.log(person);

}

main();