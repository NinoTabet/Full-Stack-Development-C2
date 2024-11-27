function main(){

    const person = {
        name : 'Anthony',
        age : 25,
        address: {
            city: 'berlin',
            street: '123 somewhere'
        }
    }
    console.log(person.address.street);
}
main();