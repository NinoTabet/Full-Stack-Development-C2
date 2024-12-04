// add1

function add1 (a, b) {
    return a + b;
}


let add1 = (prop) => {
    try {
        //run js
    } catch (error) {
        //error handling
    }

    return(
        <>
        </>
    )
}


async function fetchData(){
    try {

        const response = await fetch('https://api.example.com/data');
        
        const data = await response.json();
        
        //perform operations wiht your data obj
    } catch (err) {
      //err handling
    }
}

// async
// await
// promises
// arrow functions