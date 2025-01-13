import { useState } from "react";

const UseStateExample = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {

        if(name == 'Mario'){
            setName('Luigi');
            setAge(30)
        }else{
            setName('Mario');
            setAge(25)
        }
    }

    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>Hello. My name is {name} and I am {age} years old.</p>
        </div>
    )
}

export default UseStateExample;